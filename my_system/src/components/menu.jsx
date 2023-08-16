import { AiOutlineShop } from "react-icons/ai";
import { PiFolderUserFill } from "react-icons/pi";
import { AiOutlineFolderOpen } from "react-icons/ai";

import Link from "next/link";
import Modal from "./Modal";

const link = [
  {
    name: "Home",
    route: "/home ",
    icon: <AiOutlineShop size={26} className="cursor-pointer" />,
  },
  {
    name: "clientes",
    route: "/registro_cliente",
    icon: <PiFolderUserFill size={26} className="cursor-pointer" />,
  },
  {
    name: "facturas",
    route: "/registro_facturas",
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

        <div className="absolute mt-40 w-64 h-20 ">
          <Modal />
        </div>

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
