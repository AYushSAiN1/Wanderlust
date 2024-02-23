const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbURL = "mongodb+srv://i_ayu_sh:Ko7XaOg65Ov9jdsW@cluster0.euemhha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbURL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "65d844c11592dfcf37faae69",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
