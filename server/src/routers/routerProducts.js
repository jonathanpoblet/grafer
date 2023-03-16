import { Router } from "express";
import {
  controllerGetProducts,
  controllerPostProducts,
} from "../controllers/controllerProducts.js";

export const routerProducts = Router();

routerProducts.get("/", controllerGetProducts);
routerProducts.post("/", controllerPostProducts);
