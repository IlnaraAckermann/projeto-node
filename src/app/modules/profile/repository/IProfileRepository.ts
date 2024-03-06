import { ProfileGetRecord } from "../models/ProfileGetRecord";
import { ProfilePostRecord } from "../models/ProfilePostRecord";
import { ProfileUpdateRecord } from "../models/ProfileUpdateRecord";

export interface IProfileRepository {
  getAll(): Promise<ProfileGetRecord[]>;
  post(profileDto: ProfilePostRecord): void;
  getById(id: number): Promise<ProfileGetRecord>;
  update(
    id: number,
    profileDto: ProfileUpdateRecord,
  ): Promise<ProfileGetRecord>;
  delete(id: number): void;
}
