


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express();
app.use(bodyParser.json());
app.use(cors());


const userEmailSend = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'andrewjohnson9393@gmail.com',
        pass: 'qlwk qlzw vcmx hdid ',
    }
});


app.post('/email', (req, res) => {
        const {to, subject, text} = req.body;

        const emailData = {
            from: 'andrewjohnson9393@gmail.com',
            to,
            subject,
            text
        }

        userEmailSend.sendMail(emailData, (error, info) => {
             if(error) {
                console.log(error)
                return res.status(500).send('Email was not sent successfully')
             } else {
                res.status(200).send('Email has been sent successfully')
             }
        })

});



app.get('/', (req, res) => {
     res.status(200).send('Backend server is on')
})



const PORT_NUMBER = 6009
app.listen(PORT_NUMBER, () =>{
    console.log(`Server: ${PORT_NUMBER}`)
})
