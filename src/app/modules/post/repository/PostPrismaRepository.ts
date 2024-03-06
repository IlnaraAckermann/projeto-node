import { PrismaClient } from "@prisma/client";
import { IPostRepository } from "./IPostRepository";
import { PostGetRecord } from "../models/PostGetRecord";
import { PostPostRecord } from "../models/PostPostRecod";
import { PostUpdateRecord } from "../models/PostUpdateRecord";
const prisma = new PrismaClient();

export class PostPrismaRepository implements IPostRepository {
  async getAll(): Promise<PostGetRecord[]> {
    const posts: PostGetRecord[] = await prisma.post.findMany();
    return posts;
  }
  async getAllByUserID(id: number): Promise<PostGetRecord[]> {
    const posts: PostGetRecord[] = await prisma.post.findMany({
      where: {
        authorId: id,
      },
    });
    return posts;
  }

  async post(postDto: PostPostRecord) {
    const { title, content, published, authorId } = postDto;
    return await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId,
      },
    });
  }

  async getById(id: number): Promise<PostGetRecord> {
    const result = await prisma.post.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return result;
  }

  async update(id: number, postDto: PostUpdateRecord): Promise<PostGetRecord> {
    const { title, content, published } = postDto;
    return await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
        published,
      },
    });
  }

  async delete(id: number) {
    await prisma.post.delete({
      where: { id: id },
    });
  }
}
