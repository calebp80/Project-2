const router = require("express").Router();
const { Review } = require("../../models/");
const withAuth = require("../../utils/auth");

//find all reviews
router.get("/", (req, res) => {
  Review.findAll()
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create new review
router.post("/post", (req, res) => {
  // expects => {body: "This is the comment", user_id: 1, post_id: 2}
  if (req.session) {
    Review.create({
      body: req.body.body,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    })
      .then((dbReviewData) => res.json(dbReviewData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

//delete a review by id
router.delete("/:id", (req, res) => {
  if (req.session) {
    Review.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbReviewData) => {
        if (!dbReviewData) {
          res.status(404).json({ message: "No comment found with this id!" });
          return;
        }
        res.json(dbReviewData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;
