let mongoose = require("mongoose");
let userModel = require('./user');
let User = userModel.User;
let ticketModel = require('./ticket');
let ticket = ticketModel.Ticket;

let commentModel = mongoose.Schema(
    {
       TicketRef:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Ticket',
        required: true
       },
       Author:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true
       },
       CreatedOn: {
        type: Date,
        default: Date.now,
       },
       description: {
        type: String,
        required: true
       },
       isInternal: {
        type: Boolean,
        required: true,
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

module.exports = mongoose.model("Comment", commentModel);