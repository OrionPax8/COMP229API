const express = require('express');
const router = express.Router();
// create a User Model Instance
let ticketModel = require('../models/ticket');
let ticket = ticketModel.Ticket;

module.exports = router;