import "./globals.css";
import { Inter } from "next/font/google";
import Menu from "../components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className =  "flex gap-6">
          <Menu></Menu>
          <div className="m-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
