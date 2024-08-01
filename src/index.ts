import { Hono } from "hono"
import { post } from "./routes/auth.rotue"

const app = new Hono()

app.route("/api", post)

export default app
