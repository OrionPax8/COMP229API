const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Returns all releveant items via json
router.get('/', ticketController.getAllTickets);
router.get('/comments', ticketController.getAllComments);

// Deletes tickets with :id, returns message
router.get('/delete/:id', ticketController.deleteTicket);

// Creates ticket and one comment, returns message
router.post('/add', ticketController.createTicket);

// Displays or Updates the ticket with :id
router.get('/:id', ticketController.displayTicket);
router.put('/:id', ticketController.updateTicket);

// Sets status of ticket :id to 'Open'
router.put('/open/:id', ticketController.openTicket);

// Sets status of ticket :id to 'Resolved'
router.put('/resolve/:id', ticketController.resolveTicket);

// Displays a comment related to the TICKET ID
router.get('/add_comment/:ticket_id', ticketController.displayComment);
// Updates a comment, **MUST SEND COMMENT ID**
router.post('/add_comment/:comment_id', ticketController.updateComment);

// Creates a comment related to ticket with :id
router.post('/create_comment/:ticket_id', ticketController.createComment);

// Deletes a comment with :id
router.get('/delete_comment/:comment_id', ticketController.deleteComment);

module.exports = router;