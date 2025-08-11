import { Search, User, Menu } from "lucide-react";
import { Logo } from "../logo";
import { InputWithIcon } from "../input-icon";
import { ShinyButton } from "../magicui/shiny-button";
import { useState } from "react";

const MenuItems = [
  { label: "Mapa", path: "/maps" },
  { label: "Casos Recentes", path: "/recent-case" },
  { label: "Como Ajudar", path: "/help" },
  { label: "Estatísticas", path: "/statistics" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 w-full flex flex-wrap justify-around items-center bg-white shadow-md">
      {/* Logo e botão de menu (mobile) */}
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Logo />
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Menu e barra de busca */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row lg:items-center justify-between w-full max-w-6xl mt-4 lg:mt-0`}
      >
        {/* Links de menu */}
        <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
          {MenuItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Área de busca e botões */}
        <div className="flex flex-col lg:flex-row items-center gap-3 mt-4 lg:mt-0">
          {/* Campo de busca */}
          <div className="w-full lg:w-auto">
            <InputWithIcon
              icon={<Search className="h-5 text-gray-700" />}
              placeholder="Buscar"
              className="border p-1 rounded-md border-gray-300 w-full"
              type="text"
            />
          </div>

          {/* Botão para cadastrar caso */}
          <ShinyButton className="bg-blue-600 text-white px-4 py-2 rounded-md w-full lg:w-auto">
            + Cadastrar Caso
          </ShinyButton>

          {/* Ícone de usuário */}
          <div className="flex cursor-pointer items-center border border-gray-300 rounded-md p-2">
            <User className="h-5 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
};
