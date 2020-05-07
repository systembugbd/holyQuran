const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const DB_USER       = 'nadim';
const DB_PASS       = 'Nadims@4211';

const app = express(); //Create a app instance of Express

app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use('/api/history', require('./api/route'));
// app.use('/', require('./api/route'));

// app.get('/covid19', (req, res) => {
    
//     res.sendFile(__dirname + '/public/index.html');
// });

 

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/public/index.html');
});



const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log('App is running on PORT ' + PORT);
   
    mongoose.connect(`mongodb+srv://${DB_USER}:<${DB_PASS}>@clastertodolist-blqnk.mongodb.net/test?retryWrites=true&w=majority`,{
        useUnifiedTopology: true, useNewUrlParser: true }, () => {
        console.log('Database Connected');
    });

});



// app.get('/live/covid19', (req, res) => {
//     res.send('<h1>I am running on NODE server for Covid 19</h1>');
// });
