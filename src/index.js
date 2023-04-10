import ProductManager from "../managers/productManager.js";
import UserManager from "../managers/userManager.js";

const productManager = new ProductManager();

const p1 = {
  title: "chomba",
  description: "mc",
  thumnail: "http",
  code: 1234,
  stock: 2,
};

productManager.addProducts(p1);

// productManager.updateProduct(1, { code: 456 });

// productManager.deleteProduct(1);

const userManager = new UserManager();

const u2 = {
  name: "juan",
  lastName: "carlos",
  age: 32,
  password: 1233,
  email: "juan@juan",
};

userManager.addUser(u2);
// userManager.updateUser("agu@agu", { email: "agu@gmail.com" });
// userManager.deleteUser("agu@gmail.com");
