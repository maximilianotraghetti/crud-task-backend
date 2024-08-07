import { ConnectDB } from "../config/db.js";

export async function createTask(req, res) {
    const con = await ConnectDB()


    const sql = 'INSERT INTO tasks (title, description, done) SET VALUES (? )'

    
    con.execute(sql)

    res.status(200).send("Task creada")
}

export async function getOneTask(req, res) {

    const con = await ConnectDB()

    const sql = 'SELECT * FROM tasks WHERE id = ?';
    const value = [req.params.id];

    const [rows] = await con.query(sql, value);
    console.log(rows);
    res.status(200).json(rows[0]);
}

export async function getAllTask(req, res) {

    const con = await ConnectDB()

    const sql = 'SELECT * FROM tasks'

    const [rows] = await con.execute(sql)

    res.status(200).json(rows)

}

export async function updateTask(req, res) {
    const con = await ConnectDB()

    const sql = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?'
    const {title, description} = req.body
    const {id} = req.params

   const [result] = await con.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id])

    const [rows] = await con.query('SELECT * FROM tasks WHERE id = ?', [id])
    res.status(200).json(rows[0])
}

export async function deleteTask(req, res) {
    res.send("eliminando task")
    const con = await ConnectDB()

    const sql = 'SELECT * FROM `tasks` WHERE id = ?'
    const {id} = req.params;

    const [result] = await con.query('DELETE FROM tasks WHERE id = ?', [id]);
    res.status(204);
}
