/* this is configuration to set the port of node.js application */
const express = require('express')
/*const bodyParser = require("body-parser")*/
const cors=require('cors')
/*const { connectedToMongoDB } = require('./configuration/dbConfig')*/

const userRoutes = require('./routes/userRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());
/*connectedToMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
    });
});*/
app.use('/api/user', userRoutes)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});


