const path = require('path');
const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');

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
//const helpers = require('./utils/helpers');

//const hbs = exphbs.create({ helpers });

//app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

























// // Dependencies
// // =============================================================
// const express = require('express');
// const sequelize = require('./config/connection');

// // Sets up the Express App
// // =============================================================
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static('public'));

// // Routes
// // =============================================================
// app.use(require('./routes/api-routes'));
// app.use(require('./routes/html-routes'));

// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log('App listening on PORT ' + PORT);
//   });
// });