const router = require('express').Router();
const userRoutes = require('./api/user-routes.js');
// const locationRoutes = require('./api/location-routes');
const reviewRoutes = require('./api/review-routes');
const homeRoutes = require('./home-routes.js');
const dashRoutes = require('./dash-routes.js')

router.use('/user', userRoutes);
// router.use('/location', locationRoutes);
router.use('/review', reviewRoutes);
router.use('/', homeRoutes);
router.use('/dash', dashRoutes);



//---- i don't know if we will need these or not------
//const apiRoutes = require('./api/');
//router.use('/api', apiRoutes);



module.exports = router;