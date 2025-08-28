ALTER TABLE "profiles" ALTER COLUMN "username" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "authId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "dob" date NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "gender" text NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN "first_name";--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN "last_name";