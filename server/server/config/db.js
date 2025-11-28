const mongoose = require('mongoose')
const connection = (async () => {

    try {

        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DB Connected....." + mongoose.connection.readyState)

    } catch (err) {
        console.log(err)
        console.log("DB Connection Faild....." + mongoose.connection.readyState)

    }

})

connection()

module.exports = connection