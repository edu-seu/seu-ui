'use client'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import SIGN_IN_MUTATION from '@/graphql/mutations/SIGN_IN_MUTATION.gql';
import SIGN_UP_MUTATION from '@/graphql/mutations/SIGN_UP_MUTATION.gql';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const [signUpMutation] = useMutation(SIGN_UP_MUTATION);
    const [signInMutation] = useMutation(SIGN_IN_MUTATION);

    const HOME_URL = `/dashboard`;

    const setSession = async (token: string, user: any) => {
        localStorage.setItem('session', JSON.stringify({ token, user }))
        router.replace(HOME_URL);
    }

    const signUp = async (name: String, email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await signUpMutation({ variables: { name, email, password } });
            await setSession(data.signup.token, data.signup.user)
        } catch (err: any) {
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
            await setSession(data.signin.token, data.signin.user)
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        setLoading(true);
        setError(null);
        try {
            localStorage.removeItem('session')
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        signUp,
        signIn,
        signOut,
        loading,
        error,
    };
};

export function getSession() {
    const session = localStorage.getItem('session');
    return session && session != undefined && session != "undefined" ? JSON.parse(session) : null;
}


export default useAuth;
