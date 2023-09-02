import React from "react";

export default function page() {
  return (
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4  px-12">
        <div class="flex justify-between">
          <div class="inline-flex  rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <h1 class="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px  border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs  font-thin">
                <span className="text-3xl">Historial de Clientes</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="align-middle   rounded-lg  inline-block min-w-full shadow overflow-hidden bg-[#202020] shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4  tracking-wider">
                Cedula
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4  tracking-wider">
                Nombre 
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4  tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4  tracking-wider">
                Telefono
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4  tracking-wider">
                Direccion
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4  tracking-wider">
                Dia Agregado
              </th>
            </tr>
          </thead>
          <tbody class="bg-[#202020]">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm leading-5 ">27797609</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div class="text-sm leading-5 "> Yovanny Travieso</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5">
                govannytgoz@gmail.com
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5">
                04122288105
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5">
                  <span class="relative text-xs">caricuao</span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 -900 text-sm leading-5">
                septiembre 2023
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
