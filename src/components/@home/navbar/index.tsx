import { Logo } from "@/components/logo";

export const Navbar = () => {
  return (
    <header className="flex w-full h-16 px-4 border-b items-center justify-between bg-white">
      <div className="flex items-center gap-3">
        <Logo />
      </div>

      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Avatar"
          className="w-10 h-10 border rounded-full object-cover"
        />
        <div className="hidden sm:flex flex-col leading-tight">
          <h1 className="text-sm font-semibold">Jairo Domingos</h1>
          <span className="text-xs text-gray-400">Entidade Policial</span>
        </div>
      </div>
    </header>
  );
};
