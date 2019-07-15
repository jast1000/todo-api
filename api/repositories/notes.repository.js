const { Client } = require('pg');
const client = new Client();

client.connect();

const getAll = async () =>  {
    const sql = 'select note_id as id, title, content from public.note';
    let data = await client.query(sql);
    return data.rows;
};

const find = async (id) => {
    const sql = 'select note_id as id, title, content from public.note where note_id = $1';
    let data = await client.query(sql, [id]);
    return data.rows.length > 0 ? data.rows[0] : null;
};

const save = async (note) => {
    const sql = 'insert into public.note(title, content) values($1, $2)';
    return await client.query(sql, [note.title, note.content]);
};

const update = async (id, note) => {
    const sql = 'update public.note set title = $1, content = $2 where note_id = $3';
    return await client.query(sql, [note.title, note.content, id]);
};

const deletee = async (id) => {
    const sql = 'delete from public.note where note_id = $1';
    return await client.query(sql, [id]);
}

module.exports = {
    getAll,
    find,
    save,
    update,
    deletee
};