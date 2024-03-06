import { UserGetRecord } from "../models/UserGetRecord";
import { UserPostRecord } from "../models/UserPostRecord";
import { UserUpdatedRecord } from "../models/UserUpdatedRecord";

export interface IUserService {
  getAll(): Promise<UserGetRecord[]>;
  post(userDto: UserPostRecord): void;
  getById(id: number): Promise<UserGetRecord | null>;
  update(id: number, userDto: UserPostRecord): Promise<UserUpdatedRecord>;
  delete(id: number): void;
}
