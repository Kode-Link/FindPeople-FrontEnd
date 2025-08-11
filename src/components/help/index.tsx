import { Eye, Plus, Share2, Smartphone } from "lucide-react";
import { Button } from "../ui/button";

export const Help = () => {
  return (
    <section className="bg-green-50 -mt-8 h-full my-5 px-4 py-8 w-full">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
        Como Você Pode Ajudar
      </h2>
      <p className="text-gray-600 text-center text-sm md:text-base">
        Seja parte desta roda de solidariedade. Cada ação conta na busca por
        pessoas desaparecidas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Card 1 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center text-center">
          <div className="bg-blue-100 rounded-full p-2 size-11 flex justify-center items-center mb-4">
            <Plus className="h-6 w-6 text-blue-600" />
          </div>
          <span className="font-bold mb-2">Cadastrar Caso</span>
          <span className="text-gray-800 text-sm mb-4">
            Registre informações de pessoas desaparecidas
          </span>
          <Button className="text-xs bg-gray-100 hover:scale-105 transition-all w-full text-black">
            Cadastrar
          </Button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center text-center">
          <div className="bg-green-100 rounded-full p-2 size-11 flex justify-center items-center mb-4">
            <Eye className="h-6 w-6 text-green-400" />
          </div>
          <span className="font-bold mb-2">Relatar Avistamento</span>
          <span className="text-gray-800 text-sm mb-4">
            Informe sobre possíveis avistamentos
          </span>
          <Button className="text-xs bg-gray-100 hover:scale-105 transition-all w-full text-black">
            Relatar
          </Button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center text-center">
          <div className="bg-yellow-100 rounded-full p-2 size-11 flex justify-center items-center mb-4">
            <Smartphone className="h-6 w-6 text-yellow-400" />
          </div>
          <span className="font-bold mb-2">Baixar App</span>
          <span className="text-gray-800 text-sm mb-4">
            Receba notificações em tempo real
          </span>
          <Button className="text-xs bg-gray-100 hover:scale-105 transition-all w-full text-black">
            Download
          </Button>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center text-center">
          <div className="bg-gray-100 rounded-full p-2 size-11 flex justify-center items-center mb-4">
            <Share2 className="h-6 w-6" />
          </div>
          <span className="font-bold mb-2">Compartilhar</span>
          <span className="text-gray-800 text-sm mb-4">
            Divulgue casos nas redes sociais
          </span>
          <Button className="text-xs bg-gray-100 hover:scale-105 transition-all w-full text-black">
            Compartilhar
          </Button>
        </div>
      </div>
    </section>
  );
};
