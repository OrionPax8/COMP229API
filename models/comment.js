let mongoose = require("mongoose");
let userModel = require('./user');
let User = userModel.User;
let ticketModel = require('./ticket');
let ticket = ticketModel.Ticket;

let commentModel = new mongoose.Schema(
    {
       TicketRef:{
        type: String,
        required: true
       },
       author:{
        type: String,
       },
       createdOn: {
        type: Date,
        default: Date.now,
       },
       description: {
        type: String,
       },
       isInternal: {
        type: Boolean,
        default: false
       },
       userStories: {
        type: String,
        required: false
       }
    },
    {
        collection: "Comment"
    }
);

module.exports.Comment = mongoose.model("Comment", commentModel);