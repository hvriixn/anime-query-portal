import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { AnimeCard } from "@/components/AnimeCard";

// Sample data - in a real app, this would come from an API
const sampleAnime = [
  {
    id: 1,
    title: "Demon Slayer",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop",
    type: "anime" as const,
    status: "airing",
    rating: 9.2,
  },
  {
    id: 2,
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&auto=format&fit=crop",
    type: "manga" as const,
    status: "ongoing",
    rating: 9.5,
  },
  {
    id: 3,
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&auto=format&fit=crop",
    type: "anime" as const,
    status: "completed",
    rating: 9.0,
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop",
    type: "manga" as const,
    status: "ongoing",
    rating: 8.9,
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAnime = sampleAnime.filter((anime) =>
    anime.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="container py-8 px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Anime Explorer
          </h1>
          <p className="text-gray-400 mb-8">
            Discover your next favorite anime or manga
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;