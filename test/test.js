var expect = require('chai').expect;
var Joi = require('joi-browser');
var Validator = require('../lib/validator');

describe('Validate', function() {

  it('returns empty Object when validation pass', function() {
    var schema = Joi.object().keys({
      name: Joi.string().required()
    });
    var validate = new Validator();
    expect(validate.validateInput({name: 'hi'}, schema))
      .to.be.empty;
  })

  it('Can\'t be empty', function() {
    var schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required()
    });
    var validate = new Validator();
    expect(validate.validateInput({
      name: 'hola',
      email: ''
    }, schema)).not.to.be.empty;
  })
})
