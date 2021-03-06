const express = require("express");
const passport = require("passport");
const router = express.Router();

module.exports = (app) => {
  //Google Auth Routes
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/api/current_user");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send({ user: req.user });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
