const { default: mongoose } = require('mongoose')

async function main () {
  try {
    await mongoose.connect(process.env.DB_CONNECTION)
    console.log('Connected')
  } catch (error) {
    console.log('Failed to connect, retrying in 5seconds')
    setTimeout(() => {
      main()
    }, 5000)
  }
}

module.exports = { main }
