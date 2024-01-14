const mongoose = require("mongoose");

mongoose
  .connect(
    `${process.env.MONGODB_URI_LOCAL}${process.env.MONGODB_DATABASE_NAME}`
  )
  .then((response) => {
    if (response) {
      console.log("Database connected successfully");
    }
  })
  .catch((error) => {
    console.log("Error connecting to database");
    console.error(error);
  });
