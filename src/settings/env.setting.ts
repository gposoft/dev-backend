import { config } from "dotenv";
config();

export const envSetting = {
  db: {
    engine: "PG",
    postgres: {
      DB_USER: process.env.DB_POSTGRES_USER || "developer",
      DB_PASSWORD: process.env.DB_POSTGRES_PASSWORD || "developer",
      DB_SERVER: process.env.DB_POSTGRES_SERVER || "DEVELOPER",
      DB_DATA: process.env.DB_POSTGRES_DATA || "dbservices",
      DB_PORT: process.env.DB_POSTGRES_PORT || 1433,
    },
  },
  security: {
    jwt_pass: process.env.SECURITY_JWT_KEY,
  },
  email: {
    outlook: {
      user: process.env.EMAIL_USER || "",
      password: process.env.EMAIL_PASSWORD || "",
    },
  },
};
