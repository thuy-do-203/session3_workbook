const morgan = require('morgan');
const express = require ('express');
const studentRouter = require('./student');
const teacherRouter = require('./teacher');
const subjectRouter = require('./subject');
const countRequest = require('./system');
const systemRouter = require('./system');
const auth = require('./auth');

const app = express();

app.use(express.json());
app.use(morgan('short'));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/student', auth, countRequest("student"), studentRouter)
app.use('/teacher', auth, countRequest("teacher"), teacherRouter)
app.use('/subject', auth, countRequest("subject"), subjectRouter)
app.use('/system', systemRouter);

app.listen(3000, () => console.log('App is listening on port 3000'))