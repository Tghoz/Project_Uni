"use client";

function Facturas() {
  const i = 0;

  const showAlert = () => {
    alert("Cedula del Cliente no Registrada.");
  };

  const realizarFactura = () => {
    alert("Se realizo la facutra y registro del usuario..🎶🎶🎶");
  };

  return (
    <div className="h-[89vh]  rounded-3xl  bg-[#202020]  grid max-w-6xl grid-cols-1 px-5 mx-auto lg:px-0 md:grid-cols-2 md:divide-x">
      <div className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
        <div className="flex justify-start">
          <div className="ml-10    mt-10 flex">
            <input
              className=" h-10 w-15   rounded-l-lg   border-t mr-0 border-b border-l  text-center bg-[#212121]"
              placeholder="Cliente..."
            />
            <button
              className=" h-10 w-15  text-center px-5 rounded-r-lg bg-black  border-b border-r border-l border-t"
              onClick={showAlert}
            >
              ???
            </button>
          </div>
        </div>

        <form className="flex flex-col py-1   space-y-6 md:py-0 md:px-6">
          <div className=" max-w-md px-6 ">
            <h1 className="text-xl  ">Datos Cliente</h1>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                placeholder="Nombre "
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="email"
                placeholder="Correo"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                placeholder="Numero Telefonico "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                placeholder="Direccion"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
            <h2 className="text-lg ">Datos factura:</h2>
            <fieldset className="relative z-0 w-full p-px m-5">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Metodo de pago
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    value="1"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Efectivo
                </label>
                <label>
                  <input
                    type="radio"
                    value="2"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Débito
                </label>
              </div>
            </fieldset>

            <div className="flex flex-row space-x-4">
              <div className="relative z-0 w-full mb-5">
                <input
                  type="date"
                  placeholder="Fecha "
                  onclick="this.setAttribute('type', 'date');"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
              <div className="relative z-0 w-full">
                <h1 className="cursor-not-allowed absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                  Fat. n {i}
                </h1>
              </div>
            </div>

            <button
              type="button"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-black hover:bg-[#181818] hover:shadow-lg focus:outline-none"
              onClick={realizarFactura}
            >
              Faturar
            </button>
          </div>
        </form>
      </div>

      <div className="py-6 md:py-0 md:px-6">
        <ul>
          <li>
            ola
          </li>
        </ul>






      </div>
    </div>
  );
}

export default Facturas;
