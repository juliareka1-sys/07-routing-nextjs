import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from '@/app/notes/Notes.client';

const Notes = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', '', 1],
    queryFn: () => fetchNotes('', 1),
  });

  const dehydrated = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydrated}>
      <NotesClient />
    </HydrationBoundary>
  );
};

export default Notes;