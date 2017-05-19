var Joi = require('joi-browser');

var Validator = function Validator() {};

Validator.prototype.validateInput = function(values, schema) {

  var validationErrors = {};

  Joi.validate(values, schema,{abortEarly: false}, (errors, inputs) => {
    if (errors) {
      errors.details.map(function(error) {
        validationErrors[error.path] = error.message
      });
    }
  });
  return validationErrors;
};
module.exports = Validator;
