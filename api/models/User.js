/**
 * Sign_In.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {
  tableName: 'users_accounts',

  attributes: {
    userId: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    email: {
      type: 'string',
      required: true,
      unique: true,
      size: 50,
      email: true
    },

    password: {
      type: 'string',
      required: true,
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      size: 50
    },

    /*firstName: {
      type: 'string',
      required: true,
      size: 50,
      alpha: true
    },

    lastName: {
      type: 'string',
      required: true,
      size: 50,
      alpha: true
    },

    username: {
      type: 'string',
      required: true,
      unique: true,
      regex: /^[a-zA-Z][a-zA-Z0-9_-]+(-[a-zA-Z0-9]+)*$/,
      size: 15,
    },*/

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },

    beforeCreate: function(user, cb) {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) {
            console.log(err);
            cb(err);
          } else {
            user.password = hash;
            cb();
          }
        });
      });
    }
  }
};

