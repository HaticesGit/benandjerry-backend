const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: { 
      type: String, 
      required: true },

    address: { 
      type: String, 
      required: true },

    flavor: { 
      type: String, 
      required: true },

    topping: { 
      type: String, 
      required: true },

    cupOrCone: { 
      type: String, 
      required: true },

    totalPrice: { 
      type: Number, 
      required: true },

    status: {
      type: String,
      default: "te verwerken",
      enum: ["te verwerken", "verzonden", "geannuleerd"],
    },
  },
  
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);