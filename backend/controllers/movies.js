/* url = 'https://streaming-availability.p.rapidapi.com/search/filters?services=%3CREQUIRED%3E&country=%3CREQUIRED%3E&output_language=en&order_by=original_title&genres_relation=and&show_type=all'

options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f267b612b6msh504ab02ca095331p142270jsn257fad83de1e',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
}*/

const MoviesController = {
  searchByFilters: (req, res, next) => {
    const { services, country, genres, genres_relation } = req.params;
    
  }
};