const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/paytocare";
const connecttoMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to mongoDB successfully"))
    .catch((error) => {
      console.error("Error connecting to database", error);
    });
};

module.exports = connecttoMongo;