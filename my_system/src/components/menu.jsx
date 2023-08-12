import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";

const link = [
  {
    label: "Home",
    route: "/home ",
  },
];

export default function Menu() {
  return (
    <nav className=" bg-[#202020]  w-80 rounded-3xl">
      <div className="py-3 flex justify-end">
        <HiMenuAlt1 size={50} className="cursor-pointer m-2" />
      </div>
      <div>
        <ul>
          {link.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
