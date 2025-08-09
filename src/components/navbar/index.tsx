import { Search, User } from "lucide-react";
import { Logo } from "../logo";
import { InputWithIcon } from "../input-icon";
import { ShinyButton } from "../magicui/shiny-button";

const MenuItems = [
  { label: "Mapa", path: "/maps" },
  { label: "Casos Recentes", path: "/recent-case" },
  { label: "Como Ajudar", path: "/help" },
  { label: "Estatísticas", path: "/statistics" },
];

export const Navbar = () => {
  return (
    <nav className="p-4 w-full flex justify-around items-center bg-white shadow-md">
      {/* Logo */}
      <Logo />

      {/* Links de menu */}
      <div className="flex items-center justify-between w-full max-w-4xl">
        <ul className="flex space-x-4 mt-2">
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

        {/* Área de busca, botão e perfil */}
        <div className="flex justify-center gap-3 items-center">
          {/* Campo de busca */}
          <div className="max-w-sm mx-auto">
            <InputWithIcon
              icon={<Search className="h-5 text-gray-700" />}
              placeholder="Buscar"
              className="border p-1 rounded-md border-gray-300"
              type="text"
            />
          </div>

          {/* Botão para cadastrar caso */}
          <ShinyButton className="bg-blue-600 text-white px-4 py-2 rounded-md">
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
