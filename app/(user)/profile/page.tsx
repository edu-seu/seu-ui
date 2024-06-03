'use client'
import GET_ME from '@/graphql/queries/GET_ME.gql';
import { useQuery } from '@apollo/client';

type Data = {
  id: string;
  name: string;
  email: string;
};

type QueryResult = {
  me: Data;
};

export default function Home() {
  const { loading, error, data } = useQuery<QueryResult>(GET_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="h-full bg-white rounded-md shadow my-auto p-8">
      <h1>My Profile</h1>
      <ul key={data?.me?.id}>
        <li>{data?.me?.name}</li>
        <li>{data?.me?.email}</li>
      </ul>
    </div>
  );
}
