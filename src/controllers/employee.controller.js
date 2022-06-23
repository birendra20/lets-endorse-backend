const express = require("express");

const Employee = require("../models/employer.model");

const router = express.Router();

// router.post("", async (req, res) => {
//   try {
//     const employee = await Employee.create(req.body);

//     const flattener = (obj = {}, res = {}, extra = "") => {
//       for (let key in obj) {
//         if (typeof obj[key] !== "object" && typeof obj[key] !== "function") {
//           res[extra + key] = typeof obj[key];
//         } else {
//           if (
//             key == "id" ||
//             key == "__v" ||
//             key == "createdAt" ||
//             key == "updatedAt" ||
//             key == "mobileNumber" ||
//             key == "pincode"
//           ) {
//             res[extra + key] = "number";
//           }
//           flattener(obj[key], res, `${extra}${key}.`);
//         }
//       }
//       return res;
//     };

//     return res.status(201).send(flattener(employee));
//   } catch (e) {
//     return res.status(500).send({ message: e.message });
//   }
// });

router.get("", async (req, res) => {
  try {
    const employee = await Employee.find().lean().exec();
    const flattener = (obj = {}, res = {}, extra = "") => {
      for (let key in obj) {
        if (typeof obj[key] !== "object" && typeof obj[key] !== "function") {
          res[extra + key] = typeof obj[key];
        } else {
          if (
            key == "id" ||
            key == "__v" ||
            key == "createdAt" ||
            key == "updatedAt" ||
            key == "mobileNumber" ||
            key == "pincode"
          ) {
            res[extra + key] = "number";
          }
          flattener(obj[key], res, `${extra}${key}.`);
        }
      }
      return res;
    };
    res.status(200).send(flattener(employee));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).send(employee);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
