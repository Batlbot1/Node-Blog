const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')




const PORT = process.env.PORT || 8081
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/records', require('./routes/record'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));

app.use(passport.initialize())
app.use(passport.session())

async function start() {
    try {
        await mongoose.connect('mongodb+srv://vlad:Batlbot98@cluster0.vgb8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log(`Сервер запущен ${PORT}`);
        })
    } catch (e) {
        console.log(e)
    }
}

start()
