/*configuration to connect node.js application with mongodb*/

const mongoose = require('mongoose')
/*const connectedToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/curd_db')
        console.log("connected to mongoDB")
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`)
    }
}

module.exports = { mongoose, connectedToMongoDB }*/

/* new configuration */
mongoose.connect('mongodb://127.0.0.1:27017/curd_db', {
});
mongoose.connection.on("connected", ()=>{ 
    console.log('connected to MongoDB')
});

mongoose.connection.on("error", (error)=>{
    console.error(`MongoDB connection error: ${error}`)
});
module.exports= mongoose;