// const mongoose = require('mongoose');

// const connection = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.DB_HOST, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log("connected !!!");
//   } catch (error) {
//     process.exit(1);
//   }
// };

// module.exports = connection;



















const mongoose = require('mongoose');

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

module.exports = connection;


