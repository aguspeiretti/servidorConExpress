import express from "express";

import ProductManager from "../managers/productManager.js";

const app = express();

const productManager = new ProductManager();

const products = productManager.getProducts();

app.get(`/products/`, async (req, res) => {
  res.send(await products);
});

app.get(`/products/:pid`, async (req, res) => {
  const idProducts = req.params.pid;
  const allProducts = await products;
  const selected = allProducts.find((p) => p.id === idProducts);
  res.send(selected);
});

app.listen(8080, () => {
  console.log("servidor arribaa");
});
