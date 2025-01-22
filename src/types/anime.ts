export interface Character {
  name: string;
  role: string;
  image?: string;
}

export interface AnimeData {
  id: number;
  title: string;
  image: string;
  type: "anime" | "manga";
  status: string;
  rating?: number;
  characters: Character[];
  description: string;
  releaseYear: number;
}