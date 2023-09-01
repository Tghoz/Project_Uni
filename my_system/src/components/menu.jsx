import { AiOutlineShop } from "react-icons/ai";
import { PiFolderUserFill } from "react-icons/pi";
import { AiOutlineFolderOpen } from "react-icons/ai";

import Link from "next/link";

const link = [
  {
    name: "productos",
    route: "/productos ",
    icon: <AiOutlineShop size={26} className="cursor-pointer" />,
  },
  {
    name: "clientes",
    route: "/clientes",
    icon: <PiFolderUserFill size={26} className="cursor-pointer" />,
  },
  {
    name: "facturas",
    route: "/facturas",
    icon: <AiOutlineFolderOpen size={26} className="cursor-pointer" />,
  },
];

export default function Menu({ className }) {
  return (
    <nav className={`${className}`}>
      <div className="flex h-[90vh] w-64 bg-[#202020] m-10 rounded-3xl">
        <div className="flex mt-20 w-full h-20 justify-center  items-center">
          <p className="text-center text-3xl">ADMI</p>
        </div>
        <Link
          className="fixed mt-48 ml-10  w-44 h-11  bg-black  font-semibold py-2  rounded-br-lg rounded-bl-lg rounded-tr-lg   hover:bg-[#181818]"
          href={"crear-factura"}
        >
          <span className="flex justify-center ">+ Nueva Factura</span>
        </Link>
        <ul className="absolute mt-60">
          {link.map(({ name, route, icon }) => (
            <li
              className=" m-10  capitalize   text-left text-xl hover:underline decoration-double "
              key={route}
            >
              <Link
                className="flex gap-3 focus:underline decoration-double "
                href={route}
              >
                {icon} {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
