const { generateJWT } = require('../helpers/jwt')
const { encryptString } = require('../helpers/encryptString')
const User = require('../models/User')

const createUser = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const newPassword = await encryptString({ string: password })
    const user = new User({ name, email, password: newPassword })
    await user.save()
    const jwt = await generateJWT({ uid: user.id, name })
    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token: jwt
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: 'Internal Server Error'
    })
  }
}

const loginUser = async (req, res) => {
  const { id, name } = req.user
  try {
    const jwt = await generateJWT({ uid: id, name })
    res.json({
      ok: true,
      uid: id,
      name,
      token: jwt
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: 'Internal Server Error'
    })
  }
}

const renewUser = async (req, res) => {
  const { uid, name } = req.user

  try {
    const newToken = await generateJWT({ uid, name })
    res.json({
      ok: true,
      msg: 'renew',
      uid,
      name,
      token: newToken
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: 'Internal Server Error'
    })
  }
}

module.exports = { createUser, loginUser, renewUser }
