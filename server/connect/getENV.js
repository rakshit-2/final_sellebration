require('dotenv').config();
// dotenv.config();
exports.db_url = process.env.DATABASE_URL;
exports.db_port = process.env.PORT;
exports.db_consumer_key = process.env.CONSUMER_KEY;
exports.db_consumer_secret = process.env.CONSUMER_SECRET;
exports.db_access_token_key = process.env.ACCESS_TOKEN_KEY;
exports.db_access_token_secret = process.env.ACCESS_TOKEN_SECRET;