import { ferramentasItems, menuItems } from "@/lib/menu";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const url = useLocation();

  interface IItemsProps {
    key?: string;
    icon?: ReactNode | string;
    label: string;
  }

  return (
    <>
      <section className="border-r lg:w-56 overflow-y-hidden w-40 md:w-52 sm:w-44 xl:w-60  h-screen">
        {menuItems.map((i: IItemsProps) => (
          <nav key={i.key} className="mx-3 py-2 flex flex-col m-auto gap-2">
            <ul
              className={`
              ${
                url.pathname === `/${i.key}`
                  ? "bg-[#2563EB] text-white rounded-md cursor-pointer hover:scale-105 transition-all "
                  : "hover:scale-105 transition-all"
              }
            flex py-2 gap-2 px-2 transition-all cursor-pointer
            `}
            >
              <li>{i.icon}</li>
              <li className="text-sm ">
                <Link className="text-sm" to={`/${i.label}`}>
                  {i.label}
                </Link>
              </li>
            </ul>
          </nav>
        ))}
        <hr className="border-gray-300 w-[95%] m-auto text-center items-center mb-3" />
        <h1 className="text-sm mx-3 font-semibold">FERRAMENTAS AVANÇADAS</h1>
        {ferramentasItems.map((i: IItemsProps) => (
          <nav key={i.key} className="mx-3 py-2 flex ">
            <ul className="flex py-2 gap-2 text-center w-full">
              <li>{i.icon}</li>
              <li className="text-sm ">
                <Link className="text-gray-500 text-sm" to={`/${i.label}`}>
                  {i.label}
                </Link>
              </li>
            </ul>
          </nav>
        ))}
      </section>
    </>
  );
}
