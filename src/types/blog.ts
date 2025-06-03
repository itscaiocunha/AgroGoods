
export interface BlogPost {
  id: string;
  title: string;
  summary?: string;
  content: string;
  author: string;
  tags: string[];
  date: string;
}
