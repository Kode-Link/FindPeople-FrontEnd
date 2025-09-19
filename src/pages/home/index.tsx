export const Home = () => {
  return (
    <section className="h-screen w-full p-4 -mt-52 flex items-center m-auto justify-center">
      <article className="grid lg:grid-cols-4 w-full md:grid-cols-3 sm:grid-cols-2 justify-between py-2 px-3 gap-2 m-auto items-center">
        <div className="border border-[#2563EB] p-5 rounded-lg w-full">
          <h2 className="-mt-2 mb-2 text-sm font-semibold">Casos Ativos</h2>
          <h1 className="font-bold text-2xl mb-1">127</h1>
          <span className="text-[#000000] text-xs">+12 Semanas</span>
          <hr className="border-2 border-[#2563EB] mt-2 w-[75%]" />
        </div>

        <div className="border border-[#B032E7] p-5 rounded-lg w-full">
          <h2 className="-mt-2 text-sm font-semibold">Avistamentos</h2>
          <h1 className="font-bold text-2xl mb-1">342</h1>
          <span className="text-[#000000] text-xs">+28 Hoje</span>
          <hr className="border-2 border-[#B032E7] mt-2 w-[75%]" />
        </div>

        <div className="border border-[#4CAF50] p-5 rounded-lg w-full">
          <h2 className="-mt-2 text-sm font-semibold">Pessoas Encontradas</h2>
          <h1 className="font-bold text-2xl mb-1">89</h1>
          <span className="text-[#000000] text-xs">+7 este mês</span>
          <hr className="border-2 border-[#4CAF50] mt-2 w-[75%]" />
        </div>

        <div className="border border-[#FC4850] p-5 rounded-lg w-full">
          <h2 className="-mt-2 text-sm font-semibold">Casos Urgentes</h2>
          <h1 className="font-bold text-2xl mb-1">15</h1>
          <span className="text-[#000000] text-xs">
            Requer atenção imediata
          </span>
          <hr className="border-2 border-[#FC4850] mt-2 w-[75%]" />
        </div>
      </article>
    </section>
  );
};
