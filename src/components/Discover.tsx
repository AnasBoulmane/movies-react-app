import React from 'react'
import useSWRInfinite from 'swr/infinite'
import { CardList } from './CardList';

interface Props {
  title: string
  category: string
}

const getApiURL = (category: string) => (pageIndex: number) => `/discover/${category}?page=${pageIndex + 1}`

export const Discover: React.FC<Props> = ({ title, category }) => {
  const { data = [], size, setSize }: any = useSWRInfinite(getApiURL(category))
  const items = data.map?.(({ results }: { results: any[] }) => results)?.flat()

  const loadMore = () => setSize(size + 1)

  return (
    <>
      <CardList title={title} items={items} />
      <button onClick={loadMore} className="relative bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-black font-semibold h-12 px-6 rounded-lg flex items-center pointer-events-auto m-auto">Load More</button>
    </>
  );
};
