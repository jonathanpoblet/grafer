import { containerProducts } from "../container/containerProducts.js";
import { randomUUID } from 'crypto';

export async function controllerGetProducts(req, res) {
  const products = await containerProducts.getAll();
  res.json(products);
}

export async function controllerPostProducts(req, res) {
  const product = {
    recetaries : [],
    identificator: randomUUID(),
    image: 'https://res.cloudinary.com/dmx8e4tt0/image/upload/v1679498615/grafer-images/fiobhbkzhgksufs0ybkx.jpg',
    title: 'Recetarios',
    length: 0,
    name: 'recetaries',
    endpoint: 'recetarios'
  }
  await containerProducts.save(product)
  res.json({ succesfull: "Product addedd" });
}

export async function controllerGetProductCollection(req,res) {
  const identificator = req.params.identificator;
  const collection = await containerProducts.getById(identificator);
  if(collection) {
    res.json(collection);
  } else {
      res.status(404).json({error: `Collection with id ${identificator} not found`});
  }
}

export async function controllerPutProductCollection(req, res) {
  const collection = await containerProducts.getAll();
  const product = req.body
  product.identificator = randomUUID()
  product.length++
  const col = collection.find(c => c.name === product.name);
  col[col.name].push(product);
  await containerProducts.changeById(col.identificator,col)
  res.json({succesfull: 'succesfull'})
}
