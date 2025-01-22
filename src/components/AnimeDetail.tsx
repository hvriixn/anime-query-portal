import { AnimeData } from "@/types/anime";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AnimeDetailProps {
  anime: AnimeData;
}

export const AnimeDetail = ({ anime }: AnimeDetailProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="aspect-[3/4] relative">
          <img
            src={anime.image}
            alt={anime.title}
            className="rounded-lg object-cover w-full h-full"
          />
          <Badge
            className="absolute top-2 right-2 bg-black/80 hover:bg-black"
            variant="secondary"
          >
            {anime.type.toUpperCase()}
          </Badge>
        </div>
        
        <div className="md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{anime.title}</h1>
            {anime.rating && (
              <span className="text-xl text-gray-300">★ {anime.rating.toFixed(1)}</span>
            )}
          </div>
          
          <div className="mb-6">
            <Badge variant="outline" className="mr-2 text-gray-300 border-gray-700">
              {anime.status}
            </Badge>
            <Badge variant="outline" className="text-gray-300 border-gray-700">
              {anime.releaseYear}
            </Badge>
          </div>
          
          <p className="text-gray-300 mb-8">{anime.description}</p>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Main Characters</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {anime.characters.map((character, index) => (
                <Card key={index} className="bg-gray-800 p-4 border-gray-700">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={character.image} alt={character.name} />
                      <AvatarFallback className="bg-gray-700">
                        {character.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{character.name}</h3>
                      <p className="text-sm text-gray-400">{character.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};