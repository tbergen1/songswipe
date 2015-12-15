exports.isLoggedIn = function(req) {
  return req.session ? !!req.session.user: false;
}

exports.checkUser = function(req, res, next) {
  if(!exports.isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    console.log("hello");
    next();
  }
};

exports.createSession = function(req, res, user) {
  req.session.regenerate(function(error) {
    if(error) {
      throw error;
    }
    req.session.user = user;
    res.redirect('/');
  });
};