import { Hono } from "hono"
import {
  postById,
  postCreate,
  postDetails,
} from "../controller/auth.controller"

export const post = new Hono<{ Bindings: CloudflareEnv }>()

post.get("/posts", postDetails)
post.get("/posts/:id", postById)
post.post("/posts", postCreate)
