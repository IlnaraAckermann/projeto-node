export class Post {
  id?: number;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  title!: string;
  content?: string;
  published!: boolean;
  authorId!: number;
}
