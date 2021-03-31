const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, } = require('../models');
const withAuth = require('../utils/auth.js');

// get all reviews for dashboard
router.get('/review', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'body',
      'title',
      'createdAt'
    ],
    include: [
      {
        model: Review,
        attributes: ['id', 'body', 'review_id', 'user_id', 'createdAt'],
        
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbReviewData => {
      const reviews = dbReviewData.map(review => review.get({ plain: true }));
      res.render('all-review', {layout:"dashboard", reviews });
    })
    .catch(err => {
      console.log(err);
    //   res.status(500).json(err);
      res.redirect('login');
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'body',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Review,
        attributes: ['id', 'body', 'review_id', 'user_id', 'created_at'],
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
      if (dbReviewData) {
        const review = dbReviewData.get({ plain: true });
        
        res.render('edit-review', {
          review,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/new", withAuth, (req, res) => {
    res.render("review", {
      layout: "dashboard"
    });
  });

module.exports = router;