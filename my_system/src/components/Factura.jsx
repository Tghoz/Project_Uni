import { BsSave } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

export default function Factura() {
  const i = 0;

  return (
    <div className="  w-full h-full  ">
      <div className="text-center ">
        <h1 className="text-2xl">Factura</h1>
        <span> Factura No. {`${i}`} </span>
      </div>

      <div className="flex h-1  w-full bg-[#202020] my-3"></div>

      <div className=" mx-14   ">
        <div className=" absolute w-80 justify-start  bg-[#191919]  rounded-lg   pt-5 pb-5 ">
          <form action="">
            <div class="px-5 pb-5">
              <input
                placeholder="Cedula "
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base border-transparent rounded-lg"
              />
              <input
                placeholder="Nombre y Apellido"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base border-transparent rounded-lg"
              />
              <input
                placeholder="Correo"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg"
              />
              <input
                placeholder="Direccion"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg"
              />
              <input
                placeholder="Fecha"
                type="date"
                class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg"
              />
              <div class="flex">
                <div class="flex-grow w-1/4 pr-2">
                  <select
                    placeholder="CODE"
                    class="text-black placeholder-gray-600 w-full px-0 py-2.5 mt-2 text-base rounded-lg "
                  >
                    <option value="1">0412</option>
                    <option value="2">0414</option>
                    <option value="3">0424</option>
                  </select>
                </div>
                <div class="flex-grow">
                  <input
                    placeholder="Numero Telefonico"
                    class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base rounded-lg "
                  />
                </div>
              </div>
            </div>
          </form>
          <div className=" h-1   bg-[#212121]  mt-2 mb-3 " />
          <div className="flex gap-5 justify-center ">
            <div className="flex-initial">
              <button
                type="button"
                class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-[#202020] rounded-md hover:bg-blue-950 focus:outline-none focus:bg-blue-950 transition duration-300 transform active:scale-95 ease-in-out"
              >
                <BsSave />
                <span class="pl-2 mx-1">Save</span>
              </button>
            </div>

            <div className="flex-initial">
              <button
                type="button"
                class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize  bg-[#202020] rounded-md hover:bg-red-200 hover:fill-current hover:text-red-600 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
              >
                <AiFillDelete size={20} />
                <span class="pl-2 mx-1">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-end">
        <div class="mx-3 flex w-2/3 ">
          {/* <label
                class="flex  tracking-wide text-xl mb-2"
              >
                Productos
              </label> */}
          <table class="border-collapse table-auto w-full   whitespace-no-wrap bg-white table-striped relative  rounded-lg">
            <thead>
              <tr class="text-left rounded-lg  ">
                <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs hola">
                  Codigo
                </th>
                <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs hola">
                  Nombre
                </th>
                <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs hola">
                  Cantidad
                </th>
                <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs hola">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-dashed border-t border-gray-200 userId">
                  <span class="text-gray-700 px-6 py-3 flex items-center">
                    1234567
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200 firstName">
                  <span class="text-gray-700 px-6 py-3 flex items-center">
                    Oreo
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200 lastName">
                  <span class="text-gray-700 px-6 py-3 flex items-center">
                    (2) x 1.4
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200 emailAddress">
                  <span class="text-gray-700 px-6 py-3 flex items-center">
                    2.8
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="absolute    top-3/4  mr-10">
          <div>
            <h1 className=" text-xl">
              Total: <span>{i} bs</span>
            </h1>
          </div>

          <div className="flex ">
            <button className="  pl-10 pr-10 pt-2 pb-2 bg-black rounded-lg">
              Generar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
