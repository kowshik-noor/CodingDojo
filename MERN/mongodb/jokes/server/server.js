const express = require('express')
const app = express()

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}))

const allJokeRoutes = require("./routes/jokes.route")

allJokeRoutes(app)

app.listen(8000, () => console.log("The server is ready in port 8000"))