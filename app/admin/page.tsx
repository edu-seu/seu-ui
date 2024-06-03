'use client'
import GET_USERS from '@/graphql/queries/GET_USERS.gql';
import { useQuery } from '@apollo/client';

type Data = {
  id: string;
  name: string;
  email: string;
};

type QueryResult = {
  users: {
    data: Data[]
  };
};

export default function AdminPanel() {
  const { loading, error, data } = useQuery<QueryResult>(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="h-full bg-white rounded-md shadow my-auto p-8">
      <h1>Data from GraphQL</h1>
      <ul>
        {data?.users.data.map(item => (
          <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
