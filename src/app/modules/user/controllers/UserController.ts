import { UserPostRecord } from "../models/UserPostRecord";
import { UserUpdatedRecord } from "../models/UserUpdatedRecord";
import { IUserService } from "../services/IUserService";
import { Request, Response } from "express";

export class UserController {
  private userService: IUserService;
  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async post(req: Request, res: Response): Promise<void> {
    const userDto: UserPostRecord = req.body;
    try {
      await this.userService.post(userDto);
      res.status(201).json({ message: "User created" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    const userId = Number(req.params.id);
    try {
      const user = await this.userService.getById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async update(req: Request, res: Response): Promise<void> {
    const userId = Number(req.params.id);
    const userDto: UserPostRecord = req.body;
    try {
      const userUpdated: UserUpdatedRecord = await this.userService.update(
        userId,
        userDto,
      );
      res.send(userUpdated).status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    const userId = Number(req.params.id);
    try {
      await this.userService.delete(userId);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
