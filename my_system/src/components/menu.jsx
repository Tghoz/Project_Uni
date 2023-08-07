import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";


export default function Menu() {

    const link = [
        {
          label: "Home",
          route: "/home ",
        },
      ];

  return (
    <nav className=" bg-[#202020] min-h-screen w-72">
        <div className="py-3 flex justify-end">
            <HiMenuAlt1 size={50} className="cursor-pointer m-2" />
        </div>
            <ul>
              {link.map(({ label, route }) => (
                <li key={route}>
                <Link href={route}>{label}</Link>
                </li>
                ))}
            </ul>
    </nav>
  )
}
