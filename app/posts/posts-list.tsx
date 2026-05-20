// app/posts/posts-list.tsx

'use client';
import { useQuery } from '@tanstack/react-query';

export default function PostsList() {
  // This hook will immediately return the prefetched data from the server
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      return res.json();
    },
  });

  return (
    <>
    <h1><strong>Posts List</strong></h1>
    <ul>
      {data?.map((post: any) => (
        <li key={post.id}><strong>{post.id}.</strong> {post.title}</li>
      ))}
    </ul>
    </>
  );
}