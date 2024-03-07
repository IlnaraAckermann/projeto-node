import { Request, Response } from "express";
import { PostService } from "./../services/PostService";
import { PostPostRecord } from "../models/PostPostRecod";
import { PostUpdateRecord } from "../models/PostUpdateRecord";
import { PostGetRecord } from "../models/PostGetRecord";
export class PostController {
  private postService: PostService;
  constructor(postService: PostService) {
    this.postService = postService;
  }
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const posts = await this.postService.getAll();
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async getAllByUserID(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
      const posts = await this.postService.getAllByUserID(id);
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async post(req: Request, res: Response): Promise<void> {
    const postDto: PostPostRecord = req.body;
    try {
      await this.postService.post(postDto);
      res.status(201).json({ message: "User created" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async getById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
      const post = this.postService.getById(id);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async update(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const postDto: PostUpdateRecord = req.body;
    try {
      const postUpdated: PostGetRecord = await this.postService.update(
        id,
        postDto,
      );
      res.json(postUpdated).status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
      await this.postService.delete(id);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
