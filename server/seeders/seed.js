const db = require('../config/connection');
const { User, Merchant } = require('../models');
const userSeeds = require('./userSeeds.json');
const merchantSeeds = require('./merchantSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Merchant.deleteMany({});
    await User.create(userSeeds);
    await Merchant.create(merchantSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
