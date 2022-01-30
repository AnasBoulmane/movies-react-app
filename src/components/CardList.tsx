import React from 'react';
import { Card } from './Card';

interface Props {
  title: string
  items: any[]
}

export const CardList: React.FC<Props> = ({ title, items }) => (
  <>
    <h2 className="font-rubik font-semibold text-3xl text-left leading-none mb-5">
      {title}
    </h2>
    {/* movies section */}
    <div className="flex flex-wrap mb-12 -mx-2">
      {items.map(({ title, poster_path }: any) => (
        <Card
          key={title}
          title={title}
          image={poster_path}
        />
      ))}
    </div>
  </>
);

export const CardListTestData = {
  sections: [{
    title: 'now playing',
    open: false,
    items: [
      {
        "popularity": 111.582,
        "vote_count": 2887,
        "video": false,
        "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
        "id": 458156,
        "adult": false,
        "backdrop_path": "/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg",
        "original_language": "en",
        "original_title": "John Wick: Chapter 3 - Parabellum",
        "genre_ids": [
          28,
          80,
          53
        ],
        "title": "John Wick: Chapter 3 - Parabellum",
        "vote_average": 7.1,
        "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
        "release_date": "2019-05-17"
      },
      {
        "popularity": 100.458,
        "vote_count": 425,
        "video": false,
        "poster_path": "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
        "id": 559969,
        "adult": false,
        "backdrop_path": "/uLXK1LQM28XovWHPao3ViTeggXA.jpg",
        "original_language": "en",
        "original_title": "El Camino: A Breaking Bad Movie",
        "genre_ids": [
          80,
          18,
          53
        ],
        "title": "El Camino: A Breaking Bad Movie",
        "vote_average": 7.5,
        "overview": "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
        "release_date": "2019-10-11"
      },
      {
        "popularity": 76.194,
        "vote_count": 2247,
        "video": false,
        "poster_path": "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
        "id": 466272,
        "adult": false,
        "backdrop_path": "/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
        "original_language": "en",
        "original_title": "Once Upon a Time... in Hollywood",
        "genre_ids": [
          35,
          18
        ],
        "title": "Once Upon a Time... in Hollywood",
        "vote_average": 7.6,
        "overview": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "release_date": "2019-07-26"
      },
      {
        "popularity": 81.851,
        "vote_count": 161,
        "video": false,
        "poster_path": "/klkFYDZOetegK8floj6IjvbzzQ2.jpg",
        "id": 513045,
        "adult": false,
        "backdrop_path": "/xgfn98c2UzvFWP6MXDzytearmQ3.jpg",
        "original_language": "en",
        "original_title": "Stuber",
        "genre_ids": [
          28,
          35,
          80,
          53
        ],
        "title": "Stuber",
        "vote_average": 6.5,
        "overview": "After crashing his car, a cop who's recovering from eye surgery recruits an Uber driver to help him catch a heroin dealer. The mismatched pair soon find themselves in for a wild day of stakeouts and shootouts as they encounter the city's seedy side.",
        "release_date": "2019-07-12"
      },
      {
        "popularity": 73.88,
        "vote_count": 598,
        "video": false,
        "poster_path": "/4WH6AZd473lRZ3hUp8TYiv2LfZW.jpg",
        "id": 511987,
        "adult": false,
        "backdrop_path": "/lm4xH0YwFbVvTgdtau1thNK5S6J.jpg",
        "original_language": "en",
        "original_title": "Crawl",
        "genre_ids": [
          28,
          18,
          27,
          53
        ],
        "title": "Crawl",
        "vote_average": 6.1,
        "overview": "When a huge hurricane hits her hometown in Florida, Haley ignores evacuation orders to look for her father. After finding him badly wounded, both are trapped by the flood. With virtually no time to escape the storm, they discover that rising water levels are the least of their problems.",
        "release_date": "2019-07-12"
      }
    ]
  }, {
    title: 'on TV',
    open: true,
    items: [
      {
        "popularity": 675.047,
        "vote_count": 2300,
        "video": false,
        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "id": 475557,
        "adult": false,
        "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        "original_language": "en",
        "original_title": "Joker",
        "genre_ids": [
          80,
          18,
          53
        ],
        "title": "Joker",
        "vote_average": 8.7,
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "release_date": "2019-10-04"
      },
      {
        "popularity": 214.749,
        "vote_count": 1474,
        "video": false,
        "poster_path": "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        "id": 474350,
        "adult": false,
        "backdrop_path": "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
        "original_language": "en",
        "original_title": "It Chapter Two",
        "genre_ids": [
          27
        ],
        "title": "It Chapter Two",
        "vote_average": 7,
        "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
        "release_date": "2019-09-06"
      },
      {
        "popularity": 151.746,
        "vote_count": 2580,
        "video": false,
        "poster_path": "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
        "id": 301528,
        "adult": false,
        "backdrop_path": "/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
        "original_language": "en",
        "original_title": "Toy Story 4",
        "genre_ids": [
          12,
          16,
          35,
          14,
          10751
        ],
        "title": "Toy Story 4",
        "vote_average": 7.6,
        "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
        "release_date": "2019-06-21"
      },
      {
        "popularity": 143.656,
        "vote_count": 149,
        "video": false,
        "poster_path": "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
        "id": 453405,
        "adult": false,
        "backdrop_path": "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
        "original_language": "en",
        "original_title": "Gemini Man",
        "genre_ids": [
          28,
          53
        ],
        "title": "Gemini Man",
        "vote_average": 6.1,
        "overview": "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
        "release_date": "2019-10-11"
      },
      {
        "popularity": 144.125,
        "vote_count": 420,
        "video": false,
        "poster_path": "/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
        "id": 522938,
        "adult": false,
        "backdrop_path": "/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
        "original_language": "en",
        "original_title": "Rambo: Last Blood",
        "genre_ids": [
          28,
          53
        ],
        "title": "Rambo: Last Blood",
        "vote_average": 6,
        "overview": "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
        "release_date": "2019-09-20"
      },
    ]
  }, {
    title: 'coming soon',
    items: []
  }]
};