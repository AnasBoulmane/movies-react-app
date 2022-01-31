import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useSWRInfinite from 'swr/infinite'
import { CardList } from './CardList';


const getApiURL = (query: string) => (pageIndex: number) => `/search/multi?query=${query}&page=${pageIndex + 1}`

export const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || ''
  const { data = [], size, setSize }: any = useSWRInfinite(getApiURL(query))
  const items = data.map?.(({ results }: { results: any[] }) => results)?.flat()

  const loadMore = () => setSize(size + 1)

  return (
    <>
      <CardList title={`Search results: ${query}`} items={items} />
      <button onClick={loadMore} className="relative bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-black font-semibold h-12 px-6 rounded-lg flex items-center pointer-events-auto m-auto">Load More</button>
    </>
  );
};
