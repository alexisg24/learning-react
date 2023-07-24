const { compareEncryptedString } = require('../helpers/encryptString')

const validateUserPassword = async (req, res, next) => {
  const { password } = req.body
  const { password: hashPassword } = req.user

  try {
    const validatePassword = await compareEncryptedString({ string: password, hash: hashPassword })
    if (!validatePassword) {
      return res.status(400).json({
        ok: false,
        error: 'Invalid Password'
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

module.exports = { validateUserPassword }
