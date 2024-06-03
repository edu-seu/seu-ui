'use client'
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';
import { AuthProvider } from '@/context/authContext';


export default function RootProviders({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ApolloProvider>
    );
}
