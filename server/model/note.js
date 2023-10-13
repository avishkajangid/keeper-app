import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", counterSchema);

const noteSchema = mongoose.Schema({
  noteId: { type: Number, unique: true },
  title: String,
  content: String,
});

noteSchema.pre("save", async function (next) {
  try {
    const doc = this;
    const counter = await Counter.findByIdAndUpdate(
      { _id: "noteId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    doc.noteId = counter.seq;
    next();
  } catch (error) {
    return next(error);
  }
});

const postNote = mongoose.model("note", noteSchema);

export default postNote;


// import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";

// const noteSchema = mongoose.Schema({
//   title: String,
//   content: String,
// });

// autoIncrement.initialize(mongoose.connection);
// noteSchema.plugin(autoIncrement.plugin, "note");

// mongoose.model("note", noteSchema);

// export default note;
