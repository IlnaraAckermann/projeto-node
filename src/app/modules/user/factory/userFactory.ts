import { UserController } from "../controllers/UserController";
import { UserPrismaRepository } from "../repository/UserPrismaRepository";
import { UserService } from "../services/UserService";

const userRepository = new UserPrismaRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController };
