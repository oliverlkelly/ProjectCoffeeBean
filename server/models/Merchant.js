const { Schema, model } = require('mongoose');

const MerchantSchema = new Schema({
  storename: {
      type: String,
      required: true,
      unique: true,
  },
  displayname: {
    type: String,
    required: true,
  },
  openhours: [{
      day: {type: Date},
      times: {
          start: {type: Date},
          end: {type: Date}
      }
  }],
  rating: {
      type: Number,
      required: true,
  }
});

const Merchant = model('Merchant', MerchantSchema);

module.exports = Merchant;
