export async function controllerGetProducts(req, res) {
  res.json({ products: ["pepa", "maria", "jose"] });
}

export async function controllerPostProducts(req, res) {
  res.json({ succesfull: "Product addedd" });
}
