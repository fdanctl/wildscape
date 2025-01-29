import express from "express";
import {
  CreateTask,
  DeleteTask,
  ReadAllTasks,
  ReadTasks,
  UpdateTask,
} from "../services/tasks";
export const router = express.Router();

// adicionar tarefa
router.post("/", async (req, res) => {
  const body = req.body;
  const id = await CreateTask(body);

  if (id === "1") {
    res.status(400).json({ message: "employee number already taken" });
    return;
  }
  res.status(200).json({ message: "created successfully", id: id });
});

// get data do animal por especie
router.get("/", async (req, res) => {
  const tasks = await ReadAllTasks();

  res.status(200).json({ tasks });
});
// get data do animal por especie
router.get("/employee/:employeeId", async (req, res) => {
  const animal = req.params.employeeId;
  const tasks = await ReadTasks(animal);

  res.status(200).json({ tasks });
});

router
  .route("/:id")

  // editar tarefa
  .patch(async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    await UpdateTask(id, body);
    res.status(200).json({ message: "editado com sucesso" });
  })

  // apagar tarefa
  .delete(async (req, res) => {
    const id = req.params.id;
    await DeleteTask(id);
    res.status(200).json({ message: "removido com sucesso" });
  });

  // PESQUISA ANIMAL E RESOURCES PELO NOME
