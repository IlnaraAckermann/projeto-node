import { PostGetRecord } from "../models/PostGetRecord";
import { PostPostRecord } from "../models/PostPostRecod";
import { PostUpdateRecord } from "../models/PostUpdateRecord";
import { IPostService } from "./IPostService";
import { IPostRepository } from "../repository/IPostRepository";

export class PostService implements IPostService {
  private postRepository: IPostRepository;
  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }
  async getAll(): Promise<PostGetRecord[]> {
    return await this.postRepository.getAll();
  }
  async getAllByUserID(id: number): Promise<PostGetRecord[]> {
    return await this.postRepository.getAllByUserID(id);
  }
  async post(postDto: PostPostRecord) {
    return this.postRepository.post(postDto);
  }
  async getById(id: number): Promise<PostGetRecord> {
    return await this.postRepository.getById(id);
  }
  async update(id: number, postDto: PostUpdateRecord): Promise<PostGetRecord> {
    return await this.postRepository.update(id, postDto);
  }
  async delete(id: number) {
    return this.postRepository.delete(id);
  }
}
