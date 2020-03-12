const mongoose = require("mongoose");

if (process.env.NODE_ENV === "local") {
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
} else if (process.env.NODE_ENV === "production") {
  mongoose.connect(
    "mongodb://" +
      process.env.DB_USER_PROD +
      ":" +
      process.env.DB_PASS_PROD +
      "@" +
      process.env.DB_HOST_PROD +
      ":" +
      process.env.DB_PORT_PROD +
      "/" +
      process.env.DB_NAME_PROD
  );
}

mongoose.Promise = global.Promise;
