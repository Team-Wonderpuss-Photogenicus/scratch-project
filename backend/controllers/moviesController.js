const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4MDlkNmE4OTE3ZTY4YjJlZDYxZjdhYWYwODFjMyIsInN1YiI6IjY2MWJlODY1ZGJhZDUwMDE3YjQzOTViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JTk0Fw08cJtkM9mQC_O7-jAj67h9O5E4p4_JAZRsRGg'
  }
};

const moviesController = {
  getMovieList: async (req, res, next) => {
    const { genreId } = req.params;

    const services = 'netflix,prime.subscription,prime.rent,prime.buy,apple.rent,apple.buy,hbo,hulu.addon.hbo,prime.addon.hbomaxus,hulu.subscription,hulu.addon.hbo,apple.addon,peacock.free';
    const country = 'us';
    const output_language = 'en';
    const order_by = 'original_title';
    const genres_relation = 'or';
    const desc = 'true';
    const show_type = 'movie';
    

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=us&with_genres=${id}`;

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      res.locals.movieList = result;
      return next();
    } catch (err) {
      return next({ log: 'Error in moviesController.getMovieList: ', err });
    }
  },

  getMovieDetails: async (req, res, next) => {
    const { id } = req.params.id;
    res.locals.movieId = id;

    const deetsUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  
    try {
      const response = await fetch(deetsUrl, options);
      const result = await response.json();
      res.locals.movieDetails = result;
      return next();
    } catch (err) {
      return next({ log: 'Error in moviesController.getMovieDetails: ', err });
    }
  }
}

module.exports = moviesController;