import { PostController } from "../controllers/PostController";
import { PostPrismaRepository } from "../repository/PostPrismaRepository";
import { PostService } from "../services/PostService";

const postRepository = new PostPrismaRepository();
const postService = new PostService(postRepository);
const postController = new PostController(postService);

export { postController };
