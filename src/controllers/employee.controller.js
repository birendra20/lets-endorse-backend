const express = require("express");

const Employee = require("../models/employer.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    return res.status(201).send(employee);
  } catch (e) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
