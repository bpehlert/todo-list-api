const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Task = require("./api/models/todoListModel");
const bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://bpehlert:password1@ds023468.mlab.com:23468/todo-list"
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes/todoListRoutes"); //importing route
routes(app); //register the route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`to do server currently running on port ${PORT}.`);
});
