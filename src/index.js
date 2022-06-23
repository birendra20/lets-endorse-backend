const express = require("express");

const employeeController = require("./controllers/employee.controller");

const connect = require("./configs/db");

const app = express();

app.use(express.json());

app.use("/employees", employeeController);

app.listen(2345, async function () {
  try {
    await connect();

    console.log("listening to port 2345");
  } catch (error) {
    console.log("error is ", error.message);
  }
});
