const express = require ('express');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
// your MongoDB database here:
mongoose.connect('mongodb://localhost/APIAuthentication');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


// Routes

app.use('/users', require("./routes/users"));


// Start Server
const port = process.env.PORT || 3002;
app.listen(port);
console.log('Server listening on http://localhost:' + port);
