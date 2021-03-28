const router = require("express").Router();
const { Review } = require("../../models/");
const withAuth = require("../../utils/auth");




// doesn't work yet
router.get('/', (req, res) => {
  Review.findAll()
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;