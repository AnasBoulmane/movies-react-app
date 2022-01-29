import React from 'react'


export const MovieSidebarItem = ({ title, items, open }: any) => (
  <div className={`accordion-item rounded-2xl ${open ? 'open bg-gray-700' : ''}`} key={title}>
    <div className="card-header">
      <button className={`flex items-center w-full px-4 pt-3 font-bold text-left text-xs uppercase ${open ? 'pb-2' : 'pb-3'}`}>
        <span className="flex-grow">{title}</span>
        <i className="icon ion-ios-add text-2xl text-gray-700"/>
      </button>
    </div>
    {
      open && (
        <div className="pb-5">
          {
            items
              .slice(0, 4)
              .map(({
                      title,
                      popularity,
                      poster_path,
                      vote_average
                    }: any) => (
                <div className="flex items-center px-4 py-2 rounded-xl">
                  <div className="image">
                    <img
                      className="h-12 w-12 rounded-lg"
                      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                      alt={title} />
                  </div>
                  <div className="flex-grow px-2 py-1.4 text-left font-semibold">
                    <span className="block text-xxs">{title}</span>
                    <span className="block text-xxxs mt-1.4 text-gray-600">${vote_average}M</span>
                  </div>
                  <span className="font-semibold text-yellow-500 block text-xxs">{vote_average}</span>
                </div>
              ))
          }
          <button className="font-bold text-center text-xs uppercase mx-auto">
            more results
          </button>
        </div>
      )
    }
  </div>
);
