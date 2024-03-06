import { UserGetRecord } from "../models/UserGetRecord";
import { UserPostRecord } from "../models/UserPostRecord";
import { UserUpdatedRecord } from "../models/UserUpdatedRecord";
import { IUserRepository } from "./IUserRepository";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class UserPrismaRepository implements IUserRepository {
  async getAll(): Promise<UserGetRecord[]> {
    const users: UserGetRecord[] = await prisma.user.findMany({
      include: {
        posts: true, // Returns all fields for all posts
        profile: true, // Returns all Profile fields
      },
    });
    return users;
  }
  async post(userDto: UserPostRecord): Promise<unknown> {
    const { email, name } = userDto;
    return await prisma.user.create({
      data: {
        email,
        name,
      },
    });
  }
  async getById(id: number): Promise<UserGetRecord> {
    const result = await prisma.user.findUniqueOrThrow({
      include: {
        posts: true, // Returns all fields for all posts
        profile: true, // Returns all Profile fields
      },
      where: {
        id: id,
      },
    });
    return result;
  }
  async update(
    id: number,
    userDto: UserPostRecord,
  ): Promise<UserUpdatedRecord> {
    const { email, name } = userDto;
    return await prisma.user.update({
      where: { id: id },
      data: {
        email,
        name,
      },
    });
  }
  async delete(id: number): Promise<unknown> {
    return await prisma.user.delete({
      where: { id: id },
    });
  }
}
