import { PostGetRecord } from "@modules/post/models/PostGetRecord";
import { ProfileGetRecord } from "@modules/profile/models/ProfileGetRecord";
export interface UserGetRecord {
  id: number;
  email: string;
  name: string | null;
  posts: PostGetRecord[];
  profile: ProfileGetRecord | null;
}
