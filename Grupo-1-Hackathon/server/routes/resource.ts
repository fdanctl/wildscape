import express from "express";
import {
  CreateResource,
  ReadResources,
  ReadResourcesByName,
  UpdateResource,
} from "../services/resource";
export const router = express.Router();
import { Request, Response } from "express";
import { FindAnimalByName } from "../data/animal";

// ler todos os recursos na base de dados return os recursos com
// estatisticas (consumo diario e estimativa de fim de stock)
router.get("/", async (req, res) => {
  const result = await ReadResources();
  res.status(200).json(result);
});

router.get("/search/:str", async (req, res) => {
  const str = req.params.str;
  const result = await ReadResourcesByName(str);
  res.status(200).json(result);
});

// adiciona recurso
router.post("/", async (req: Request, res: Response) => {
  const body = req.body;
  const id = await CreateResource(body);

  if (id === "1") {
    res
      .status(400)
      .json({ message: "There is already a resource with that name" });
    return;
  }
  res.status(200).json({ message: "created successfully", id: id });
});

// deduzir comida do total
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const quantity = req.body.quantity;
  console.log(quantity);
  await UpdateResource({ _id: id, quantity: quantity });
  res.status(200).json({ message: "atualizado com sucesso" });
});
