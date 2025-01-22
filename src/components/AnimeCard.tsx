import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimeData } from "@/types/anime";

type AnimeCardProps = Omit<AnimeData, 'description' | 'characters' | 'releaseYear'>;

export const AnimeCard = ({ title, image, type, status, rating }: AnimeCardProps) => {
  return (
    <Card className="overflow-hidden bg-gray-900 hover:animate-card-hover transition-all duration-300 cursor-pointer border-gray-800">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
        />
        <Badge
          className="absolute top-2 right-2 bg-black/80 hover:bg-black text-white"
          variant="secondary"
        >
          {type.toUpperCase()}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-2 text-white">{title}</h3>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="capitalize text-gray-300 border-gray-700">
            {status}
          </Badge>
          {rating && (
            <span className="text-sm text-gray-300">★ {rating.toFixed(1)}</span>
          )}
        </div>
      </div>
    </Card>
  );
};