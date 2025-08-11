import { ArrowDownUp, MapPin, Timer, Users } from "lucide-react";

export const Statistics = () => {
  return (
    <section className="bg-gray-100 my-8 p-8 w-full flex flex-col">
      <h2 className="text-lg font-semibold text-center text-gray-800">
        Estatísticas da Plataforma
      </h2>
      <p className="text-gray-600 text-center text-sm my-2">
        Dados em tempo real sobre o impacto da nossa rede colaborativa na
        localização de pessoas <br /> desaparecidas em todo o país.
      </p>
      <div className="flex my-6 justify-around m-auto gap-3 w-full">
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center w-full">
          <Users className="h-6 w-6 text-yellow-300 mb-5" />
          <span className="text-2xl font-bold">127</span>
          <span className="text-gray-800">Casos Activos</span>
          <p className="text-xs  text-gray-400 text-center">
            Pessoas atualmente desaparecidas
          </p>
        </div>

        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center w-full">
          <ArrowDownUp className="h-6 w-6 text-green-500 mb-5" />
          <span className="text-2xl font-bold">1,234</span>
          <span className="text-gray-800">Casos Resolvidos</span>
          <p className="text-xs text-gray-400 text-center">
            Pessoas encontradas com sucesso
          </p>
        </div>

        <div className="flex flex-col border border-gray-200 bg-white p-8 rounded-md items-center w-full">
          <MapPin className="h-6 w-6 text-blue-600 mb-5" />
          <span className="text-2xl font-bold">156</span>
          <span className="text-gray-800">Cidades Cobertas</span>
          <p className="text-xs text-gray-400 text-center">
            Municípios com casos cadastrados
          </p>
        </div>

        <div className="flex flex-col border border-gray-200 bg-white p-8 rounded-md items-center w-full">
          <Timer className="h-6 w-6 text-green-500 mb-5" />
          <span className="text-2xl font-bold">72h</span>
          <span className="text-gray-800">Tempo Médio</span>
          <p className="text-xs text-gray-400 text-center">
            Para resolução de casos
          </p>
        </div>
      </div>
    </section>
  );
};
