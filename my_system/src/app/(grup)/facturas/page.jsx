import React from "react";


export default function page() {
  return (
    <div className="flex  mt-11">
      <div className="flex w-full  justify-center  ">
        <h1 className="text-3xl text-center">
         Registro todal de facturas.
        </h1>
      </div>

      <div className=" absolute ml-32  top-36  w-8/12  ">
        <div className="mx-3 flex ">
          <table className="border-collapse table-auto w-full   whitespace-no-wrap bg-white table-striped relative  rounded-lg">
            <thead>
              <tr className="text-left rounded-lg  ">
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs ">
                  ID
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs ">
                  Fecha
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs ">
                  Numero
                </th>
                <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs ">
                  clien id
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-dashed border-t border-gray-200 userId">
                  <span className="text-gray-700 px-6 py-3 flex items-center">
                    1511
                  </span>
                </td>
                <td className="border-dashed border-t border-gray-200 firstName">
                  <span className="text-gray-700 px-6 py-3 flex items-center">
                    12/2/2023
                  </span>
                </td>
                <td className="border-dashed border-t border-gray-200 lastName">
                  <span className="text-gray-700 px-6 py-3 flex items-center">
                    1
                  </span>
                </td>
                <td className="border-dashed border-t border-gray-200 emailAddress">
                  <span className="text-gray-700 px-6 py-3 flex items-center">
                    27797609
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
