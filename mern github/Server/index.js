const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
// connect to frontend
const cors = require("cors");

app.use(express.json());
app.use(cors());

// connection to the mongodb server
mongoose.connect
(
    "mongodb+srv://abrart1075:Tarafder23@cluster0.t2a0ups.mongodb.net/MERNtutorial?retryWrites=true&w=majority"
);

// Define the route to get users
app.get("/getUsers", async (req, res) => {
    // get the users
    try {
      const users = await UserModel.find({});
      res.json(users);

    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json(error);
    }
  });

//   create the users
app.post("/createUser", async (req, res) => {
    try {
      const user = req.body;
      const newUser = new UserModel(user);
      await newUser.save();

      res.json(newUser);
    } catch (error) {

      console.error('Error creating user:', error);
      res.status(500).json(error);
    }
  });
  

      
  
// Start the server
app.listen(3001, () => {
    console.log("Server runs perfect")
});