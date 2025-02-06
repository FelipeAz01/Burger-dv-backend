import Sequelize, { Model } from "sequelize";
import bcrypt from "bcrypt";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: "users", // Certifique-se de que está mapeando para a tabela correta
        timestamps: true, // Ativa as colunas created_at e updated_at
        underscored: true, // Utiliza snake_case para nomes de colunas
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
