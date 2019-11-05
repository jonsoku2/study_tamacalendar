const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDb Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
