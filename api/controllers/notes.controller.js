const asyncHandler = require('express-async-handler');
const notesService = require('../services/notes.service');

const getNotes = async (req, res) => {
    try {
        const notes = await notesService.getNotes();
        res.json(notes);
    } catch (ex) {
        res.status(500).json({ error: ex });
    }
};

const findNote = async (req, res) => {
    const params = req.swagger.params;
    const noteId = params.noteId.value;
    try {
        const note = await notesService.findNote(noteId);
        res.json(note);
    } catch (ex) {
        res.status(500).json({ error: ex });
    }
};

const saveNote = async (req, res) => {
    const params = req.swagger.params;
    const note = params.body.value;
    try {
        await notesService.saveNote(note);
        res.status(201).json();
    } catch (ex) {
        res.status(500).json({ error: ex });
    }
};

const updateNote = async (req, res) => {
    const params = req.swagger.params;
    const noteId = params.noteId.value;
    const note = params.body.value;
    try {
        await notesService.updateNote(noteId, note);
        res.status(200).json();
    } catch (ex) {
        res.status(500).json({ error: ex });
    }
};

const deleteNote = async (req, res) => {
    const params = req.swagger.params;
    const noteId = params.noteId.value;
    try {
        await notesService.deleteNote(noteId);
        res.status(200).json();
    } catch (ex) {
        res.status(500).json({ error: ex });
    }
};

module.exports = {
    getNotes: asyncHandler(getNotes),
    findNote: asyncHandler(findNote),
    saveNote: asyncHandler(saveNote),
    updateNote: asyncHandler(updateNote),
    deleteNote: asyncHandler(deleteNote)
};
