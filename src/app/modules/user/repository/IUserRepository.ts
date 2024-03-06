import { UserGetRecord } from "../models/UserGetRecord";
import { UserPostRecord } from "../models/UserPostRecord";
import { UserUpdatedRecord } from "../models/UserUpdatedRecord";

export interface IUserRepository {
  getAll(): Promise<UserGetRecord[]>;
  post(userDto: UserPostRecord): Promise<unknown>;
  getById(id: number): Promise<UserGetRecord>;
  update(id: number, userDto: UserPostRecord): Promise<UserUpdatedRecord>;
  delete(id: number): Promise<unknown>;
}
