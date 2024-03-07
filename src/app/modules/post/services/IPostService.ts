import { PostGetRecord } from "../models/PostGetRecord";
import { PostPostRecord } from "../models/PostPostRecod";
import { PostUpdateRecord } from "../models/PostUpdateRecord";

export interface IPostService {
  getAll(): Promise<PostGetRecord[]>;
  getAllByUserID(id: number): Promise<PostGetRecord[]>;
  post(postDto: PostPostRecord): void;
  getById(id: number): Promise<PostGetRecord>;
  update(id: number, postDto: PostUpdateRecord): Promise<PostGetRecord>;
  delete(id: number): void;
}
