import React from 'react'
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export const SearchInput: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target)
    const urlEncoded = new URLSearchParams(data as any)
    navigate(`/search?${urlEncoded.toString()}`)
  }

  return (
    <>
      <h2 className="font-rubik font-semibold text-4xl text-left leading-none mb-5">Explore</h2>
      {/* search bar & filters */}
      <form onSubmit={onSubmit}>
        <div className="flex my-8">
          <input
            id="query"
            name="query"
            key={searchParams.get('query') || 'query'}
            defaultValue={searchParams.get('query') || ''}
            className="flex-grow w-0 bg-gray-100 font-rubik text-sm text-gray-600 md:px-4 md:h-12 md:rounded-2lg"
            placeholder="Search for a movie, tv show, person..."
          />
        </div>
      </form>
    </>
  );
};
