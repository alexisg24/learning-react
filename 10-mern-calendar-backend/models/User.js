const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'User is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlenght: 6,
    maxlenght: 32
  }
})

UserSchema.methods.toJSON = function () {
  const { password, ...userData } = this.toObject()
  return userData
}

module.exports = model('User', UserSchema)
