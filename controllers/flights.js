const Flight = require('../models/flight');
const Ticket = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show,
    create,
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}

async function newFlight(req, res) {
    res.render('flights/new', {errorMsg: '' });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({flight: flight._id});
    res.render('flights/show', { flight, tickets });
}

async function create(req, res) {
    req.body.departs += 'T00:00';
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', {errorMsg: err.message});
    }
}