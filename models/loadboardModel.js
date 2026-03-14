const mongoose = require('mongoose')

const loadboardSchema = new mongoose.Schema({
  serialNo: {
    type: String,
    unique: true,
    required: [true, 'Loadboard serial number is required.'],
  },
  type: {
    type: String,
    enum: ['x2', 'x4', 'x8'],
    required: [true, 'Loadboard type is required.'],
  },
  status: {
    type: String,
    default: 'IN-QA',
    enum: ['IN-QA', 'IN-GOOD', 'IN-REPAIR', 'OUT-PRODUCTION'],
  },
  machineNo: {
    type: String,
    default: null,
    enum: ['MC-01', 'MC-02', 'MC-03', 'MC-04', 'MC-05'],
  },
  lastTransactionBy: {
    type: String,
    required: [true, 'Loadboard last transaction by is required.'],
  },
  createdDetails: {
    by: {
      type: String,
      required: [true, 'Loadboard created by is required. '],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
})

const Loadboard = mongoose.model('Loadboard', loadboardSchema)

module.exports = Loadboard
