var Joi = require('joi-browser');
var Validator = require('@johanetox/redux-form_validate');
var validate = new Validator();

// create a schema
var schema = Joi.object().keys({
  name: Joi.string().required()
});

// validate it
validate.validateInput({name: ''}, schema)
