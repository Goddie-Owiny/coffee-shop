const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const app = express()

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render("index")
});



const PORT = 1010;
const port = process.env.port || 1010;



app.listen(port, (req, res) => {
    console.log(`Successfully running on port: ${PORT}`)
})