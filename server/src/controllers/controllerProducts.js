import { containerProducts } from "../container/containerProducts.js";

export async function controllerGetProducts(req, res) {
  const products = await  containerProducts.getAll();
  res.json(products);
}

export async function controllerPostProducts(req, res) {
  res.json({ succesfull: "Product addedd" });
}
