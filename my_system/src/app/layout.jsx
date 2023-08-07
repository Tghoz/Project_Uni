import "./globals.css";
import { Inter } from "next/font/google";

import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "system",
};

const link = [
  {
    label: "Home",
    route: "/home ",
  },

];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-6">
          <nav className="bg-[#202020] min-h-screen w-72 ">
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
          <div className="m-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
