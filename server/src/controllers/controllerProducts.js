import mercadopago from 'mercadopago'
import { containerProducts } from "../container/containerProducts.js";
import { randomUUID } from 'crypto';
import { transporter } from "../email/index.js";

export async function controllerGetProducts(req, res) {
  const products = await containerProducts.getAll();
  res.json(products);
}

export async function controllerPostProducts(req, res) {
  const product1 = {
    alimentaryPlans : [],
    identificator: randomUUID(),
    image: 'https://res.cloudinary.com/dmx8e4tt0/image/upload/v1680542501/grafer-images/rduc4ajnke6uwq9bljd1.png',
    title: 'Planes Alimentarios',
    length: 0,
    name: 'alimentaryPlans',
    endpoint: 'planesAlimentarios'
  }
  const product2 = {
    ebooks : [],
    identificator: randomUUID(),
    image: 'https://res.cloudinary.com/dmx8e4tt0/image/upload/v1680542505/grafer-images/k2hbdmlitephfmevbk19.png',
    title: 'E-books',
    length: 0,
    name: 'ebooks',
    endpoint: 'ebooks'
  }
  const product3 = {
    recetaries : [],
    identificator: randomUUID(),
    image: 'https://res.cloudinary.com/dmx8e4tt0/image/upload/v1680542510/grafer-images/oehcec14ugcw6orodtqt.png',
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

export async function controllerPostPurchase(req, res) {
    mercadopago.configure({
    access_token: 'TEST-4093073109802341-032912-19a15bb77eeb4a9f1263ae2d3cb51bd8-1341353040',
  })

  const { user, product } = req.body

  const preference = {
    binary_mode: true,
    items: [
      {
        id: product.identificator,
        title: product.title,
        description: 'Grafer product',
        picture_url: product.image,
        quantity: 1,
        currency_id: "ARS",
        unit_price: 1
      }
    ],
    payer: {
      name: user.name,
      surname: user.surname,
      email: user.email
    },
    back_urls: {
      success: "http://localhost:5173/success",
      failure: "http://localhost:5173/failure",
      pending: "http://localhost:5173/pending"
    },
    auto_return: "approved"
  }
      
  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({global: response.body.id})
    })
    .catch((error) => {
      res.status(500).json({global: error})
    })
    
}

export async function controllerPostSendProduct(req, res) {
  const product = req.body.product
  const user = req.body.user
  if(user.name && user.email && user.surname && product.title && product.price) {
    await transporter.sendMail({
      from: 'Servidor Node.js',
      to: 'jonathanpoblet228@gmail.com',
      subject: 'Compra realizada',
      html: `<h3>Nueva compra de:</h3><p>Nombre: ${user.name} ${user.surname}</p><p>Email: ${user.email}</p><p>Producto: ${product.title}</p><p>Precio: ${product.price}</p><a href='${product.pdf}'>Link del producto digital</a>`
  })

  await transporter.sendMail({
    from: 'Servidor Node.js',
    to: user.email,
    subject: 'Compra realizada',
    html: `<h4>Nueva compra</h4><p>Felicidades por tu nueva compra! A continuación te dejo los datos del producto y el link para acceder al pdf completo</p><p>Producto: ${product.title}</p><p>Precio: ${product.price}</p><a href='${product.pdf}'>Link del producto digital</a>`
  })
    res.json({ succesfull: "Emails send" });
  } else res.status(404).json({error: 'Faltan datos de envio'});
}