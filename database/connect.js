const mongoose = require("mongoose");

// if (process.env.NODE_ENV === "local") {
  mongoose.connect(
    "mongodb://" +
      process.env.DB_HOST +
      ":" +
      process.env.DB_PORT +
      "/" +
      process.env.DB_NAME,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
// } else {
//   mongoose.connect(
//     "mongodb://heroku_gh4cwgbm:t3npqta6f4pasc3747dcdlg7c6@ds235243.mlab.com:35243/heroku_gh4cwgbm",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }
//   );
// }

mongoose.Promise = global.Promise;
