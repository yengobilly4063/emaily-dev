//Keys.js logic to decide prod or dev keys

if (process.env.NODE_ENV === "production") {
  //Prod env, return prod keys
  module.exports = require("./prod");
} else {
  //Dev env, retutn dev keys
  module.exports = require("./dev");
}
