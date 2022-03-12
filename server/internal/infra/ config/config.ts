const { env } = require('process');
require('dotenv/config');

const envs = {
    MONGO_URL: env.MONGO_URL,
    TELEGRAM_TOKEN: env.TELEGRAM_TOKEN,
    TELEGRAM_ID: env.TELEGRAM_ID,
}

export default envs;