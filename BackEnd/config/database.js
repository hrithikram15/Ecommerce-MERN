const mongoose = require("mongoose");

const createDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Mongo connected with server" + data.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = createDB;
