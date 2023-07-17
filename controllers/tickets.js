const Ticket = require("../models/flight");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  addTicket,
};

async function newTicket(req, res) {
  const ticket = await Ticket.find({});
  res.render(`flight/${flight._id}/newticket`, { ticket });
}

async function addTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  flight.tickets.push(req.body.ticketId);
  await flight.save();
  res.redirect(`/flights/${flight._id}`);
}
