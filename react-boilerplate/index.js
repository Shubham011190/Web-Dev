const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { User } = require('./model/user');
const config = require('./config/key');
const { auth } = require('./middleware/auth');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
mongoose.set('useCreateIndex', true);

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to DB"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello!");
});

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
            userData: userData,
        });
    });
   
});

app.post('/api/users/login', (req, res) => {

    //Find User

    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                success: false,
                message: "Authorization failed. User not found."
            });
        }

        //Check password

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({
                    loginSuccess: false,
                    message: "Login failed. Wrong password.",
                });
            }
        })

        user.generateToken((err, token) => {
            if (err) return res.status(400).send(err);
            
            res.cookie('x_auth', user.token)
                .status(200)
                .json({
                    loginSuccess: true
                })
        })

    })
});


app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req._id,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
    })
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
