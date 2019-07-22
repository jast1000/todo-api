const { Client } = require('pg');
const client = new Client();

client.connect();

const getAll = async (userId) =>  {
    const sql = 'select note_id as id, title, content, creation, user_id as userId from public.note where user_id = $1 order by creation';
    let data = await client.query(sql, [userId]);
    return data.rows;
};

const find = async (userId, noteId) => {
    const sql = 'select note_id as id, title, content, creation, user_id as userId from public.note where user_id = $1 and note_id = $2';
    let data = await client.query(sql, [userId, noteId]);
    return data.rows.length > 0 ? data.rows[0] : null;
};

const save = async (userId, note) => {
    const sql = 'insert into public.note(title, content, user_id, creation) values($1, $2, $3, now())';
    return await client.query(sql, [note.title, note.content, userId]);
};

const update = async (userId, noteId, note) => {
    const sql = 'update public.note set title = $1, content = $2 where user_id = $3 and note_id = $4';
    return await client.query(sql, [note.title, note.content, userId, noteId]);
};

const deletee = async (userId, noteId) => {
    const sql = 'delete from public.note where user_id = $1 and note_id = $2';
    return await client.query(sql, [userId, noteId]);
}

module.exports = {
    getAll,
    find,
    save,
    update,
    deletee
};