"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { AiFillGithub } from "react-icons/ai";
import { VscError } from "react-icons/vsc";

import Link from "next/link";
import axios from "axios";

function noHome() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();




  async function entrar() {
    const { data } = await axios.get('http://localhost:3000/api/user')
    if (email.trim() === data[0].correo_usuario || email.trim() === data[1].correo_usuario) {//<--- aqui va una consulta a la base de datos jiji
      router.push("/productos");
    } else if (email.trim() === "") {
      setError("Por favor ingresar un Correo electronico");
    } else {
      setError(
        "El corre ingresado no es valido por favor verifique y intente de nuevo "
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      entrar();
    }
  };

  return (
    <div className="flex min-h-screen flex-col  justify-center items-center ">
      <div className="justify-center items-center w-full max-w-xs p-8 mb-10 bg-[#212121] rounded-xl  ">
        <form onSubmit={entrar}>
          <p className="text-Text pb-1 font-bold text-xl">Email</p>
          <input
            type="text"
            className="mb-5 text-sm rounded-lg   block w-full p-2.5 bg-[#191919]  text-white"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />
          <div className="text-center">
            <a
              className="  text-Text pl-10 pr-10 pt-2 pb-2 bg-[#191919] rounded-lg cursor-pointer"
              onClick={entrar}
            >
              Entrar
            </a>
          </div>
        </form>
      </div>

      {error && (
        <div className=" justify-center">
          <div
            className="mt-4 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <VscError
                  size={25}
                  className="fill-current h-6 w-6 text-red-500 mr-4"
                />
              </div>
              <div>
                <p className="font-bold">Entrada invalida</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
