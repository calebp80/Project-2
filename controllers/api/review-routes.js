const router = require("express").Router();
const { Review } = require("../../models/");
// const withAuth = require("../../utils/auth");




//this works yay!
router.get('/', (req, res) => {
  Review.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;