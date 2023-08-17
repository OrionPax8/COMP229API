const express = require('express');
const router = express.Router();
// create a User Model Instance
const userModel = require('../models/user');
const User = userModel.User;

/* GET users listing. */
router.get('/getusers', async (req, res) => {
  try{
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

module.exports = router;