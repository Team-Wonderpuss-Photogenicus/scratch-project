

// const services = 'netflix, prime.subscription';
// const country = 'us';
// const genres = '878';
// const genres_relation = 'or';

// const url = `https://streaming-availability.p.rapidapi.com/search/filters?services=netflix,prime.subscription&country=us&genres=10749,35&genres_relation=or`;


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f267b612b6msh504ab02ca095331p142270jsn257fad83de1e',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

const MoviesController = {
  getByFilters: async (req, res, next) => {
    // const { country, genres } = req.params;
    const services = 'netflix,prime.subscription,prime.rent,prime.buy,apple.rent,apple.buy,hbo,hulu.addon.hbo,prime.addon.hbomaxus,hulu.subscription,hulu.addon.hbo,apple.addon,peacock.free';
    const genres = '10749,35';

    const url = `https://streaming-availability.p.rapidapi.com/search/filters?services=${services}&country=us&output_language=en&order_by=original_title&genres=${genres}&genres_relation=or&desc=true&show_type=movie`;

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      res.locals.results = result;
      return next();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MoviesController;