const mongoose = require('mongoose')
const config = require('config')

// const connectDB=()=>{
//     mongoose.connect(config.get("MONGO_URI"),{useNewUrlParser: true, useUnifiedTopology:true})
//         .then(console.log("DB is connected"))
//         .catch(err=>console.log(err))
// }

const connectDB = async()=>{
    try {
        await mongoose.connect(config.get("mongoURI"),
        {useNewUrlParser: true, useUnifiedTopology:true},
        console.log("DB is connected")
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB