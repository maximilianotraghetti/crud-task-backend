import "dotenv/config";

import express from "express";
import cors from "cors";
import { ConnectDB } from "./src/config/db.js";
import router from "./src/routes/tasks.routes.js";
import { TaskModel } from "./src/models/tasks.js";

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // establece lenguaje de comunicacion del servidor - "habla en json"
app.use(cors()) //permite conexiones de origenes externos 


app.use("/api", router)
app.use("/", async (req, res) => {
    res.send("Hola mundo 😘")
})


app.listen(PORT, async () => {
    await TaskModel()
    console.log(`Servidor iniciado en ${HOST}:${PORT}`)
})