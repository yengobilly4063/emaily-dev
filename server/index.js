const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/User");
require("./services/passport");

//Mongo DB Connection
mongoose
  .connect(keys.mongoURI_remote, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection do mongoDb established");
  })
  .catch((err) => console.log(err));

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Routes
require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
  res.send("Home");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
