const express = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks', {useNewUrlParser: true})

const app = express()

app.use(express.static(__dirname + '/task/dist/task'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

require('./server/config/routes.js')(app)


app.listen(8000, function() {
    console.log("listening on port 8000");
})