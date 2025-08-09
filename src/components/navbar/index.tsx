import { Search, User } from "lucide-react";
import { Logo } from "../logo";
import { InputWithIcon } from "../input-icon";
import { Button } from "../ui/button";

const MenuItems = [
  { label: "Mapa", path: "/maps" },
  { label: "Casos Recentes", path: "/recent-case" },
  { label: "Como Ajudar", path: "/help" },
  { label: "Estatísticas", path: "/statistics" },
];

export const Navbar = () => {
  return (
    <nav className="p-4 w-full flex justify-around items-center bg-white shadow-md">
      <Logo />
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

        <div className="flex justify-center gap-3 items-center">
            <div className="max-w-sm mx-auto">
          {/* <input
            placeholder="Buscar"
            className="border p-1 rounded-md border-gray-300"
            /> */}
          <InputWithIcon
            icon={<Search className="h-5 text-gray-700" />}
            placeholder="Buscar"
            className="border p-1 rounded-md border-gray-300"
            type="text"
            />
            </div>
          <Button className="bg-blue-600 w-full text-white p-1 rounded-md">
            + Cadastrar Caso
          </Button>

          <div className="flex items-center m-auto border border-gray-300 rounded-md p-2">
            <User className="h-5 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
};
