import { Request, Response } from "express";
import { IProfileService } from "../services/IProfileService";
import { ProfilePostRecord } from "../models/ProfilePostRecord";
import { ProfileUpdateRecord } from "../models/ProfileUpdateRecord";
import { ProfileGetRecord } from "../models/ProfileGetRecord";

export class ProfileController {
  private profileService: IProfileService;
  constructor(profileService: IProfileService) {
    this.profileService = profileService;
  }
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const profiles = await this.profileService.getAll();
      res.json(profiles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async post(req: Request, res: Response): Promise<void> {
    const profileDto: ProfilePostRecord = req.body;
    try {
      await this.profileService.post(profileDto);
      res.status(201).json({ message: "Profile created" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
      const profile = await this.profileService.getById(id);
      if (profile) {
        res.json(profile);
      } else {
        res.status(404).json({ error: "Profile not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async update(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const profileDto: ProfileUpdateRecord = req.body;
    try {
      const profileUpdated: ProfileGetRecord = await this.profileService.update(
        id,
        profileDto,
      );
      res.send(profileUpdated).status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
      await this.profileService.delete(id);
      res.json({ message: "Profile deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
