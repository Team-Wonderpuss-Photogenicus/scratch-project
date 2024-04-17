import React from "react";
import MovieComponent from "../components/MovieComponents.jsx";

const response = [{
  type: "movie",
  title: "#LuckyNumber",
  overview:
    "A young man's life is on a losing streak until he gets the old cell number of a major basketball star nicknamed The Saint and starts using it to get VIP access to A List parties. He's living the good life. Until his idol finds out.",
  streamingInfo: {
    us: [
      {
        service: "prime",
        streamingType: "addon",
        quality: "sd",
        addon: "brownsugar",
        link: "https://www.amazon.com/gp/video/detail/B017KZE7OC/ref=atv_dp?language=en",
        audios: [
          {
            language: "eng",
            region: "",
          },
        ],
        subtitles: [
          {
            locale: {
              language: "eng",
              region: "",
            },
            closedCaptions: true,
          },
        ],
        availableSince: 1704141698,
      },
      {
        service: "prime",
        streamingType: "buy",
        quality: "sd",
        link: "https://www.amazon.com/gp/video/detail/B017KZE7OC/ref=atv_dp?language=en",
        audios: [
          {
            language: "eng",
            region: "",
          },
        ],
        subtitles: [
          {
            locale: {
              language: "eng",
              region: "",
            },
            closedCaptions: true,
          },
        ],
        price: {
          amount: "7.99",
          currency: "USD",
          formatted: "7.99 USD",
        },
        availableSince: 1690136044,
      },
      {
        service: "prime",
        streamingType: "subscription",
        quality: "sd",
        link: "https://www.amazon.com/gp/video/detail/B017KZE7OC/ref=atv_dp?language=en",
        audios: [
          {
            language: "eng",
            region: "",
          },
        ],
        subtitles: [
          {
            locale: {
              language: "eng",
              region: "",
            },
            closedCaptions: true,
          },
        ],
        availableSince: 1690136044,
      },
      {
        service: "prime",
        streamingType: "rent",
        quality: "sd",
        link: "https://www.amazon.com/gp/video/detail/B017KZE7OC/ref=atv_dp?language=en",
        audios: [
          {
            language: "eng",
            region: "",
          },
        ],
        subtitles: [
          {
            locale: {
              language: "eng",
              region: "",
            },
            closedCaptions: true,
          },
        ],
        price: {
          amount: "2.99",
          currency: "USD",
          formatted: "2.99 USD",
        },
        availableSince: 1690136044,
      },
      {
        service: "prime",
        streamingType: "buy",
        quality: "hd",
        link: "https://www.amazon.com/gp/video/detail/B017KZE7OC/ref=atv_dp?language=en",
        audios: [
          {
            language: "eng",
            region: "",
          },
        ],
        subtitles: [
          {
            locale: {
              language: "eng",
              region: "",
            },
            closedCaptions: true,
          },
        ],
        price: {
          amount: "9.99",
          currency: "USD",
          formatted: "9.99 USD",
        },
        availableSince: 1690136044,
      },
      {
        service: "prime",
        streamingType: "rent",
        quality: "hd",
        link: "https://www.amazon.com/gp/video/detail/B017KZE7OC/ref=atv_dp?language=en",
        audios: [
          {
            language: "eng",
            region: "",
          },
        ],
        subtitles: [
          {
            locale: {
              language: "eng",
              region: "",
            },
            closedCaptions: true,
          },
        ],
        price: {
          amount: "3.99",
          currency: "USD",
          formatted: "3.99 USD",
        },
        availableSince: 1690136044,
      },
      {
        service: "peacock",
        streamingType: "free",
        quality: "hd",
        link: "https://www.peacocktv.com/watch/asset/movies/lucky-number/82e6739f-fea9-351d-ad6c-6e700091567e",
        videoLink:
          "https://www.peacocktv.com/watch/playback/vod/GMO_00000000465887_01/82e6739f-fea9-351d-ad6c-6e700091567e",
        audios: [
          {
            language: "eng",
            region: "",
          },
        ],
        subtitles: [
          {
            locale: {
              language: "eng",
              region: "USA",
            },
            closedCaptions: false,
          },
        ],
        leaving: 32503715940,
        availableSince: 1686813631,
      },
      {
        service: "peacock",
        streamingType: "subscription",
        quality: "hd",
        link: "https://www.peacocktv.com/watch/asset/movies/lucky-number/82e6739f-fea9-351d-ad6c-6e700091567e",
        videoLink:
          "https://www.peacocktv.com/watch/playback/vod/GMO_00000000465887_01/82e6739f-fea9-351d-ad6c-6e700091567e",
        audios: [
          {
            language: "eng",
            region: "",
          },
        ],
        subtitles: [
          {
            locale: {
              language: "eng",
              region: "USA",
            },
            closedCaptions: false,
          },
        ],
        leaving: 32503715940,
        availableSince: 1686813631,
      },
    ],
  },
  cast: [
    "Tom Pelphrey",
    "Natalie Hall",
    "Method Man",
    "Malcolm Goodwin",
    "Joseph Russo",
    "Milena Govich",
    "Carme Boixadera",
  ],
  year: 2015,
  imdbId: "tt2538204",
  tmdbId: 359732,
  originalTitle: "#LuckyNumber",
  genres: [
    {
      id: 35,
      name: "Comedy",
    },
  ],
  directors: ["Brendan Gabriel Murphy"],
}];

//will need to make fetch req that makes array of obj
//convert each object into elements

const url = "";



const MovieContainer = (movie) => {

    // try {
    // const res = await fetch(url, () => {})
    // const movies = await res.json()
    // } catch (err) {

    // }



  const moviesMap = movie?.map((movie, index) => { //question make makes it conditional
    return (
      <MovieComponent
        title={movie.title}
        year={movie.year}
        overview={movie.overview}
        genres={Genre}
        directors={movie.directors}
        cast={movie.cast}
        streamingInfo={movie.streamingInfo}
      />
    );
  });

  console.log("title: ", movie.title);
  return (
    <div>
    {moviesMap ? moviesMap : null}
    </div>
  );
};

function genreList (movie) {
    const genreMap = movies.genres.map((item, index) => {
        <Genre key={index} text={item} />;
    });
    
    return { Genre };
};

function Genre (props) {
    return <div>{props.text}</div>;
};

export default MovieContainer;

{/* <MovieComponent
  title={movie.title}
  year={movie.year}
  overview={movie.overview}
  genres={Genre}
  directors={movie.directors}
  cast={movie.cast}
  streamingInfo={movie.streamingInfo}
/> */}