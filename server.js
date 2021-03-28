const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');



const hbs = require("hbs");
// Looks like I'm also using Handlebars.



const routes = require("./controllers/index.js");
// Uh-huh... I see that when I call the variable "routes," I'm going to be shooting it over to the routes folder!

//app.use(express.static("public"));
// Looks like I'll be serving "static" files today, such as CSS and JavaScript.

//app.set("view engine", "hbs");
// Oh right, I'm supposed to use hbs when I go to display things.

//app.use("/", routes);
// When I get something, I'll call the "routes" variable. Good thing I defined it above!

//app.use(require("./controllers/index.js"));
// I need the routes/index.js file, OR ELSE I QUIT. That'll show the user!

//app.listen(3000, () => {
//  console.log("server is running");
//})




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
  app.listen(PORT, () => console.log('  - now listening on whatever '));
});
























