require('dotenv').config()

const DB_CONFIG = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '27017'
}

const API_CONFIG = {
    port: process.env.API_PORT || '3000'
};

module.exports = { DB_CONFIG, API_CONFIG }