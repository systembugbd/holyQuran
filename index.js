
// import paginate from 'jw-paginate';
// import prismjs from 'prismjs';


 
// const fs = require('fs');
//  const parser = require('xml-js');
// const X2JS = require('./xml2json');

// var parser = require('xml2json');


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
const PORT = process.env.PORT || 4444;





const app = express();

app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(PORT, () =>{
    console.log('Quran-ul-Karim App is Running on Port ' + PORT);
});








/****************************/
 


// //can get Objct from XML file
// fs.readFile( './quran_ar.xml', function(err, data) {
//     var json = JSON.parse(parser.xml2json(data, {reversible: true}));

//     var answers = json["elements"];
//   for (var i = 0; i < answers.length; i++) {
//     // console.log( answers);
//     for(let s of answers){
//         console.log(s);
       
//     }
//   }
// });