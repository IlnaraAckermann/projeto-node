import express from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async(_, res) => { 
    const users = await prisma.user.findMany({
        include: {
            posts: true, // Returns all fields for all posts
            profile: true, // Returns all Profile fields
        },
    });
    res.json(users);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
  