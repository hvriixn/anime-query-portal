import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnimeCardProps {
  title: string;
  image: string;
  type: "anime" | "manga";
  status: string;
  rating?: number;
}

export const AnimeCard = ({ title, image, type, status, rating }: AnimeCardProps) => {
  return (
    <Card className="overflow-hidden bg-card hover:animate-card-hover transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
        />
        <Badge
          className="absolute top-2 right-2 bg-primary/80 hover:bg-primary"
          variant="secondary"
        >
          {type.toUpperCase()}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="capitalize">
            {status}
          </Badge>
          {rating && (
            <span className="text-sm text-yellow-400">★ {rating.toFixed(1)}</span>
          )}
        </div>
      </div>
    </Card>
  );
};