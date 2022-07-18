const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

const { authorization } = require("../middleware/middleware");

// User model
const User = require("../model/users");

// Check if user is logged in and return details if he is
router.get("/", authorization, async (req, res, next) => {
  try {
    let user = await User.findById(req._id);
    delete user._id;
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// Post Route: /login
router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (!user && info) res.json(info);
      else if (err) return next(err);
      else {
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
          return res
            .cookie("access_token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({ message: "Logged in successfully" });
        });
      }
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// Route to register a new user
router.post("/register", async (req, res, next) => {
  passport.authenticate("register", async (err, user, info) => {
    try {
      if (!user && info) res.json(info);
      else if (err) return next(err);
      else {
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
          return res
            .cookie("access_token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({ message: "Logged in successfully" });
        });
      }
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// Route to Log out
router.get("/logout", authorization, function (req, res) {
  return req
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Logged out successfully" });
});

module.exports = router;
