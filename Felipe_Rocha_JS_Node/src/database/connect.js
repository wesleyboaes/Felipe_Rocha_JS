const mongoose = require("mongoose");

const connectToDatabase = async () => {
  // Current versions of Mongoose no longer supports direct callback in function
  //   await mongoose.connect(
  //     `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs-feliperocha.lrsnttk.mongodb.net/?appName=NodeJS-FelipeRocha`,
  //     (error) => {
  //       if (error) {
  //         return console.log(
  //           "An error has occurred while connecting database: ",
  //           error
  //         );
  //       }
  //       return console.log("Database connected successfully!");
  //     }
  //   );

  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs-feliperocha.lrsnttk.mongodb.net/?appName=NodeJS-FelipeRocha`
    )
    .then(console.log("Database connected successfully!"))
    .catch((error) => {
      console.log("An error has occurred while connecting database: ", error);
    });
};

module.exports = connectToDatabase;
