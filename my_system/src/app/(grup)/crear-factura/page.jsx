"use client";




import { fetch } from "../../../../service/fetch";
import { useForm } from "react-hook-form"



function Facturas() {

  const { register, handleSubmit } = useForm()

  const saveCliente = (e) => {
    (async () => {
      const res = await fetch({
        url: 'http://localhost:3000/api/cliente',
        method: 'POST',
        body:  e,
      });

      if (res) {
       console.log('sisa')// location.replace('http://localhost:3000/productos')
      } 
    })()
  }





  return (
    <div className="h-[89vh]  rounded-3xl  bg-[#202020]  grid max-w-6xl grid-cols-1 px-5 mx-auto lg:px-0 md:grid-cols-2 md:divide-x">
      <div className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
        <div className="flex justify-start">
          <div className="ml-10 mt-10 flex">
            <form onSubmit={handleSubmit(saveCliente)} >
            <input
              className=" h-10 w-15   rounded-l-lg   border-t mr-0 border-b border-l  text-center bg-[#212121]"
              placeholder="Cliente..."
            />
            <button
             
              className=" h-10 w-15  text-center px-5 rounded-r-lg bg-black cursor-pointer  border-b border-r border-l border-t"
            >

              ???
            </button>
            </form>
           
          </div>
        </div>

        <div className="flex flex-col py-1   space-y-6 md:py-0 md:px-6">
          <div className=" max-w-md px-6 ">
            <h1 className="text-xl  ">Datos Cliente</h1>
          <form 
            
          >
            <div className="relative z-0 w-full mb-5">
              
              <input
                type="text"
                {...register("nombre")}
                placeholder="Nombre"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="email"
                {...register("email")}
                placeholder="Correo"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                {...register("telefono")}
                placeholder="Numero Telefonico "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>
      
          </form>



{/* registar la factura  */}

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
                  1
                </h1>
              </div>
            </div>

            <button
              onSubmit={handleSubmit(saveCliente)}
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-black hover:bg-[#181818] hover:shadow-lg focus:outline-none"

            >
              Guardar 
            </button>
          </div>
        </div>
      </div>

      <div className="py-6 md:py-0 md:px-6">
      lista de procuctos seleccionados para realizar la factura 
      </div>
      

    </div>
  );
}

export default Facturas;
