var express = require("express");
var router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

router.get("/newticket", ticketsCtrl.new);

module.exports = router;
