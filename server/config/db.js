import mongoose from "mongoose";

const connection = async () => {
  const db = process.env.DB_HOST;
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`connected`.cyan.underline.bold);
  } catch (err) {
    console.log(`connection error: ${err}`.red.bold);
    process.exit(1);
  }
};
export default connection;
