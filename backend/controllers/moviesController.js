const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f267b612b6msh504ab02ca095331p142270jsn257fad83de1e',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

const moviesController = {
  getByFilters: async (req, res, next) => {
    const { genres, nextCursor } = req.params;

    const services = 'netflix,prime.subscription,prime.rent,prime.buy,apple.rent,apple.buy,hbo,hulu.addon.hbo,prime.addon.hbomaxus,hulu.subscription,hulu.addon.hbo,apple.addon,peacock.free';
    const country = 'us';
    const output_language = 'en';
    const order_by = 'original_title';
    const genres_relation = 'or';
    const desc = 'true';
    const show_type = 'movie';
    let cursor;
    if (nextCursor) cursor = `cursor=${nextCursor}`;

    const url = `https://streaming-availability.p.rapidapi.com/search/filters?services=${services}&country=${country}&output_language=${output_language}&order_by=${order_by}&genres=${genres}&genres_relation=${genres_relation}&desc=${desc}&show_type=${show_type}&${cursor}`;

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      res.locals.movies = result;
      return next();
    } catch (error) {
      return next({ log: 'Error in MoviesController.getByFilters: ', error });
    }
  }
}

module.exports = moviesController;