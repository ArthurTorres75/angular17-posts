export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  imageUrl?: string;
  likes?: number;
  created_at?: Date;
}
