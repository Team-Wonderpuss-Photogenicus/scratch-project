// const postersController = {};

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4MDlkNmE4OTE3ZTY4YjJlZDYxZjdhYWYwODFjMyIsInN1YiI6IjY2MWJlODY1ZGJhZDUwMDE3YjQzOTViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JTk0Fw08cJtkM9mQC_O7-jAj67h9O5E4p4_JAZRsRGg',
//   },
// };

// postersController.getMovieList = (req, res, next) => {
//   const id = req.params.genreId;
//   // res.send(`Received ID: ${id}`);
//   const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=us&with_genres=${id}`;

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json);
//       res.locals.movieList = json;
//       return next();
//     })
//     .catch((err) => console.error('error:' + err));
// };

// postersController.getMovieDetails = (req, res, next) => {
//   const id = req.params.id;
//   console.log('new api', id);
//   res.locals.id = id;
//   const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
//   fetch(detailsUrl, options)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json);
//       res.locals.movieDetails = json;
//       return next();
//     })
//     .catch((err) => console.error('error:' + err));
// };
// module.exports = postersController;
