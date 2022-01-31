import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Discover } from './Discover';
import { Header } from "./Header";
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

const Index: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <div className="flex flex-wrap p-3">
        {/* search sections */}
        <div className="explore-page flex-grow md:py-6 md:px-10 w-0">
          <Routes>
            <Route path="/" >
              <Route index element={<SearchInput />} />
              <Route path="tv" element={<SearchInput />} />
              <Route path="movies" element={<SearchInput />} />
            </Route>
            <Route path="/search" element={<SearchInput />} />
          </Routes>

          <Routes>
            <Route path="/" >
              <Route index element={<Discover title="Popular Movies" category="movie" />} />
              <Route path="tv" element={<Discover title="Popular TV Shows" category="tv" />} />
              <Route path="movies" element={<Discover title="Popular Movies" category="movie" />} />
            </Route>
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
        {/* end/search sections */}
      </div>
    </div>
  );
};

export default Index;
