import mongoose, { trusted } from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
      index: trusted,
    },
    clearkUserId: {
      type: String,
      required: true,
      index: true,
    },
    studentName: {
      type: String,
      default: "Unknown",
    },
    course: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    teacherName: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    paymentMethod: { type: String, enum: ["Online"], default: "Online" },

    // normalize to TitleCase if that's what your code expects
    paymentStatus: {
      type: String,
      enum: ["Unpaid", "Paid"],
      default: "Unpaid",
    },
    paymentIntentId: { type: String, default: null },
    sessionId: { type: String, default: null },

    // make orderStatus values consistent + include "Confirmed"
    orderStatus: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled", "Completed", "Failed"],
      default: "Pending",
    },

    notes: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);
const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;
// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema(
//   {
//     bookingId: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//     },

//     clerkUserId: {
//       type: String,
//       required: true,
//       index: true,
//     },

//     studentName: {
//       type: String,
//       default: "Unknown",
//     },

//     course: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Course",
//       required: true,
//     },

//     courseName: {
//       type: String,
//       required: true,
//     },

//     teacherName: {
//       type: String,
//       default: "",
//     },

//     price: {
//       type: Number,
//       required: true,
//     },

//     paymentMethod: {
//       type: String,
//       enum: ["Online"],
//       default: "Online",
//     },

//     paymentStatus: {
//       type: String,
//       enum: ["Unpaid", "Paid"],
//       default: "Unpaid",
//     },

//     paymentIntentId: {
//       type: String,
//       default: null,
//     },

//     sessionId: {
//       type: String,
//       default: null,
//     },

//     orderStatus: {
//       type: String,
//       enum: ["Pending", "Confirmed", "Cancelled", "Completed", "Failed"],
//       default: "Pending",
//     },

//     notes: {
//       type: String,
//       default: "",
//     },

//     paidAt: {
//       type: Date,
//     },
//   },
//   { timestamps: true }
// );

// const Booking =
//   mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

// export default Booking;
