const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();
app.use(express.json())
const auth = require('./routes/auth')
const usersRoute = require('./routes/users')


// Connecting to the database
mongoose.connect(process.env.DATABASE_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to the database")
}).catch((e) => {
    console.log(`Could not connect to the database due to ${e}`)
})
app.use("/api/auth/",auth)
app.use("/api/users/",usersRoute)


app.listen("3000", () => {
    console.log("Listening at port 3000");
})