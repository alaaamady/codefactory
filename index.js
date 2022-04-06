require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pg = require("pg");
const PORT = process.env.PORT;
const router = express.Router();
const userQueries = require("./users/UserQueries");

app.use(cors());
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.listen(PORT, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", userQueries.getUsers);
app.get("/users/:id", userQueries.getUserById);
app.post("/users", userQueries.createUser);
app.put("/users/:id", userQueries.updateUser);
app.delete("/users/:id", userQueries.deleteUser);
