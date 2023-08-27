"use client";
import { AiOutlineShop } from "react-icons/ai";
import { PiFolderUserFill } from "react-icons/pi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useState } from "react";

import Link from "next/link";

import Boton from "./Boton";
import { Modal } from "./Modal";

const link = [
  {
    name: "Home",
    route: "/home ",
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
  const [modal_Open, setModal_Open] = useState(false);
  
  return (
    <nav className={`${className}`}>
      <div className="flex h-[90vh] w-64 bg-[#202020] m-10 rounded-3xl">
        <div className="flex mt-20 w-full h-20 justify-center  items-center">
          <p className="text-center text-3xl">ADMI</p>
        </div>

        <div className="absolute mt-40 w-64 h-20 ">
          <Boton
            close={modal_Open}
            onClick={() => setModal_Open(true)}
          >
            + Nueva factura
          </Boton>
        </div>
        {modal_Open  && <Modal  setModal_Open={setModal_Open} />}

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
