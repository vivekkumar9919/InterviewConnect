const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const connection = require('./config/connect');

const userRouter = require('./routes/userRouter');
const feedbackRouter = require('./routes/feedbackRotuer');
const catagoryRouter = require('./routes/catagoryRouter');
const titleRouter =  require('./routes/titleRouter');
const questionRouter = require('./routes/questionRouter');
const feedbackRotuer = require('./routes/feedbackRotuer');


const cors = require('cors');
require("dotenv").config();

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.json());
app.use(CookieParser());

app.use(cors({origin:"*"}));



//Routes we are using
app.use(userRouter);
app.use(feedbackRouter);
app.use(catagoryRouter);
app.use(titleRouter);
app.use(questionRouter);
app.use(feedbackRotuer);



const port = process.env.PORT || 8080;

//connecting to database
connection();

//rendering home page
app.get('/',(req,res)=>{
    res.send(`Server is running`);
})


app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})