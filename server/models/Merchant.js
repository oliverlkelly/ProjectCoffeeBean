const { Schema, model } = require('mongoose');

const MerchantSchema = new Schema({
  mname: {
    type: String,
    required: true,
    unique: true,
  },
  mtype: {
    type: String,
    required: true,
  },
  mdesc: {
    type: String,
    required: true,
  }
});

const Merchant = model('Merchant', MerchantSchema);

module.exports = Merchant;
