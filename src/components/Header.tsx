import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav className="flex items-center justify-between flex-wrap p-6 pb-3">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <div className="bg-yellow-500 rounded px-3 py-1">
          <span className="font-sans font-black tracking-tighter text-xl">IMDb</span>
        </div>
      </div>
      <div className="block md:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-gray-800 hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow md:flex md:flex-row-reverse md:items-center md:w-auto">
        <div className="text-sm md:w-3/4">
          <Link
            to="/"
            className="font-rubik font-medium block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-600 md:mr-8"
          >
            <span>Movies</span>
            <i className="icon font-bold ion-ios-arrow-down ml-3" />
          </Link>
          <Link
            to="/tv"
            className="font-rubik font-medium block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-600 md:ml-4 md:mr-8"
          >
            <span>TV Show</span>
            <i className="icon font-bold ion-ios-arrow-down ml-3" />
          </Link>
          <a href="#responsive-header" className="font-rubik font-medium block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-600 md:ml-4 md:mr-8">
            <span>Celebs, Events & Photos</span>
            <i className="icon font-bold ion-ios-arrow-down ml-3" />
          </a>
        </div>
      </div>
    </nav>
  </header>
);
