import fs from "fs";

export default class ProductManager {
  constructor() {
    this.path = "./productos.json";
  }

  getProducts = async () => {
    try {
      const data = fs.existsSync(this.path);
      if (data) {
        const info = await fs.promises.readFile(this.path, "utf-8");
        const products = JSON.parse(info);
        return products;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  addProducts = async ({ title, description, thumnail, code, stock }) => {
    try {
      const products = await this.getProducts();

      const product = {
        title: title,
        description: description,
        thumnail: thumnail,
        code: code,
        stock: stock,
      };

      if (!title || !description || !thumnail || !code || !stock) {
        console.log("Please complete list");
        return null;
      }

      const repetCode = products.find((p) => p.code === code);

      if (repetCode) {
        console.log("invalid code");
        return null;
      }

      if (products.length === 0) {
        product.id = 1;
      } else {
        product.id = products[products.length - 1].id + 1;
      }

      products.push(product);

      fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
    } catch (error) {
      console.log(error);
    }
  };

  getElementById = async (id) => {
    try {
      const products = await this.getProducts();

      const findProduct = products.find((p) => p.id === id);

      findProduct ? console.log(findProduct) : null;
    } catch (error) {
      console.log(error);
    }
  };

  updateProduct = async (id, elem) => {
    try {
      const products = await this.getProducts();

      const newProduct = products.map((p) =>
        p.id === id ? { ...p, ...elem } : p
      );

      fs.promises.writeFile(this.path, JSON.stringify(newProduct), null, "\t");
    } catch (error) {
      console.log(error);
    }
  };

  deleteProduct = async (id) => {
    try {
      const products = await this.getProducts();

      const newProduct = products.filter((p) => p.id !== id);

      await fs.promises.writeFile(
        this.path,
        JSON.stringify(newProduct, null, "\t")
      );
    } catch (error) {
      console.log(error);
    }
  };
}
