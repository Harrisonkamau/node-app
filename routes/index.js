var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtWork = [];
  appdata.speakers.forEach(function(item){
    myArtWork = myArtWork.concat(item.artwork);
  })
  res.render('index',
   {
     title: 'Rouxmeet',
     artwork: myArtWork
    }
  );
});

/* GET speakers page. */
router.get('/speakers', function(req, res, next) {
  var myArtWork = [];
  appdata.speakers.forEach(function(item){
    myArtWork = myArtWork.concat(item.artwork);
  })
  res.render('speakers',
   {
     title: 'Speakers',
     artwork: myArtWork
    }
  );
});

/* GET a speaker's details. */
router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtWork = [];
  appdata.speakers.forEach(function(item){
    if(item.speakers) == req.params.speakerid{
      myArtWork = myArtWork.concat(item.artwork);
    }

  })
  res.render('speakers',
   {
     title: 'Speakers',
     artwork: myArtWork
    }
  );
});


module.exports = router;
