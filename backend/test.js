const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://inventoryAdmin:Inventory123@cluster0.kdaoiak.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("CONNECTED");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });