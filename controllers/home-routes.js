const router = require('express').Router();
const sequelize = require('../config/connection');
const { Location, User, Review } = require('../models');

// get all reviews for homepage
router.get("/all", (req, res) => {
    Review.findAll({
      include: [User],
    })
      .then((dbReviewData) => {
        const reviews = dbReviewData.map((review) => get({ plain: true }));
        res.render("all-review", { review });
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
          attributes: ['id', 'review_text', 'review_id', 'user_id', 'createdAt'],
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
          res.status(404).json({ message: 'No haunged review found with this id' });
          return;
        }
  
        const review = dbReviewData.get({ plain: true });
  
        res.render('single-review', {
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
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('sign-up');
  });

 
module.exports = router;












