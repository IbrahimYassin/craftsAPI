/**
 * Sign_InController
 *
 * @description :: Server-side logic for managing sign_ins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function (req, res) {
    return res.login({
      successRedirect: '/'
    });
  },

  logout: function (req, res) {
    req.logout();
    return res.ok('Logged out successfully.');
  },

  signup: function (req, res) {
    Users.create(req.params.all()).exec(function (err, user) {
      if (err) return res.negotiate(err);
      req.login(user, function (err){
        if (err) return res.negotiate(err);
        return res.redirect('/welcome');
      });
    });
  }
};

