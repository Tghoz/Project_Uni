import { HiMenuAlt1 } from "react-icons/hi";

import Link from "next/link";
import Modal from "./Modal";

const link = [
  {
    name: "Home",
    route: "/home ",
  },
];

export default function Menu({ className }) {
  return (
    <nav className={`${className}`}>
      <div className="flex h-[90vh] w-72 bg-[#202020] m-10 rounded-3xl">
        <div className="flex mt-20 w-full h-20 justify-center  items-center">
          <p className="text-center text-3xl">ADMI</p>
        </div>

        <ul className="absolute mt-48">
          {link.map(({ name, route }) => (
            <li key={route}>
              <Link href={route}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
