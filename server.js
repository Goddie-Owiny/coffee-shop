const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const path = require("path")
const app = express()

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())


app.get('/', (req, res) => {
    res.render("index.ejs") 
});


 
const PORT = 1010;
const port = process.env.port || 1010;

 

app.listen(port, (req, res) => {
    console.log(`Successfully running on port: ${PORT}`)
})