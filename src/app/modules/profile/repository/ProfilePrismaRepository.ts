import { PrismaClient } from "@prisma/client";
import { IProfileRepository } from "./IProfileRepository";
import { ProfileGetRecord } from "../models/ProfileGetRecord";
import { ProfilePostRecord } from "../models/ProfilePostRecord";
import { ProfileUpdateRecord } from "../models/ProfileUpdateRecord";
const prisma = new PrismaClient();

export class ProfilePrismaRepository implements IProfileRepository {
  async getAll(): Promise<ProfileGetRecord[]> {
    const profiles: ProfileGetRecord[] = await prisma.profile.findMany();
    return profiles;
  }

  async post(profileDto: ProfilePostRecord) {
    const { bio, userId } = profileDto;
    return await prisma.profile.create({
      data: {
        bio,
        userId,
      },
    });
  }

  async getById(id: number): Promise<ProfileGetRecord> {
    const result = await prisma.profile.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return result;
  }

  async update(
    id: number,
    profileDto: ProfileUpdateRecord,
  ): Promise<ProfileGetRecord> {
    const { bio } = profileDto;
    return await prisma.profile.update({
      where: {
        id: id,
      },
      data: {
        bio,
      },
    });
  }

  async delete(id: number) {
    await prisma.profile.delete({
      where: { id: id },
    });
  }
}
