const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Review } = require('../models');
const bcrypt = require('bcrypt');
//const sequelize = require("sequelize");




//create new review
router.post("/create", (req, res) => {
    // expects => {body: "This is the comment", user_id: 1, post_id: 2}
    if (req.session) {
      Review.create({
        body: req.body.body,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      })
        .then((dbReviewData) => res.json(dbReviewData))
        //res.render("main")
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });






// get all reviews for homepage


router.get("/review", (req, res) => {
    Review.findAll({
      include: [User],
    })
      .then((dbReviewData) => {
        const review = dbReviewData.map((review) => get({ plain: true }));
        res.render("homepage", { review });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });





// get single review
router.get('/review/:id', (req, res) => {
    Review.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'body',
        'createdAt',
        'title'
      ],
      include: [
        {
          model: Review,
          attributes: ['id', 'user_id', 'createdAt'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbReviewData => {
        if (!dbReviewData) {
          res.status(404).json({ message: 'No haunted review found with this id' });
          return;
        }
  
        const review = dbReviewData.get({ plain: true });
  
        res.render('review', {
          review,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });









router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});







router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

 
module.exports = router;












