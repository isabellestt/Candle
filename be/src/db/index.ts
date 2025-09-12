import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const connectionString = process.env.DB_CONNECTION_STRING!;

export const client = postgres(connectionString, { prepare: false });
export const db = drizzle({ client });