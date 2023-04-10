import fs from "fs";

export default class UserManager {
  constructor() {
    this.path = "./usuarios.json";
  }

  getUsers = async () => {
    try {
      const look = fs.existsSync(this.path);
      if (look) {
        const data = await fs.promises.readFile(this.path, "utf-8");
        const parseData = JSON.parse(data);
        return parseData;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  addUser = async ({ name, email, lastName, age, password }) => {
    try {
      const users = await this.getUsers();

      const user = {
        name: name,
        lastName: lastName,
        age: age,
        password: password,
        email: email,
      };

      if (!name || !lastName || !age || !password || !email) {
        console.log("complete all the slots");
        return null;
      }

      if (users.length === 0) {
        user.id = 1;
      } else {
        user.id = users[users.length - 1].id + 1;
      }
      users.push(user);

      await fs.promises.writeFile(this.path, JSON.stringify(users, null, "\t"));
    } catch (error) {
      console.log(error);
    }
  };

  getUserByEmail = async (email) => {
    try {
      const users = await this.getUsers();

      const userByEmail = users.find((u) => u.email === email);

      userByEmail ? console.log(userByEmail) : console.log("User not foud");
    } catch (error) {
      console.log(error);
    }
  };

  updateUser = async (email, elem) => {
    const users = await this.getUsers();

    const modifiedUser = users.map((u) =>
      u.email === email ? { ...u, ...elem } : u
    );

    fs.promises.writeFile(this.path, JSON.stringify(modifiedUser, null, "\t"));
  };

  deleteUser = async (email) => {
    try {
      const users = await this.getUsers();
      const index = users.findIndex((u) => u.email === email);
      users.splice(index, 1);
      fs.promises.writeFile(this.path, JSON.stringify(users, null, "\t"));
    } catch (error) {
      console.log(error);
    }
  };
}
