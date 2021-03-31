<<<<<<< HEAD


<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwFT8x2XVd9_5nBdYwRsGS-52FIeQxaiE&callback=initMap">
</script>
=======
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require("./controllers/index.js");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
const helpers = require('./utils/helpers');

app.engine('handlebars', exphbs({helpers}));
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('  - are you scared yet? '));
});
























>>>>>>> 05d870bfe083a955f4237210b6d5fdb0724616e9
