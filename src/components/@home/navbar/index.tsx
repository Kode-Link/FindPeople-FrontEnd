import { Logo } from "@/components/logo";

export const Navbar = () => {
  return (
    <header className="flex w-full p-3 overflow-hidden border-b justify-between gap-4 items-center">
      <div className="flex justify-between gap-5">
        <Logo />
      </div>
      <div className="flex gap-3 items-center justify-center">
        <img src="/logo.png" className="size-10 border rounded-full" />
        <div className="flex flex-col ">
          <h1 className="text-sm font-semibold">Jairo Domingos</h1>
          <h3 className="text-xs font-normal text-gray-400">
            Entidade Policial
          </h3>
        </div>
      </div>
    </header>
  );
};
