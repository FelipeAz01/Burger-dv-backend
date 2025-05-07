import dotenv from "dotenv";

dotenv.config();

export default {
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "postgres",
  database: process.env.DB_NAME || "devburguer",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
