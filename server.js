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

const contactAddress = 'goddiegodfreyz07@gmail.com';


app.post('/contact', async (req, res, next) => {
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "goddiegodfreyz07@gmail.com",
            pass: "ptsayqzvfrwbwyoa",
        },
    });

    const mailOption = {
        //build email option
        from: [req.body.email],
        to: [contactAddress], 
        subject: [req.body.content],
        from: [req.body.name],
        email: [req.body.email],
        text: [req.body.content] 
    } 

    //send mail
    transporter.sendMail(mailOption, (req, res, next, error, info) => {
        if (error) {
            console.log(error);
            res.json({ msg: 'fail' });
        } else {

           console.log("Email sent to:" + contactAddress);
            
            // console.log(res);
            // res.sendfile('/contact.ejs', { root: __dirname });
        }
    })
    
    res.redirect('/');
});
 
const PORT = 1010;
const port = process.env.port || 1010; 

 

app.listen(port, (req, res) => {
    console.log(`Successfully running on port: ${PORT}`)
})