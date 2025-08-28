import { pgTable, text, uuid, date, timestamp} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const Profile = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  authId: text().notNull(),
  username: text("username").notNull(),
  dob: date("dob").notNull(),
  gender: text("gender").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Profile = InferSelectModel<typeof Profile>;
export type InsertProfile = InferInsertModel<typeof Profile>;
