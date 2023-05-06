const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const connection = require('./config/connect');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const feedbackRouter = require('./routes/feedbackRotuer');
const catagoryRouter = require('./routes/catagoryRouter');
const titleRouter =  require('./routes/titleRouter');
const questionRouter = require('./routes/questionRouter');
dotenv.config();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(feedbackRouter);
app.use(catagoryRouter);
app.use(titleRouter);
app.use(questionRouter);


const port = 4000;
connection();

app.get('/',(req,res)=>{
    res.send(`Server is on`);
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})