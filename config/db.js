import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://maparishailesh721_db_user:bBQUE3rBDNcwHYDN@cluster0.kx1nbn7.mongodb.net/Study-Buddy",
    )
    .then(() => {
      console.log("DB Connected");
    });
};
