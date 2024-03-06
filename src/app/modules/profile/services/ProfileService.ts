import { ProfileGetRecord } from "../models/ProfileGetRecord";
import { ProfilePostRecord } from "../models/ProfilePostRecord";
import { ProfileUpdateRecord } from "../models/ProfileUpdateRecord";
import { IProfileRepository } from "../repository/IProfileRepository";
import { IProfileService } from "./IProfileService";

export class ProfileService implements IProfileService {
  private profileRepository: IProfileRepository;
  constructor(profileRepository: IProfileRepository) {
    this.profileRepository = profileRepository;
  }
  async getAll(): Promise<ProfileGetRecord[]> {
    return await this.profileRepository.getAll();
  }
  async post(profileDto: ProfilePostRecord) {
    return await this.profileRepository.post(profileDto);
  }
  async getById(id: number): Promise<ProfileGetRecord> {
    return await this.profileRepository.getById(id);
  }
  async update(
    id: number,
    profileDto: ProfileUpdateRecord,
  ): Promise<ProfileGetRecord> {
    return await this.profileRepository.update(id, profileDto);
  }
  async delete(id: number) {
    return await this.profileRepository.delete(id);
  }
}
