const mongoose = require("mongoose");

const addDetailsEmployeeSchema = mongoose.Schema({
  EmployeeName: {
    type: String,
  },
  location: {
    type: String,
  },
  brandName: {
    type: String,
  },
  firmName: {
    type: String,
  },
  firmOption: {
    type: String,
  },
  cinNo: {
    type: String,
  },
  panCard: {
    type: String,
  },
  fss: {
    type: String,
  },
  director: {
    type: String,
  },
  gstCopy: {
    type: String,
  },
  cancelCheck: {
    type: String,
  },
  tableCount: {
    type: Array,
  },
  tablePhotos: {
    type: Array,
  },
  billingSoftware: {
    type: String,
  },
  onlineAggregator: {
    type: String,
  },
  onlineAggregatersList: {
    type: Array,
  },
  twoWheelerSlot: {
    type: String,
  },
  fourWheelerSlot: {
    type: String,
  },
  restaurantMobileNumber: {
    type: Number,
  },
  email: {
    type: String,
  },
  contactPersonname: {
    type: String,
  },
  contactPersonNumber: {
    type: Number,
  },
  designation: {
    type: String,
  },
  twoWheelerparking: {
    type: String,
  },
  fourWheelerparking: {
    type: String,
  },
  status: {
    type: String,
  },
  city: {
    type: String,
  },
  domain: {
    type: String,
  },
  domainName: {
    type: String,
  },
  tradeMark: {
    type: String,
  },
  tradePhotos: {
    type: Array,
  },
  dld: {
    type: String,
  },
  entityNo: {
    type: String,
  },
  dldEmail: {
    type: String,
  },
  dldPassword: {
    type: String,
  },

  address: [
    {
      doorNo: {
        type: String,
      },
      areaName: { type: String },
      landMark: { type: String },
      locationCity: { type: String },
      pinCode: { type: String },
      state: { type: String },
    },
  ],
});

module.exports = mongoose.model(
  "employeeaddeddetails",
  addDetailsEmployeeSchema
);
