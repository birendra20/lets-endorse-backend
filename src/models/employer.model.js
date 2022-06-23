const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  //   {
  //     basic: {
  //       address: {
  //         line2: { type: String, required: true },
  //         city: { type: String, required: true },
  //         district: { type: String, required: true },
  //         state: { type: String, required: true },
  //         line1: { type: String, required: true },
  //         country: { type: String, required: true },
  //       },
  //       employer: { type: String, required: true },
  //       altMobileNumber: { type: String, required: true },
  //       identityType: { type: Array, required: true },
  //       source: { type: String, required: true },
  //       dob: { type: Date, required: true },
  //       gender: { type: String, required: true },
  //       educationalQualification: { type: String, required: true },
  //       specializationOfEducation: { type: String, required: true },
  //       religion: { type: String, required: true },
  //       category: { type: String, required: true },
  //       employer: { type: String, required: true },
  //       employmentStatus: { type: String, required: true },
  //       currentAnnualIncome: { type: String, required: true },
  //       experience: { type: String, required: true },
  //       mobileNumber: { type: Number, required: true },
  //       name: { type: String, required: true },
  //       phase: { type: String, required: true },
  //       pincode: { type: Number, required: true },
  //     },

  //   }
  {
    id: {
      type: String,
      required: false,
    },
    basic: {
      address: {
        line2: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        district: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        line1: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
      employer: {
        type: String,
        required: false,
      },
      altMobileNumber: {
        type: Number,
        required: false,
      },
      identityType: [
        {
          type: String,
          required: true,
        },
      ],
      source: {
        type: String,
        required: true,
      },
      dob: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      educationalQualification: {
        type: String,
        required: true,
      },
      specializationOfEducation: {
        type: String,
        required: true,
      },
      religion: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      pwd: {
        type: String,
        required: false,
      },
      employmentStatus: {
        type: String,
        required: true,
      },
      currentAnnualIncome: {
        type: String,
        required: true,
      },
      experience: {
        type: String,
        required: true,
      },
      mobileNumber: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phase: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
    },
  },

  //   {
  //     title: { type: String, required: true },
  //     price: { type: Number, required: true },
  //   },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("employee", employeeSchema);
