// app/posts/page.tsx
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PostsList from './posts-list';

export default async function PostsPage() {
  const queryClient = new QueryClient();

  // Prefetch data from your API or DB
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      return res.json();
    },
  });

  return (
    // Dehydrate the cache and pass it to the client
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  );
}