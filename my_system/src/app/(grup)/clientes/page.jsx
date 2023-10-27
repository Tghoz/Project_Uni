"use client";
import { useEffect, useState } from "react";
import { fetch } from "../../../../service/fetch";


export default function Cliente() {

  const [cliente, setCliente] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const res = await fetch({ url: "http://localhost:3000/api/cliente" });
      if (res) setCliente(res);

      setLoading(false)
    })();
  }, []);

  console.log(cliente)
  return (

    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4  px-12">
        <div className="flex justify-between">
          <div className="inline-flex  rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <h1 className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px  border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs  font-thin">
                <span className="text-3xl">Historial de Clientes</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle   rounded-lg  inline-block min-w-full shadow overflow-hidden bg-[#202020] shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        
        {loading ? "Cargando...": (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4  tracking-wider">
                  <div className="text-sm leading-5 ">Cedula</div>
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4  tracking-wider">
                  <div className="text-sm leading-5 ">Nombre</div>
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4  tracking-wider">
                  <div className="text-sm leading-5 ">Email</div>
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4  tracking-wider">
                  <div className="text-sm leading-5 ">Telefono</div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#202020]">



              <>
                {cliente.length !== 0 && (
                  <>
                    {cliente.map(({ id_cedula, nombre, email, telefono }) => (
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div className="text-sm leading-5 ">{id_cedula}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div className="text-sm leading-5 "> {nombre}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5">
                          <div className="text-sm leading-5 ">{email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5">
                          <div className="text-sm leading-5 ">{telefono}</div>
                        </td>
                      </tr>
                    ))}
                  </>
                )}

                {cliente.length === 0 && "no hay "}
              </>
            </tbody>
          </table>
        )}




      </div>
    </div>


  );
}
