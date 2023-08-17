let mongoose = require("mongoose");
let userModel = require('./user');
let User = userModel.User;

// Create a ticket model class
let ticketModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['Open', 'Resolved']
    },
    description: {
      type: String,
      required: true
    },
    createdOn: {
      type: Date,
      default: Date.now
    },
    closedOn: {
      type: Date,
      required: false,
      default: null
    },
    createdBy: {
      type: String,
      required: true
    },
    assignedTo: {
      type: String,
      required: false,
      default: null
    }
  },
  {
    collection: "Ticket",
  }
);

module.exports.Ticket = mongoose.model("Ticket", ticketModel);
