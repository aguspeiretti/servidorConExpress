import express from "express";

import ProductManager from "../managers/productManager.js";

const app = express();

const productManager = new ProductManager();

const products = productManager.getProducts();

app.get(`/products/`, async (req, res) => {
  res.send(await products);
});

app.get(`/products/pid`, async (req, res) => {
  res.send(await products);
});

app.listen(8080, () => {
  console.log("servidor arriba");
});
