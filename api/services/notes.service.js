const notesRepository = require('../repositories/notes.repository');

const getNotes = async (userId) => {
    return await notesRepository.getAll(userId);
};

const findNote = async (userId, noteId) => {
    return await notesRepository.find(userId, noteId);
};

const saveNote = async (userId, note) => {
    return await notesRepository.save(userId, note);
};

const updateNote = async (userId, noteId, note) => {
    return await notesRepository.update(userId, noteId, note);
};

const deleteNote = async (userId, noteId) => {
    return await notesRepository.deletee(userId, noteId);
};

module.exports = {
    getNotes,
    findNote,
    saveNote,
    updateNote,
    deleteNote
};