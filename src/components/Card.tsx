import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number
  title: string
  image: string
  type?: 'movies' | 'tv'
}

export const Card: React.FC<Props> = ({ id, title, image, type = 'movies' }: any) => (
  <article className="card p-2 w-1/4">
    <Link to={`/${type}/${id}`}>
      <img
        className="w-full rounded-2lg"
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image}`}
        alt={title}
      />
    </Link>
  </article>
);
