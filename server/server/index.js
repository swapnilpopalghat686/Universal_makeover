const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const HOST = '0.0.0.0'
const PORT =  process.env.PORT || 1000 

// middleware
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



// ******************************************************

// cors
var cors = require('cors')

// all origin
app.use(cors())

// specific origin
// app.use({origin:'http://localhost:5173/'})

// ******************************************************




const session = require('express-session')
app.use(session({

    resave: true,
    saveUninitialized: false,
    secret: process.env.SECRET
}))

// multer
const multer = require('multer')

// const storage=multer.diskStorage({
//     destination:'',
//     filename:''
// })
// const upload=multer({storage:storage})


// password hashing
const bcrypt = require('bcryptjs');

// ****************************************

// db connection
const connection = require('./config/db')
const users = require('./model/userSchema')


// ************************************************8

const userRoutes = require('./routes/userRoutes')
app.use('/api', userRoutes)

const adminRoutes = require('./routes/adminRoutes')
app.use('/admin', adminRoutes)

app.get('/', (req, res) => {
    res.send("Server is running......✅")
    console.log("Server starting...");

})



app.listen(PORT, HOST, () => {
    console.log(`Server is up on http://${HOST}:${PORT}`)
})