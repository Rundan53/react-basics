const mongoose = require('mongoose');

async function connectDatabase(){
    return mongoose.connect(process.env.MONGODB_URI)
}

module.exports = connectDatabase;
