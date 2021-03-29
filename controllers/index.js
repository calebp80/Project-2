const router = require('express').Router();

const userRoutes = require('./api/user-routes.js');
const locationRoutes = require('./api/location-routes');
const reviewRoutes = require('./api/review-routes');

 router.use('/api/user', userRoutes);
//router.use('/location', locationRoutes);
router.use('/review', reviewRoutes);



//const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);



module.exports = router;