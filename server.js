/* DEPENDENCIES */
require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const { logDBConnectionDetails } = require("./utils/helper");
const handlebarshelp = require("./utils/handlebars-helper");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("./config/passport");

const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

/* EXPRESS SESSION */
const sess = {
  secret: process.env.EXPRESS_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

/* HANDLEBARS */
console.log("handlebarshelp", handlebarshelp);
const hbs = exphbs.create({
  helpers: handlebarshelp,
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

/* OAUTH */
app.use(passport.initialize());
app.use(passport.session());

/* SEQUELIZE */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    logDBConnectionDetails();
    console.log(`Now listening at http://localhost:${PORT}/`);
  });
});
