const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        // Manually insert the MongoDB connection string
        const manualMongoUri = 'mongodb+srv://Zain1234:Zain1234@mohammedcluster.trd5kkt.mongodb.net/mernapp?retryWrites=true&w=majority';

        const conn = await mongoose.connect(manualMongoUri, {
            serverSelectionTimeoutMS: 5000,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;





