import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo already running");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://admin:root@cluster0.he9d373.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "next13Demo",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = true;
    console.log("mongo db connect");
  } catch (error) {
    console.log(error);
  }
};
