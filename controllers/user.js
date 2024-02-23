const User = require("../models/user");

//Renders SignUp Form
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

//SignUps the user
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const regUser = await User.register(newUser, password);
    console.log(regUser);
    req.login(regUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to Wanderlust");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e);
    res.redirect("/signup");
  }
};

//Renders Login Form
module.exports.renderloginForm = (req, res) => {
  res.render("users/login.ejs");
};

//Logins the user
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to Wanderlust");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

//Logouts the user
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are now logged out!");
    res.redirect("/listings");
  });
};
