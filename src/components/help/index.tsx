import {
  Eye,
  Plus,
  Share2,
  Smartphone,
} from "lucide-react";
import { Button } from "../ui/button";

export const Help = () => {
  return (
    <section className="bg-green-50 -mt-8 h-full p-8 w-full flex flex-col">
      <h2 className="text-lg font-semibold my-6 text-gray-800 text-center">
        Como Você Pode Ajudar
      </h2>
      <p className="text-gray-600 text-center text-sm my-2">
        Seja parte desta roda de solidariedade. Cada ação conta na busca por
        pessoas desaparecidas.
      </p>

      <div className="flex my-6 justify-around m-auto gap-3 w-full">
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center w-full">
          
          <div className="bg-blue-100 rounded-full p-2 size-11 flex m-auto justify-center">
          <Plus className="h-6 w-6 text-blue-600 mb-5" />
          </div>
          <span className="font-bold mb-2 my-2">Cadastrar Caso</span>
          <span className="text-gray-800 text-sm mb-4 text-center">Registre informações de pessoas <br /> desaparecidas</span>
          <Button className="text-xs bg-gray-100 hover:bg-gray-100 hover:scale-105 transition-all w-full text-black text-center">
            Cadastrar
          </Button>
        </div>

        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center w-full">
         <div className="bg-green-100 rounded-full p-2 size-11 flex m-auto justify-center">
          <Eye className="h-6 w-6 text-green-400 mb-5" />
         </div>
          <span className="font-bold  mb-2 my-2">Relatar Avistamento</span>
          <span className="text-gray-800 text-sm mb-4 text-center">
            Informe sobre possíveis avistamentos
          </span>
          <Button className="text-xs bg-gray-100 hover:bg-gray-100 hover:scale-105 transition-all w-full text-black text-center">
            Relatar
          </Button>
        </div>

        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center w-full">
          <div className="bg-yellow-100 rounded-full p-2 size-11 flex m-auto justify-center">
          <Smartphone className="h-6 w-6 text-yellow-400 mb-5" />
          </div>
          <span className="font-bold mb-2 my-2">Baixar App</span>
          <span className="text-gray-800 text-sm mb-4 text-center">
            Receba notificações em tempo real
          </span>
          <Button className="text-xs bg-gray-100 hover:bg-gray-100 hover:scale-105 transition-all w-full text-black text-center">
            Download
          </Button>
        </div>
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center w-full">
          <div className="bg-gray-100 rounded-full p-2 size-11 flex m-auto justify-center">
            <Share2 className="h-6 w-6 mb-5" />
          </div>
          <span className="font-bold mb-2 my-2">Compartilhar</span>
          <span className="text-gray-800 text-sm mb-4 text-center">
            Divulgue casos nas redes sociais
          </span>
          <Button className="text-xs bg-gray-100 hover:bg-gray-100 hover:scale-105 transition-all w-full text-black text-center">
            Compartilhar
          </Button>
        </div>
      </div>
    </section>
  );
};
