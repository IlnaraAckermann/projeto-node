import { ProfileController } from "../controllers/ProfileController";
import { ProfilePrismaRepository } from "../repository/ProfilePrismaRepository";
import { ProfileService } from "../services/ProfileService";

const profileRepository = new ProfilePrismaRepository();
const profileService = new ProfileService(profileRepository);
const profilerController = new ProfileController(profileService);

export { profilerController };
