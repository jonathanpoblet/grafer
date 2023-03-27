import { containerProducts } from "../container/containerProducts.js";
import { randomUUID } from 'crypto';

export async function controllerGetProducts(req, res) {
  const products = await containerProducts.getAll();
  res.json(products);
}

export async function controllerPostProducts(req, res) {
  const product1 = {
    alimentaryPlans : [],
    identificator: randomUUID(),
    image: 'https://res.cloudinary.com/dmx8e4tt0/image/upload/v1679498610/grafer-images/pps9couhashed5hgavsn.jpg',
    title: 'Planes Alimentarios',
    length: 0,
    name: 'alimentaryPlans',
    endpoint: 'planesAlimentarios'
  }
  const product2 = {
    ebooks : [],
    identificator: randomUUID(),
    image: 'https://res.cloudinary.com/dmx8e4tt0/image/upload/v1679498612/grafer-images/aulesk9cmjhtondkhugz.jpg',
    title: 'E-books',
    length: 0,
    name: 'ebooks',
    endpoint: 'ebooks'
  }
  const product3 = {
    recetaries : [],
    identificator: randomUUID(),
    image: 'https://res.cloudinary.com/dmx8e4tt0/image/upload/v1679498615/grafer-images/fiobhbkzhgksufs0ybkx.jpg',
    title: 'Recetarios',
    length: 0,
    name: 'recetaries',
    endpoint: 'recetarios'
  }
  await containerProducts.save(product1)
  await containerProducts.save(product2)
  await containerProducts.save(product3)
  res.json({ succesfull: "Products addedd" });
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
  const col = collection.find(c => c.name === product.name);
  col[col.name].push(product);
  col.length++;
  await containerProducts.changeById(col.identificator,col)
  const updateProducts = await containerProducts.getAll();
  res.json(updateProducts)
}

export async function controllerDeleteProductCollection(req, res) {
  const collection = await containerProducts.getAll();
  const product = req.body
  const col = collection.find(c => c.name === product.name);
  const index = col[col.name].findIndex(c => c.identificator === product.identificator);
  if(index  !== - 1) {
    if(col.length > 0) {
      col[col.name].splice(index,1);
      col.length--;
      await containerProducts.changeById(col.identificator,col);
      const updateProducts = await containerProducts.getAll();
      res.json(updateProducts);
    } else {
        res.status(400).json({error: 'No products to delete'});
    }
  } else {
    res.status(400).json({error: 'No product found'})
  }
}
