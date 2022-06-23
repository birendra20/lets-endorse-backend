const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://birendra:masai123@cluster0.xbq42.mongodb.net/employeeData?retryWrites=true&w=majority"
  );
};
