'use client'
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import SIGN_IN_MUTATION from '@/graphql/mutations/SIGN_IN_MUTATION.gql';
import SIGN_UP_MUTATION from '@/graphql/mutations/SIGN_UP_MUTATION.gql';

interface UserType {
  id: number,
  name: string,
  email: string,
  role: string,
}

interface SessionType {
  token: string | null,
  user: UserType | null,
}

interface AuthContextType {
  didLoad: boolean,
  loading: boolean,
  error: string | null,
  session: SessionType | null,
  signIn: (email: string, password: string) => void,
  signUp: (name: String, email: string, password: string) => void,
  signOut: () => void,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<SessionType | null>(null);
  const [didLoad, setDidLoad] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const [signUpMutation] = useMutation(SIGN_UP_MUTATION);
  const [signInMutation] = useMutation(SIGN_IN_MUTATION);

  const HOME_URL = `/dashboard`;

  useEffect(() => {
    if (!didLoad) {
      const localSession = localStorage.getItem('session')
      if (localSession) {
        setSession(JSON.parse(localSession));
      }
      setDidLoad(true);
    }
    setLoading(false);
  }, [
    didLoad
  ])

  useEffect(() => {
    if (didLoad) {
      if (session) {
        localStorage.setItem('session', JSON.stringify(session));
      } else {
        localStorage.removeItem('session');
      }
    }
  }, [
    session, didLoad
  ])

  const signUp = async (name: String, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await signUpMutation({ variables: { name, email, password } });
      setSession({ token: data.signup.token, user: data.signup.user })
      router.replace(HOME_URL);
    } catch (err: any) {
      console.error(err)
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await signInMutation({ variables: { email, password } });
      setSession({ token: data.signin.token, user: data.signin.user })
      router.replace(HOME_URL);
    } catch (err: any) {
      console.error(err)
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    setError(null);
    try {
      setSession(null)

      if (typeof window !== 'undefined') {
        window.location.href = '/';
      } else {
        router.refresh();
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ didLoad, loading, error, session, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
