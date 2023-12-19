require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./ROUTES/routes.js');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;
const LocalStrategy = require('passport-local').Strategy;
 const cors = require('cors')




// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/clooThrives', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

console.log("SESSION_SECRET:", process.env.SESSION_SECRET);

// Initialize Passport and use its session management capabilities
app.use(require('express-session')({ secret: 'ErikaArd84', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json()); // This middleware parses incoming JSON payloads

app.get('/', (req, res) => {
  res.send(req.isAuthenticated() ? `Hello, ${req.user.displayName}!` : 'Welcome!');
});


// Passport serialization and deserialization
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Passport local strategy (or other strategies)
passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});











