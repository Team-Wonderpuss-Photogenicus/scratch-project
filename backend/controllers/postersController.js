const postersController = {};

// const fetch = require('node-fetch');

const url =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4MDlkNmE4OTE3ZTY4YjJlZDYxZjdhYWYwODFjMyIsInN1YiI6IjY2MWJlODY1ZGJhZDUwMDE3YjQzOTViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JTk0Fw08cJtkM9mQC_O7-jAj67h9O5E4p4_JAZRsRGg',
  },
};

postersController.getMovieList = (res, req, next) => {
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      //   res.locals.movieList = json;
      return next();
    })
    .catch((err) => console.error('error:' + err));
};

postersController.getMovieDetails = (res, req, next) => {
  //   const movieId = req.params.movieId;
  //   console.log('this is movie id->', movieId);
  const detailsUrl = `https://api.themoviedb.org/3/movie/693134?language=en-US`;
  fetch(detailsUrl, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      //   res.locals.movieList = json;
      return next();
    })
    .catch((err) => console.error('error:' + err));
};

module.exports = postersController;
