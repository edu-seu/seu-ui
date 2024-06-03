'use client'
import { ApolloClient, InMemoryCache, from, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});


const authLink = setContext((_, { headers }) => {
  const localSession = typeof window !== 'undefined' ? localStorage.getItem('session') : null;
  const session = localSession && localSession != 'undefined' ? JSON.parse(localSession) : null
  return {
    headers: {
      ...headers,
      authorization: session?.token ? `Bearer ${session.token}` : '',
    }
  };
});

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});


const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;