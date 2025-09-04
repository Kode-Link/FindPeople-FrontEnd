import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <Heart className="size-9 text-blue-600 flex m-auto" />
        <h1 className="font-bold text-2xl text-center text-gray-800">
          Crie sua conta
        </h1>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Preencha o formulário para começar
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            type="text"
            placeholder="Nome"
            className="border-gray-300 focus:border-blue-500"
            required
          />

          <Input
            type="email"
            placeholder="Email"
            className="border-gray-300 focus:border-blue-500"
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            className="border-gray-300 focus:border-blue-500"
            required
          />

          <Input
            type="password"
            placeholder="Confirme a Senha"
            className="border-gray-300 focus:border-blue-500"
            required
          />

          <Button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Já tem uma conta?{" "}
          <Link to="/auth/login" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};
