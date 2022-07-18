// Importing packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// Connecting to database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (error) => console.log(error));
mongoose.Promise = global.Promise;

require("./middleware/passport");

const app = express();

// Configure Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const { authorization } = require("./middleware/middleware");
app.use(cors({origin: '*'}));

// Importing routes
const userRoutes = require("./routes/userRoutes");

app.use("/user/", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`This app is listening on port ${process.env.PORT}`)
);
