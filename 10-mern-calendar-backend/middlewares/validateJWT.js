const { request, response } = require('express')
const jwt = require('jsonwebtoken')

const validateJWT = async (req = request, res = response, next) => {
  // x-token
  const token = req.header('x-token')
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Token is required'
    })
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { uid, name }
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid Token'
    })
  }
  next()
}

module.exports = { validateJWT }
