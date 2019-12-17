/**
 *
 * In heroku
 * Tell in terminal heroku
 * MONGODB_URI is not supported, then use MONGOLAB_URI
 * heroku config:set MONGOLAB_URI='mongodb://user:pass@ds223653.mlab.com:23653/link_collection/collection_name'
 *
 */

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const CONNECTION_URI = process.env.MONGODB_URI;
const OPTIONS =  { 'useNewUrlParser': true, 'useUnifiedTopology': true, 'useFindAndModify': false };

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const requireDir = require('require-dir');
// const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// requireDir('./src/Models/');
// mongoose.Promise = global.Promise;
// mongoose.connect(CONNECTION_URI, OPTIONS)
// .then(() => {
//     console.log("Successfully connected to the database");
// })
// .catch( error => {
//     console.log('Could not connect to the database. Exiting now...\n', error);
//     process.exit();
// });

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// app.use(express.json());
// app.use(cors());
// app.use('/api', require('./src/Routes.js'));
app.listen(PORT, () => console.info(`Listing on ${HOST}:${PORT}`));