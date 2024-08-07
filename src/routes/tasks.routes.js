import { Router } from "express";
import { createTask, deleteTask, getAllTask, getOneTask, updateTask } from "../controllers/tasks.controllers.js";



const router = Router()


// PREFIJO '/tasks' + controlador (funcion)
router.post('/tasks', createTask)
router.get('/tasks', getAllTask)


//dame UNA - cual? : la de ID = x
router.get('/tasks/:id', getOneTask)

//actualizar UNA - 11cual?
router.put('/tasks/:id', updateTask)

//eliminar UNA - cual?
router.delete('/tasks/:id', deleteTask)

export default router