const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: Date,
}, {
    timestamps: true,
});

const ticketSchema = new Schema(
  {
    seat: {
      type: String,
      match: /[A-F][1-9]\d?/,
    },
    price: {
      type: Number,
      min: 0,
    },
    flight: {
      type: Schema.Types.ObjectId,
      ref: 'Flight'
    },
  }
)

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
    },
    airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    flightNo: {
      type: Number,
      min: 10,
      max: 9999,
    },
    departs: Date,
    tickets: [ticketSchema],
    destinations: [destinationSchema],
  },
  {
    timstamp: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
