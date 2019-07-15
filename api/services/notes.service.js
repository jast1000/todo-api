const notesRepository = require('../repositories/notes.repository');

const getNotes = async () => {
    return await notesRepository.getAll();
};

const findNote = async (id) => {
    return await notesRepository.find(id);
};

const saveNote = async (note) => {
    return await notesRepository.save(note);
};

const updateNote = async (id, note) => {
    return await notesRepository.update(id, note);
};

const deleteNote = async (id) => {
    return await notesRepository.deletee(id);
};

module.exports = {
    getNotes,
    findNote,
    saveNote,
    updateNote,
    deleteNote
};