const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});
var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: process.env.PUBLIC_KEY, 
  privateKey: process.env.PRIVATE_KEY
});


let movies = [];
router.get('/', function(req, res){
    marvel.characters.findAll(function(err, results) {
        if (err) {
          return console.error(err);
        }
        res.send(results);
      });
  // res.send(movies);
});

router.get('/first', function(req, res){
    marvel.characters.findAll(3, 30)
    .then(function(result) {
        res.send(result.data);
      })
    .fail(console.error)
    .done();
})

router.post('/', function(req, res){
    console.log(req);
    movies.push("Home Alone");
   res.send('SARAH NEEDS HELP.');
});

//export this router to use in our index.js
module.exports = router;