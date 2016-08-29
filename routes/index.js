var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtWork = [];
  var myArtists = [];

  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
    myArtWork = myArtWork.concat(item.artwork);
  })
  res.render('index',
   {
     title: 'Rouxmeet',
     artwork: myArtWork,
     artist: myArtists
    }
  );
});

/* GET speakers page. */
router.get('/speakers', function(req, res, next) {
  var myArtWork = [];
  var myArtists = [];

  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
    myArtWork = myArtWork.concat(item.artwork);
  })
  res.render('speakers',
   {
     title: 'Speakers',
     artwork: myArtWork,
     artist: myArtists
    }
  );
});

/* GET a speaker's details. */
router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtWork = [];
  var myArtists = [];

  appdata.speakers.forEach(function(item){
    if(item.shortname == req.params.speakerid){
      myArtists.push(item);
      myArtWork = myArtWork.concat(item.artwork);
    }

  })
  res.render('speakers',
   {
     title: 'Speakers',
     artwork: myArtWork,
     artist: myArtists
    }
  );
});


module.exports = router;
