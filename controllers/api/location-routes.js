const router = require("express").Router();
const { Location } = require("../../models/");
const withAuth = require("../../utils/auth");

//find all locations
router.get("/", (req, res) => {
  Location.findAll()
    .then((dbLocationData) => res.json(dbLocationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find location by id
router.get("/:id", (req, res) => {
  Location.findOne()
    .then((dbLocationData) => res.json(dbLocationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// //create new location
// router.post("/location", (req, res) => {
//   // expects => {body: "This is the comment", user_id: 1, post_id: 2}
//   if (req.session) {
//     Location.create({

//         // title: req
// 		// address: req
// 		// image_url: req
// 		// more_info_url: req
// 		// description: req

//       body: req.body.body,
//       user_id: req.session.user_id,
//       post_id: req.body.post_id,
//     })
//       .then((dbReviewData) => res.json(dbReviewData))
//       .catch((err) => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }
// });

//delete a location by id
router.delete("/:id", (req, res) => {
  if (req.session) {
    Location.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbLocationData) => {
        if (!dbLocationData) {
          res
            .status(404)
            .json({ message: "No haunted location found with this id!" });
          return;
        }
        res.json(dbLocationData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;
