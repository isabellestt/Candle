import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  schemaFilter: ["public"],
  dialect: "postgresql",
  schema: "./src/db/schemas",
  out: "./src/db/migrations/drizzle",
  dbCredentials: {
    url: process.env.DB_CONNECTION_STRING!,
  },
});