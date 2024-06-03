'use client'
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';


export default function RootProviders({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
