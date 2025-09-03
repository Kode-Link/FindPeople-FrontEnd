import { Heart } from "lucide-react";

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <Heart className="size-11 text-blue-600 flex m-auto" />
        <h1 className="font-bold text-2xl text-center text-gray-800">
          Bem-vindo ao
        </h1>
        <h1 className="text-blue-600 font-bold text-2xl text-center">
          Encontra.me
        </h1>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Acesse sua conta para continuar
        </p>
      </div>
    </div>
  );
};
