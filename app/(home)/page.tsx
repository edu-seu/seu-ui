'use client'

type Data = {
  id: string;
  name: string;
  email: string;
};

type QueryResult = {
  users: Data[];
};

export default function Home() {
  return (
    <div className="h-full bg-white rounded-md shadow my-auto p-8">
      <h1>Home Page</h1>
    </div>
  );
}
