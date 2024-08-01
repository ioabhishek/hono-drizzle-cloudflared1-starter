import { drizzle } from "drizzle-orm/d1"
import { posts } from "../db/schema"
import { eq } from "drizzle-orm"

export const postDetails = async (c: any) => {
  const db = drizzle(c.env.DB)
  const result = await db.select().from(posts).all()
  return c.json(result)
}

export const postById = async (c: any) => {
  const db = drizzle(c.env.DB)
  const id = Number(c.req.param("id"))
  const result = await db.select().from(posts).where(eq(posts.id, id))
  return c.json(result)
}

export const postCreate = async (c: any) => {
  const db = drizzle(c.env.DB)
  const { title, content } = await c.req.json()
  const result = await db.insert(posts).values({ title, content }).returning()
  return c.json(result)
}
