import express from "express";
import Note from "../model/note.js";

const router = express.Router();

router.post("/", async (request, response) => {
  const note = request.body;
  const newNote = new Note(note);

  try {
    await newNote.save();
    response.status(201).json(newNote);
  } catch (error) {
    response.status(409).json({ message: error.message })
  }
});

router.get("/all", async(request, response) => {
  try {
    const notes = await Note.find({});
    response.status(200).json(notes);
  } catch (error) {
    response.status(404).json({ message: error.message })
  }
})

router.delete('/:id', async (request, response) => {
  try{
      await Note.deleteOne({noteId: request.params.id});
      response.status(201).json("Note deleted Successfully");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
});

export default router;
