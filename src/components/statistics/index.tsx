import { ArrowDownUp, MapPin, Timer, Users } from "lucide-react";

export const Statistics = () => {
  return (
    <section className="bg-gray-100 px-4 p-20 w-full">
      <h2 className="text-lg md:text-xl font-semibold text-center text-gray-800">
        Estatísticas da Plataforma
      </h2>
      <p className="text-gray-600 text-center text-sm md:text-base my-2">
        Dados em tempo real sobre o impacto da nossa rede colaborativa na
        localização de pessoas <br className="hidden sm:block" /> desaparecidas
        em todo o país.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Card 1 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center text-center">
          <Users className="h-6 w-6 text-yellow-300 mb-5" />
          <span className="text-2xl font-bold">127</span>
          <span className="text-gray-800 font-bold">Casos Activos</span>
          <p className="text-xs text-gray-400">
            Pessoas atualmente desaparecidas
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center text-center">
          <ArrowDownUp className="h-6 w-6 text-green-500 mb-5" />
          <span className="text-2xl font-bold">1,234</span>
          <span className="text-gray-800 font-bold">Casos Resolvidos</span>
          <p className="text-xs text-gray-400">
            Pessoas encontradas com sucesso
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center text-center">
          <MapPin className="h-6 w-6 text-blue-600 mb-5" />
          <span className="text-2xl font-bold">156</span>
          <span className="text-gray-800 font-bold">Cidades Cobertas</span>
          <p className="text-xs text-gray-400">
            Municípios com casos cadastrados
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-md items-center text-center">
          <Timer className="h-6 w-6 text-green-500 mb-5" />
          <span className="text-2xl font-bold">72h</span>
          <span className="text-gray-800 font-bold">Tempo Médio</span>
          <p className="text-xs text-gray-400">Para resolução de casos</p>
        </div>
      </div>
    </section>
  );
};
