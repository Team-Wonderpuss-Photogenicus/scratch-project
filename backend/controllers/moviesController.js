const fsCallback = require("fs");
const path = require("path");

const options = {
  method: "GET",
  headers: {
    accept: "f267b612b6msh504ab02ca095331p142270jsn257fad83de1e",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDJkMTBjYmQ5NDRhMjM4ZGEyODY3NmYyNTUwMTAzMSIsInN1YiI6IjY2MWRjOGI4N2FlY2M2MDE2MzZhYzA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZo5hhwTMoFBdXLbXC6U0i_M_cYijQzP5oMXg09qc_Y",
  },
};

const moviesController = {
  getMovieList: async (req, res, next) => {
    const emoList = res.locals.emotionList;
    // const { emotion } = req.params;

    const { emotion, matchOrEscape, page } = req.body;
    console.log(req.body);
    const obj = emoList.find((emo) => emo.emotion === emotion);

    let with_genres = obj[matchOrEscape];
    with_genres = with_genres.join("|");

    const sort_by = "popularity.desc";
    const watch_region = "us";

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort_by}&watch_region=${watch_region}&with_genres=${with_genres}`;

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      //add genre mapping function
      const genreMappingPath = path.join(
        __dirname,
        "..",
        "data",
        "genreMapping.json"
      );
      const genreMappingData = fsCallback.readFileSync(
        genreMappingPath,
        "utf8"
      );
      const genreMapping = JSON.parse(genreMappingData);
      const test = getGenreId(result, genreMapping);

      res.locals.list = test;
      return next();
    } catch (err) {
      return next({ log: "Error in moviesController.getMovieList: ", err });
    }
  },

  getMovieDetails: async (req, res, next) => {
    const { movie_id } = req.params;

    const deetsUrl = `https://api.themoviedb.org/3/movie/${movie_id}?append_to_response=credits&language=en-US`;

    try {
      const response = await fetch(deetsUrl, options);
      const result = await response.json();
      res.locals.details = result;
      // console.log(res.locals.details);
      return next();
    } catch (err) {
      return next({ log: "Error in moviesController.getMovieDetails: ", err });
    }
  },

  getWatchProviders: async (req, res, next) => {
    const { movie_id } = req.params;

    const providerUrl = `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`;

    try {
      const response = await fetch(providerUrl, options);
      const result = await response.json();
      res.locals.providers = result;
      return next();
    } catch (err) {
      return next({
        log: "Error in moviesController.getWatchProviders: ",
        err,
      });
    }
  },
};

function getGenreId(result, genreMapping) {
  const mappedResult = result.results.map((movie) => {
    const genres = movie.genre_ids.map((genreId) => {
      const genre = genreMapping.genres.find((g) => g.id === genreId);

      //console.log(`genre ${genre.name}`);
      return genre.name;
    });
    //console.log(`genres ${genres}`);

    return { ...movie, genres: genres.join(",") };
  });
  return { ...result, results: mappedResult };
}

module.exports = moviesController;
