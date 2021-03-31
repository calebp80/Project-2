const router = require("express").Router();
const { User, Post, Review } = require("../../models");
const withAuth = require("../../utils/auth");
const bcrypt = require('bcrypt');

//find all users
router.get("/all", (req, res) => {
  User.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/signup", (req, res) => {
  // expects username, email, password
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});




router.post("/login", (req, res) => {
    console.log("reach/find-route**********");
    console.log(req.body.username);
    console.log(req.body.password);
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "No ghouls with that name!" });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: "Incorrect!" });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: "Let the Haunting begin!" });
      });
    });
  });



  router.get("/users", function(req, res) {
    
    (function(userData) {
        //render your page and then on your .handlebars file tell it what kind of data to expect, which in this case will be called user_data      
         res.render("homepage", { user_data: userData });
     });
 });



router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(404).json({ message: "Have a Scary Day!" }).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/update/:id", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "BOO! " });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
