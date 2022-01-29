import React from 'react';
import { CardList, CardListTestData } from './CardList';
import { Header } from "./Header";

const Index: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-wrap p-3">
        {/* <Sidebar sections={Props.sections}/> */}
        <div className="explore-page flex-grow md:py-6 md:px-10 w-0">
          <h2 className="font-rubik font-semibold text-4xl text-left leading-none mb-5">Explore</h2>
          {/* search bar & filters */}
          <div className="flex my-8">
            <input
              type="text"
              className="flex-grow w-0 bg-gray-100 font-rubik text-sm text-gray-600 md:px-4 md:h-12 md:rounded-2lg"
              placeholder="Search for a movie, tv show, person..."
            />
          </div>
          {/* news & video section */}
          <CardList title="Top Movies 2019" items={CardListTestData.sections[0].items} />
        </div>
      </div>
    </div>
  );
};

export default Index;
