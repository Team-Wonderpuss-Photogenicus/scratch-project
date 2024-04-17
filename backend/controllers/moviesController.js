const options = {
  method: 'GET',
  headers: {
    accept: 'f267b612b6msh504ab02ca095331p142270jsn257fad83de1e',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDJkMTBjYmQ5NDRhMjM4ZGEyODY3NmYyNTUwMTAzMSIsInN1YiI6IjY2MWRjOGI4N2FlY2M2MDE2MzZhYzA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZo5hhwTMoFBdXLbXC6U0i_M_cYijQzP5oMXg09qc_Y'
  }
};

const moviesController = {
  getMovieList: async (req, res, next) => {
    const { with_genres } = req.params;
    
    // const services = 'netflix,prime.subscription,prime.rent,prime.buy,apple.rent,apple.buy,hbo,hulu.addon.hbo,prime.addon.hbomaxus,hulu.subscription,hulu.addon.hbo,apple.addon,peacock.free';
    // const country = 'us';
    // const output_language = 'en';
    // const order_by = 'original_title';
    // const genres_relation = 'or';
    // const desc = 'true';
    // const show_type = 'movie';
    // let cursor;
    // if (nextCursor) cursor = `cursor=${nextCursor}`;
    
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=us&with_genres=${with_genres}}`;
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      res.locals.list = result;
      return next();
    } catch (err) {
      return next({ log: 'Error in moviesController.getMovieList: ', err });
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
      return next({ log: 'Error in moviesController.getMovieDetails: ', err });
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
      return next({ log: 'Error in moviesController.getWatchProviders: ', err });
    }
  }
}

module.exports = moviesController;