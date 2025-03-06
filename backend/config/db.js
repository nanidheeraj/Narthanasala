import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://santhoshreddy126126:Santhosh@cluster0.a8v9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() =>console.log("DB Connected"));
};
