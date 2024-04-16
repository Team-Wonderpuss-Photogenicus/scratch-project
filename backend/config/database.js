const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://naj89:pAUJJTRKQ5iWSS5P@cluster0.i1t8y4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('Connected to Database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
