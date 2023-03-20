import { Router } from "express";
import {
  controllerGetProductCollection,
  controllerGetProducts,
  controllerPostProducts,
  controllerPutProductCollection,
} from "../controllers/controllerProducts.js";

export const routerProducts = Router();

routerProducts.get("/", controllerGetProducts);
routerProducts.post("/", controllerPostProducts);
routerProducts.get("/:identificator", controllerGetProductCollection);
routerProducts.put("/:identificator", controllerPutProductCollection);
