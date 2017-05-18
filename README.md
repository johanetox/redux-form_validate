Redux Form Validate
=========

A small library for redux form to validate with joi-browser
It basicaly recieve the `object` and a `schema` and return a new object with errors.

## Installation

  `npm install @johanetox/redux-form_validate`

## Usage

    var Joi = require('joi-browser');
    var Validator = require('@johanetox/redux-form_validate');
    var validate = new Validator();


    // create a schema
    var schema = Joi.object().keys({
      name: Joi.string().required()
    });


    // validate it
    validate.validateInput({name: ''}, schema)

  Output should be `{ name: '"name" is not allowed to be empty' }`
  else if it is valid output should be an empty object



## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
