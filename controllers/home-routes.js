const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

//--------------------------------------- maybe works 
router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("all-post", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// get single post ------------------works
router.get('/home/:id', (req, res) => {
Post.findOne({
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
      model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
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
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = dbPostData.get({ plain: true });

    res.render('single-post', {
      post,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
//---------------------------------------works
router.get('/login', (req, res) => {
if (req.session.loggedIn) {
  res.redirect('/');
  return;
}
res.render('login');
});
//----------------------------------------works
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('sign-up');
});


module.exports = router;