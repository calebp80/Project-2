// const router = require('express').Router();
// const { User  } = require('../../models');
// // const { Location  } = require('../../models');
// // const {  Review  } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.post('/', (req, res) => {
//     // expects username, password
//     User.create({
//       username: req.body.username,
//       password: req.body.password
//     })
//       .then(dbUserData => {
//         req.session.save(() => {
//           req.session.user_id = dbUserData.id;
//           req.session.username = dbUserData.username;
//           req.session.loggedIn = true;
    
//           res.json(dbUserData);
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

//   module.exports = router;