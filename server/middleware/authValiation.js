const { checkSchema, validationResult} = require('express-validator');
const User = require('../models/User');
const axios = require('axios');

//url number validation
const url = `http://apilayer.net/api/validate?access_key=${process.env.KEY_NUMBER}`;

//register shema
const registerSchema = {
    username: {
        notEmpty: {
            errorMessage: "username field cannot be empty"
        }
    },
    email: {
        custom: {
            options: value => {
                return User.findOne({email: value})
                           .then(user => {
                               if(user) return Promise.reject('this email is already exist') 
                           })  
            }
        },
        isEmail: {
            errorMessage: "invalid email",
        },
        notEmpty: {
            errorMessage: "email cannot be empty"
        }
    },
    password: {
        isLength: {
            errorMessage: "Passowrd must be greater than 6 characters",
            options: {min: 6},
        },
        notEmpty: {
            errorMessage: "password field canot be empty"
        }
    },
    confirmPassword: {
        custom: {
            options: (value, {req}) => {
                if(value !== req.body.password ) 
                    throw new Error('Password confirmation does not match password');
                
                return true;
            }
        },
        notEmpty: {
            errorMessage: "field cannot be empty"
        }
    },
    country: {
        notEmpty: {
            errorMessage: "country field cannot be empty"
        }
    },
    phone: {
        custom: {
            options: value => {
                return axios.get(`${url}&number=${value}&country_code=MA`)
                     .then(resp => {
                         console.log(resp.data);
                         if(!resp.data.valid)
                            return Promise.reject('this number is not valid');
                     })   
            }
        },
        notEmpty: {
            errorMessage: "phone field cannot be empty"
        }

    },

};

//login schema
const loginSchema = {
    email: {
        isEmail: {
            errorMessage: "invalid email",
        },
        notEmpty: {
            errorMessage: "email cannot be empty"
        }
    },
    password: {
        notEmpty: true,
        errorMessage: "password field canot be empty"
    }

};


//custom errors messages
const customErrors = errors => {
    const myErrors = {};
    errors.map((error) => {
       
        myErrors[error.param] = {msg: error.msg};
    });

    return myErrors;
};


//validation Middeleware
const validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({
            errors: customErrors(errors.errors)
        });
    };
};

exports.registerValidation = validate(checkSchema(registerSchema));
exports.loginValidation = validate(checkSchema(loginSchema));