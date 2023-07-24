const bcrypt = require('bcryptjs')

const encryptString = async ({ string }) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(string, salt)
    return hash
  } catch (error) {
    console.log('Failed to encrypt string')
    throw new Error('Failed to encrypt string')
  }
}

const compareEncryptedString = async ({ string, hash }) => {
  try {
    const validation = await bcrypt.compare(string, hash)
    return validation
  } catch (error) {
    console.log('Failed to compare string')
    throw new Error('Failed to compare string')
  }
}
module.exports = { encryptString, compareEncryptedString }
