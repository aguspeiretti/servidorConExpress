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

const u1 = {
  name: "agus",
  lastName: "peiretti",
  age: 34,
  password: 123,
  email: "agu@agu",
};

userManager.addUser(u1);
// userManager.updateUser("agu@agu", { email: "agu@gmail.com" });
// userManager.deleteUser("agu@gmail.com");
