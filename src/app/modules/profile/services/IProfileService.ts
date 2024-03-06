import { ProfileGetRecord } from "../models/ProfileGetRecord";
import { ProfilePostRecord } from "../models/ProfilePostRecord";
import { ProfileUpdateRecord } from "../models/ProfileUpdateRecord";

export interface IProfileService {
  getAll(): Promise<ProfileGetRecord[]>;
  post(profileDto: ProfilePostRecord): void;
  getById(id: number): Promise<ProfileGetRecord | null>;
  update(
    id: number,
    profileDto: ProfileUpdateRecord,
  ): Promise<ProfileGetRecord>;
  delete(id: number): void;
}
