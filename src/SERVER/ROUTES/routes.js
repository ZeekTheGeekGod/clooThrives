

const express = require('express');
const app = express();
const controllers = require('../CONTROLLERS/controllers.js');


app.post('/userAuth', controllers.userAuth)
app.post('/join', async (req, res) => {
    console.log(req.body)
    // Your create user logic here
    try {
        // Extract user registration data from the request body
        // const { regUserInput, regPwInput } = req.body;
   console.log(req.body)
        // Validate and create a new user
        const newUser = new User({ regUserInput : req.body.regUserInput, regPwInput : req.body.regPwInput });
        await newUser.save();
    
        res.status(201).json({ message: 'User created successfully' });
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  })




module.exports = app;

