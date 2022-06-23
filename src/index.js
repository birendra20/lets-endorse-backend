const express = require("express");

const employeeController = require("./controllers/employee.controller");

const connect = require("./configs/db");
const port = process.env.PORT || 2345;
const app = express();

app.use(express.json());

app.use("/employees", employeeController);

app.listen(port, async function () {
  try {
    await connect();

    console.log("listening to port 2345");
  } catch (error) {
    console.log("error is ", error.message);
  }
});
