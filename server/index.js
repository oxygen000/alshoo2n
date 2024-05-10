const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bycrypt = require('bcrypt'); 
const db = require('./db');

const app = express();


//middlewhere
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false })); 

app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
}));

app.use(cookieParser('mysecretKey')); 

app.use(passport.initialize());
app.use(passport.session());


/////////////////////////////////////////////////////////////// Middleware end



app.post('/LoginaAminFrom', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = "INSERT INTO account (`username`, `password`) VALUES (?, ?)";
  const query2 = "SELECT * FROM account WHERE  username = ?";

  db.query(query2, [username], (err, result) => {
    if(err) {throw err;}
    if(result.length > 0) {
      res.send({message:"Username already exists" });
    }
    if(result.length ===0){
      const hashedPassword = bcrypt.hashSync(password, 10);
      db.query(query, [username,password], (err, result) =>{
        if (err) {throw err;}
          res.send({message: "User created"});

      })
    }
  });

});


app.get('/', (req, res) => {
  res.send(req.user);
})



//start server 
app.listen(3001, () => {console.log('Server started on port 3001')});