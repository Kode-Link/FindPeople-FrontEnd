import { Heart } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center font-bold text-xl gap-2">
      <Heart className="h-11 text-blue-600" />
      <h1 className="text-gray-700">Encontre.me</h1>
    </div>
  );
};
