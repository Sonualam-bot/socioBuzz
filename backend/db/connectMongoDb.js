import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    const connectDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MONGO DB : ${connectDb.connection.host}`);
  } catch (error) {
    console.error(`Error connection to MongoDb: ${error.message} `);
    process.exit(1);
  }
};

export default connectMongoDb;
