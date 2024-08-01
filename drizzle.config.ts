import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "sqlite",
  out: "./migrations",
  schema: "./src/db/schema.ts",
  breakpoints: false,
  driver: "d1-http",
  dbCredentials: {
    accountId: "",
    databaseId: "",
    token: "",
  },
})
