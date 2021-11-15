const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/team-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('established a connection to the database'))
    .catch(err => console.log('there is a database connection error', err))