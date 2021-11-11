const express1 = require('express');
var router = express1.Router();
var movies = {
  "id": 1,
  "title": "Batman Begins",
  "likes": 0,
  "genre": "Action",
  "image": "pics.filmaffinity.com/Batman_Begins-413277928-large.jpg"
};

router.get('/likes', (req: any, res: any) => {
  res.json(movies);
})

module.exports = router;
