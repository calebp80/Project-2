const router = require('express').Router();

const userRoutes = require('./api/user-routes.js');
//const postRoutes = require('./api/post-routes');
const reviewRoutes = require('./api/review-routes');

 router.use('/api/user', userRoutes);
// router.use('/posts', postRoutes);
router.use('/review', reviewRoutes);



//const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

//router.use('/', homeRoutes);
//router.use('/api', apiRoutes);



module.exports = router;