export interface PostGetRecord {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number;
}
