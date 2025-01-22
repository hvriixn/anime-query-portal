import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        className="w-full pl-10 bg-gray-900 border-gray-700 text-white focus:border-gray-500"
        placeholder="Search for anime, manga, or characters..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};