import  Menu  from "@/components/Menu";

export const metadata = {
  title: "system",
};

export default function RootLayout({ children }) {
  return (  
    <div className="flex gap-10 p-10 min-h-screen " >
      <Menu/>
    <div className="m-3">{children}</div>
  </div>
  );
}
