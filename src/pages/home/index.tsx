interface CardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  borderColor?: string;
}

export const Home = () => {
  return (
    <section className="h-screen w-full p-4 -mt-52 flex items-center m-auto justify-center">
      <article className="grid lg:grid-cols-4 w-full md:grid-cols-3 sm:grid-cols-2 justify-between py-2 px-3 gap-2 m-auto items-center">
        <StatCard
          title="Casos Ativos"
          value={127}
          subtitle="+12 Semanas"
          borderColor="#2563EB"
        />
        <StatCard
          title="Avistamentos"
          value={342}
          subtitle="+28 Hoje"
          borderColor="#B032E7"
        />
        <StatCard
          title="Pessoas Encontradas"
          value={89}
          subtitle="+7 este mês"
          borderColor="#4CAF50"
        />
        <StatCard
          title="Casos Urgentes"
          value={15}
          subtitle="Requer atenção imediata"
          borderColor="#FC4850"
        />
      </article>
    </section>
  );
};

const StatCard = ({ title, value, subtitle, borderColor }: CardProps) => (
  <div className={`border p-5 rounded-lg w-full `} style={{ borderColor }}>
    <h2 className="-mt-2 mb-2 text-sm font-semibold">{title}</h2>
    <h1 className="text-2xl font-bold mb-1">{value}</h1>
    <span className="text-xs text-black">{subtitle}</span>
    <hr className="border-2 w-[75%]" style={{ borderColor }} />
  </div>
);
