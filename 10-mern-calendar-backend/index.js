const path = require('node:path')
const express = require('express')
const cors = require('cors')
const { main } = require('./db/dbConnection')
require('dotenv').config()

const app = express()
main()
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})
