// eslint-disable-next-line no-unused-vars
const hapi = require('@hapi/hapi');
const joi = require('@hapi/joi');
const dataUser = require('./data');

// Part 1 : untuk registrasi buat nanti.


// Part 2 : Login

const blueprint = joi.object({
  usernameOrEmail: joi.string().required(),
});
const userPassword = joi.object({
  password: joi.string().min(8).required(),
});

const login = (request, h) => {
  const {usernameOrEmail, password} = request.payload;
  const usernameOrEmailValidation = blueprint.validate({usernameOrEmail});
  const passwordValidation = userPassword.validate({password});

  if (!usernameOrEmailValidation.error && !passwordValidation.error) {
    const user = dataUser.find((user) => (
      user.username === usernameOrEmail||user.email === usernameOrEmail
    ) && user.password === password);

    if (user) {
      const response = h.response({
        status: 'success',
        message: 'Accomplish',
        data: user.email,
      });
      response.code(200);
      return response;
    }
  } else {
    const response = h.response({
      status: 'fail',
      message: 'invalid',
    });
    response.code(400);
    return response;
  }
};
module.exports = {login};

//         const username_req = joi.object ({
//         username: joi.string().min(2).max(14).required()
//         })
//         const usernameValidation = username_req.validate({ username });
//         if (!usernameValidation.error) {
//             const data =
//             `${username}`
//         const response = h.response({
//             status: 'success',
//             message: 'Congratulations you\'ve made it!',
//             data: data
//         });
//         response.code(200);
//         return response;
//     }
//     const user_email = joi.object ({
//         email: joi.string().email().required()
//     })
//     const emailValidation = user_email.validate({ email });
//     if (!emailValidation.error) {
//          const data =
//             `${email}`
//     const response = h.response({
//         status: 'success',
//         message: 'Congratulations you\'ve made it!',
//         data: data
//     });
//     response.code(200);
//     return response;
// }

//     else if (usernameValidation.error || emailValidation.error) {
//         const errors = {
// eslint-disable-next-line max-len
//             username: usernameValidation.error ? usernameValidation.error.message : null,
// eslint-disable-next-line max-len
//             email: emailValidation.error ? emailValidation.error.message : null
//         }
//      const response = h.response({
//         status: 'error',
//         message: 'error input',
//         data: errors
//         });
//         response.code(200);
//         return response;

//     }
