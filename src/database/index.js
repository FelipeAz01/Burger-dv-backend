import { Sequelize } from "sequelize";
import mongoose from "mongoose";
import configDatabase from "../config/database.js";

import User from "../app/models/User";
import Product from "../app/models/Product";
import Category from "../app/models/category";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    // Para o MongoDB, você pode utilizar mongoose.connect com a URL do banco
    this.mongoConnection = mongoose.connect(
      "mongodb://localhost:27017/devburguer"
    );
  }
}

export default new Database();
