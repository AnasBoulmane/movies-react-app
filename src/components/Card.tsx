import React from 'react';

export const Card: React.FC = ({ title, poster_path }: any) => (
  <div className="card p-2 w-1/4">
    <img
      className="w-full rounded-2lg"
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
      alt={title}
    />
  </div>
);
