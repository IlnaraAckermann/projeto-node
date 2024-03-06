import { UserPostRecord } from "../models/UserPostRecord";
import { UserGetRecord } from "../models/UserGetRecord";
import { UserUpdatedRecord } from "../models/UserUpdatedRecord";
import { IUserService } from "./IUserService";
import { IUserRepository } from "../repository/IUserRepository";

export class UserService implements IUserService {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getAll(): Promise<UserGetRecord[]> {
    return await this.userRepository.getAll();
  }

  async post(userDto: UserPostRecord) {
    return await this.userRepository.post(userDto);
  }

  async getById(id: number): Promise<UserGetRecord> {
    return await this.userRepository.getById(id);
  }

  async update(
    id: number,
    userDto: UserPostRecord,
  ): Promise<UserUpdatedRecord> {
    return await this.userRepository.update(id, userDto);
  }

  async delete(id: number) {
    await this.userRepository.delete(id);
  }
}
