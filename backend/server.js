const express = require('express');
const connectDB = require('./config/database');
const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const api = require('./routes/api');
const emotions = require('./routes/emotions');
const movies = require('./routes/movies');
// const posters = require('./routes/posters');

app.use('/api/emotions', emotions);
app.use('/api/movies', movies);
// app.use('/api/posters', posters);
app.use('/api', api);

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler found an unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
