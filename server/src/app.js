import express from "express";
import { routerContact } from "./routers/routerContact.js";
import { routerProducts } from "./routers/routerProducts.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", routerProducts);
app.use("/api/contact", routerContact);
