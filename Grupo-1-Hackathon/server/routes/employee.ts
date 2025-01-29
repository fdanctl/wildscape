import express from "express";
import {
    CreateEmployee,
    DeleteEmployee,
    ReadEmployeeById,
    ReadEmployeeByNr,
    UpdateEmployee,
} from "../services/employee";
export const router = express.Router();

// adicionar funcionario à base de dados
router.post("/", async (req, res) => {
    const body = req.body;
    const id = await CreateEmployee(body);

    if (id === "error") {
        res.status(400).json({ message: id });
        return
    }
    res.status(200).json({ message: "created successfully", id: id });
});

// get data do funcionario pelo _id
router.get("/id/:id", async (req, res) => {
    const id = req.params.id;
    const data = await ReadEmployeeById(id);

    if (!data) {
        res.status(404).json({ message: "page not found" });
    }

    res.status(200).json(data);
});

router
    .route("/:employeeNr")

    // get data do funcionario pelo numero de funcionario
    .get(async (req, res) => {
        const employeeNr = req.params.employeeNr;
        const data = await ReadEmployeeByNr(Number(employeeNr));

        if (!data) {
            res.status(404).json({ message: "page not found" });
        }

        res.status(200).json(data);
    })

    // editar funcionario
    .patch(async (req, res) => {
        const employeeNr = req.params.employeeNr;
        const data = await ReadEmployeeByNr(Number(employeeNr));
        const body = req.body;

        if (!data) {
            res.status(404).json({ message: "page not found" });
        }

        await UpdateEmployee(Number(employeeNr), body);
        res.status(200).json({ message: "editado com sucesso" });
    })

    // apagar funcionario
    .delete(async (req, res) => {
        const employeeNr = req.params.employeeNr;
        await DeleteEmployee(Number(employeeNr));
        res.status(200).json({ message: "removido com sucesso" });
    });
