import { Router } from "express";
import {
  controllerDeleteProductCollection,
  controllerGetProductCollection,
  controllerGetProducts,
  controllerPostProducts,
  controllerPostPurchase,
  controllerPutProductCollection,
} from "../controllers/controllerProducts.js";

export const routerProducts = Router();

routerProducts.get("/", controllerGetProducts);
routerProducts.post("/", controllerPostProducts);
routerProducts.get("/:identificator", controllerGetProductCollection);
routerProducts.put("/addProduct", controllerPutProductCollection);
routerProducts.put("/deleteProduct", controllerDeleteProductCollection);
routerProducts.post("/purchase",controllerPostPurchase)
