
const mongoose = require('mongoose');
const User = require('../MODELS/models'); // Import your User model


const userAuth = (req, res) => {
    // Your user authentication logic here
  };
  
  const createUser = async (req, res) => {
    console.log(req.body)
    // Your create user logic here
    try {
        // Extract user registration data from the request body
        const { regUserInput, regPwInput } = req.body;
   
        // Validate and create a new user
        const newUser = new User({ "regUserInput" : regUserInput, regPwInput });
        await newUser.save();
    
        res.status(201).json({ message: 'User created successfully' });
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  };
  
  module.exports = {
    userAuth,
    createUser,
  };




