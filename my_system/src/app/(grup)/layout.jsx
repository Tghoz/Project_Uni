import Menu from "@/components/Menu";

export const metadata = {
  title: "system",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <div className="relative">
        <Menu className="fixed" />
      </div>
      <div className="ml-80 w-full">{children}</div>
    </div>
  )
}