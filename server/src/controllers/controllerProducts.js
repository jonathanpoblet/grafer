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
    image: 'https://nutritionfacts.org/app/uploads/2020/01/IMG_8798.jpg',
    title: 'Recetarios',
    length: 0
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
  const identificator = req.params.identificator;
  const collection = await containerProducts.getById(identificator);
  if(collection) {
    const product = req.body
    if(collection["alimentaryPlans"]) {
      collection.alimentaryPlans.push(product);
      await containerProducts.changeById(identificator,collection);
      res.json(collection);
    } else if(collection["ebooks"]) {
      collection.ebooks.push(product);
      await containerProducts.changeById(identificator,collection);
      res.json(collection);
    } else if(collection["nutritionalTools"]) {
      collection.nutritionalTools.push(product);
      await containerProducts.changeById(identificator,collection);
      res.json(collection);
    } else if(collection["recetaries"]) {
      collection.recetaries.push(product);
      await containerProducts.changeById(identificator,collection);
      res.json(collection);
    } else {
      res.json({error: "Invalid Type"})
    }
  } else {
      res.status(404).json({error: `Collection with id ${identificator} not found`});
  }
}
