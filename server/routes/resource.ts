import express from "express";
import {
  CreateResource,
  DeleteResource,
  ReadResourceById,
  ReadResources,
  ReadResourcesByName,
  UpdateResource,
} from "../services/resource";
export const router = express.Router();
import { Request, Response } from "express";

// ler todos os recursos na base de dados return os recursos com
// estatisticas (consumo diario e estimativa de fim de stock)
router.get("/", async (req, res) => {
  const result = await ReadResources();
  res.status(200).json(result);
});

// procurar recurso
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

router
  .route("/:id")

  .get(async (req, res) => {
    const id = req.params.id;
    const data = await ReadResourceById(id);

    if (!data) {
      res.status(404).json({ message: "page not found" });
    }

    res.status(200).json(data);
  })

  // aumentar/deduzir comida do total
  .patch(async (req, res) => {
    const id = req.params.id;
    const quantity = req.body.quantity;
    await UpdateResource({ _id: id, quantity: quantity });
    res.status(200).json({ message: "atualizado com sucesso" });
  })

  // apagar recurso
  .delete(async (req, res) => {
    const id = req.params.id;
    await DeleteResource(id);
    res.status(200).json({ message: "removido com sucesso" });
  });
