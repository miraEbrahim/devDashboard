const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const port = process.env.PORT || 5000;
const cors = require('cors')
// Import Routes

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
// const postRoute = require('./routes/posts')
dotenv.config()
//Connect to DB
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser:true,useUnifiedTopology: true }, function(err, db) {
    if(err) {
        console.log(err);
    }
    else {
        console.log('connected to DB');
       
    }
})

// app.use(logger("dev"));
//Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false}));
// app.use(cookieParse());
// app.use(express.static(path.json(__dirname,"public")));
app.use(cors());

//Route middleware 
// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/authenticate', authRouter)


 
app.listen(port)