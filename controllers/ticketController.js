// create a User Model Instance
const ticketModel = require('../models/ticket');
const ticket = ticketModel.Ticket;
const commentModel = require('../models/comment');
const comment = commentModel.Comment;

const getAllTickets = async (req, res) => {

    try{
        let allTickets = await ticket.find({});

        res.status(200).json({tickets: allTickets});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
}

const getAllComments = async (req, res) => {

    try{
        let allComments = await comment.find({});

        res.status(200).json({comments: allComments});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
}

const deleteTicket = async (req, res) => {
    let id = req.params.id;

    try{
        await ticket.findByIdAndRemove(id);

        res.status(200).json({message: "Ticket Removed"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
}

const createTicket = async (req, res) => {

    let ticketToCreate = new ticket;
    ticketToCreate = req.body.ticket;
    let ticketComment = new comment;
    ticketComment = req.body.comment;
    let commentId;

    try{
        await ticket.create(ticketToCreate).then(result => {
            commentId = result._id;
        });

        ticketComment.TicketRef = commentId;
        await comment.create(ticketComment);

        res.status(200).json({message: "Ticket and Comment Created"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const displayTicket = async (req, res) => {
    let id = req.params.id;

    try{
        let returnTicket = await ticket.findById(id);

        res.status(200).json({ticket: returnTicket});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const updateTicket = async (req, res) => {
    let id = req.params.id;
    let ticketToUpdate = new ticket;
    ticketToUpdate = req.body.ticket;

    try{
        await ticket.updateOne({_id: id}, ticketToUpdate);

        res.status(200).json({message: "Ticekt Updated"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const displayComment = async (req, res) => {
    let id = req.params.ticket_id;

    try{
        let commentToDisplay = await comment.find({TicketRef: id});

        res.status(200).json({comment: commentToDisplay});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }

}

const updateComment = async (req, res) => {
    let id = req.params.comment_id;

    let commentToUpdate = new comment;
    commentToUpdate = req.body.comment;

    try{
    await comment.updateOne({_id: id}, commentToUpdate);

    res.status(200).json({message: "Comment Updated"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const openTicket = async (req, res) => {
    let id = req.params.id;

    try{
        let ticketToOpen = await ticket.findById(id);
        ticketToOpen.status = 'Open';
        await ticket.updateOne({_id: id}, ticketToOpen);

        res.status(200).json({message: "Ticekt Opened"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const resolveTicket = async (req, res) => {
    let id = req.params.id;

    try{
        let ticketToReslove = await ticket.findById(id);
        ticketToReslove.status = 'Resolved';
        await ticket.updateOne({_id: id}, ticketToReslove);

        res.status(200).json({message: "Ticekt Resolved"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const createComment = async (req, res) => {
    let id = req.params.ticket_id;
    let commentToCreate = new comment;
    commentToCreate = req.body.comment;
    commentToCreate.TicketRef = id;

    try{
        
        await comment.create(commentToCreate);

        res.status(200).json({message: "Comment Created"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const deleteComment = async (req, res) => {
    let id = req.params.comment_id;

    try{
        await comment.findByIdAndRemove(id);

        res.status(200).json({message: "Comment Removed"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
}

module.exports = { getAllTickets, deleteTicket, createTicket, displayTicket, updateTicket, openTicket, resolveTicket, displayComment, updateComment, getAllComments, createComment, deleteComment };