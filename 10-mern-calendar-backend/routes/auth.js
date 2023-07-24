const express = require('express')
const { createUser, loginUser, renewUser } = require('../controllers/auth')
const { check } = require('express-validator')
const validateErrors = require('../middlewares/ErrorHandler')
const { existUser, notExistUser } = require('../middlewares/db-middlewares')
const { validateJWT } = require('../middlewares/validateJWT')
const { validateUserPassword } = require('../middlewares/userPassword')
const router = express.Router()

router.post('/new',
  [
    check('name', 'Name is required').notEmpty().isLength({ min: 5, max: 30 }),
    check('email', 'Email is required').notEmpty().isEmail(),
    check('password', 'Password is required').notEmpty().isLength({ min: 6, max: 32 }),
    validateErrors,
    existUser
  ],
  createUser)

router.post('/',
  [
    check('email', 'Email is required').notEmpty().isEmail(),
    check('password', 'Password is required').notEmpty().isLength({ min: 6, max: 32 }),
    validateErrors,
    notExistUser,
    validateUserPassword
  ],
  loginUser)

router.get('/renew',
  [validateJWT],
  renewUser)

module.exports = router
