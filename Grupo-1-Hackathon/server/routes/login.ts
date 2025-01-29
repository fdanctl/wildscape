import express from "express";
import { ReadEmployeeCredentials } from "../services/employee";
export const router = express.Router();

// verificar se as credenciais estao corretas, se sim enviar o user id
router.post("/login", async (req, res) => {
    const result = await ReadEmployeeCredentials(req.body);

    if (result === "login failed") {
        res.status(400).json({ message: result });
        return
    }
    res.status(200).json({ message: result });
});
