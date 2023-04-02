require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.catch((err) => { console.log(err) })

module.exports.place_schema = require('./places')
module.exports.Comment = require('./comment')
