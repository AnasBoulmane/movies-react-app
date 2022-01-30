import React from 'react';

interface Props {
  title: string
  image: string
}

export const Card: React.FC<Props> = ({ title, image }: any) => (
  <div className="card p-2 w-1/4">
    <img
      className="w-full rounded-2lg"
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image}`}
      alt={title}
    />
  </div>
);
