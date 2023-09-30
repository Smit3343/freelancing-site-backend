const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'sjshjwqip!&*sjj!@#1%$&dnnxsk^(ueujdmxwk',
    LISTEN_PORT: process.env.LISTEN_PORT || 4000
}