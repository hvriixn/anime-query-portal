import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { AnimeCard } from "@/components/AnimeCard";
import { AnimeDetail } from "@/components/AnimeDetail";
import { AnimeData } from "@/types/anime";

const sampleAnime: AnimeData[] = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop",
    type: "anime",
    status: "Completed",
    rating: 9.2,
    releaseYear: 2013,
    description: "In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, giant humanoid creatures who devour humans seemingly without reason.",
    characters: [
      { name: "Eren Yeager", role: "Protagonist", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&auto=format&fit=crop" },
      { name: "Mikasa Ackerman", role: "Main Character", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&auto=format&fit=crop" },
      { name: "Armin Arlert", role: "Main Character", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&auto=format&fit=crop" },
      { name: "Levi Ackerman", role: "Supporting", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&auto=format&fit=crop" },
      { name: "Erwin Smith", role: "Supporting", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&auto=format&fit=crop" },
      { name: "Historia Reiss", role: "Supporting", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&auto=format&fit=crop" }
    ]
  },
  {
    id: 2,
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&auto=format&fit=crop",
    type: "manga",
    status: "Ongoing",
    rating: 9.5,
    releaseYear: 1999,
    description: "Follow Monkey D. Luffy and his pirate crew in their search for the ultimate treasure, the One Piece.",
    characters: [
      { name: "Monkey D. Luffy", role: "Protagonist", image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=200&auto=format&fit=crop" },
      { name: "Roronoa Zoro", role: "Main Character", image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=200&auto=format&fit=crop" },
      { name: "Nami", role: "Main Character", image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=200&auto=format&fit=crop" },
      { name: "Sanji", role: "Main Character", image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=200&auto=format&fit=crop" },
      { name: "Usopp", role: "Main Character", image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=200&auto=format&fit=crop" },
      { name: "Nico Robin", role: "Main Character", image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=200&auto=format&fit=crop" }
    ]
  },
  {
    id: 3,
    title: "Demon Slayer",
    image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=800&auto=format&fit=crop",
    type: "anime",
    status: "Completed",
    rating: 9.0,
    releaseYear: 2019,
    description: "A young man's journey to become a demon slayer after his family is slaughtered and his sister turned into a demon.",
    characters: [
      { name: "Tanjiro Kamado", role: "Protagonist", image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=200&auto=format&fit=crop" },
      { name: "Nezuko Kamado", role: "Main Character", image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=200&auto=format&fit=crop" },
      { name: "Zenitsu Agatsuma", role: "Main Character", image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=200&auto=format&fit=crop" },
      { name: "Inosuke Hashibira", role: "Main Character", image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=200&auto=format&fit=crop" },
      { name: "Giyu Tomioka", role: "Supporting", image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=200&auto=format&fit=crop" }
    ]
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=800&auto=format&fit=crop",
    type: "manga",
    status: "Ongoing",
    rating: 9.1,
    releaseYear: 2018,
    description: "A high school student joins a secret organization of Jujutsu Sorcerers to fight against powerful Curses.",
    characters: [
      { name: "Yuji Itadori", role: "Protagonist", image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=200&auto=format&fit=crop" },
      { name: "Megumi Fushiguro", role: "Main Character", image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=200&auto=format&fit=crop" },
      { name: "Nobara Kugisaki", role: "Main Character", image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=200&auto=format&fit=crop" },
      { name: "Satoru Gojo", role: "Supporting", image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=200&auto=format&fit=crop" },
      { name: "Ryomen Sukuna", role: "Antagonist", image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=200&auto=format&fit=crop" }
    ]
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAnime, setSelectedAnime] = useState<AnimeData | null>(null);

  const filteredAnime = sampleAnime.filter((anime) => {
    const titleMatch = anime.title.toLowerCase().includes(searchQuery.toLowerCase());
    const characterMatch = anime.characters.some(character => 
      character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      character.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return titleMatch || characterMatch;
  });

  return (
    <div className="min-h-screen bg-black">
      <div className="container py-8 px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Anime Explorer
          </h1>
          <p className="text-gray-400 mb-8">
            Search anime, manga, and characters
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {selectedAnime ? (
          <div className="mb-8">
            <button
              onClick={() => setSelectedAnime(null)}
              className="text-white mb-4 hover:text-gray-300 transition-colors"
            >
              ← Back to list
            </button>
            <AnimeDetail anime={selectedAnime} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnime.map((anime) => (
              <div key={anime.id} onClick={() => setSelectedAnime(anime)}>
                <AnimeCard {...anime} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;