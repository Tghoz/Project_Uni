import { AiFillGithub } from "react-icons/ai";


import Link from "next/link";

function noHome() {
  return (
    <div className="flex min-h-screen justify-center items-center ">
      <div className="justify-center items-center w-full max-w-xs p-8 mb-44 bg-[#212121]  rounded-xl">
        <form action="">
          <p className="text-Text pb-1 font-bold text-xl">Email</p>
          <input
            
            type="text"
            className="mb-5 text-sm rounded-lg   block w-full p-2.5 bg-[#191919]  text-white"
            placeholder="Email"
            required
          />
          <div className="text-center">
            <button className="text-Text pl-10 pr-10 pt-2 pb-2 bg-[#191919] rounded-lg">
              Entrar
            </button>
          </div>
        </form>
      </div>

      


      
      <footer className=" absolute w-full bottom-0 bg-[#202020] p-3">
        <div className="flex gap-5">
          <Link href="https://github.com/Tghoz" target="_blank">
            <AiFillGithub size={35} />
          </Link>
        </div>


      </footer>
    </div>
  );
}
export default noHome;
