import AppError from "@errors/AppError";
import { UserPostRecord } from "../models/UserPostRecord";
import { UserUpdatedRecord } from "../models/UserUpdatedRecord";
import { IUserService } from "../services/IUserService";
import { Request, Response, NextFunction } from "express";

export class UserController {
  private userService: IUserService;
  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.userService.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async post(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userDto: UserPostRecord = req.body;
    try {
      await this.userService.post(userDto);
      res.status(201).json({ message: "User created" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const userId = Number(req.params.id);
    try {
      const user = await this.userService.getById(userId);
      res.json(user);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userId = Number(req.params.id);
    const userDto: UserPostRecord = req.body;
    try {
      const userUpdated: UserUpdatedRecord = await this.userService.update(
        userId,
        userDto,
      );
      res.json(userUpdated).status(200);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userId = Number(req.params.id);
    try {
      await this.userService.delete(userId);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      const appError = new AppError(`User ${userId} not found`, 404);
      next(appError);
    }
  }
}
