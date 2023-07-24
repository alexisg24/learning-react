const User = require('../models/User')

const existUser = async (req, res, next) => {
  const { email } = req.body

  try {
    const existUser = await User.findOne({ email })
    if (existUser) {
      return res.status(400).json({
        ok: false,
        msg: 'User already exists'
      })
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }

  next()
}

const notExistUser = async (req, res, next) => {
  const { email } = req.body

  try {
    const existUser = await User.findOne({ email })
    if (!existUser) {
      return res.status(400).json({
        ok: false,
        msg: 'User not exists'
      })
    }
    req.user = existUser
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Internal Server Error'
    })
  }
  next()
}

module.exports = { existUser, notExistUser }
