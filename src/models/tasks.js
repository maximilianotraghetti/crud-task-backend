import { ConnectDB } from "../config/db.js";

export const TaskModel = async () => {
  const connection = await ConnectDB()

  const sql = `CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT,
      title VARCHAR(100),
      description VARCHAR(100),
      done BOOLEAN DEFAULT false,
      PRIMARY KEY(id)
    )`;


  console.log("Tabla 'tasks' creada o ya existia")

  return await connection.execute(sql)

}