'use client'
import { useState } from "react";
import { fetch } from "../../../../service/fetch";
import { useForm } from "react-hook-form"

import { uploadFile } from "../../../../firebase/config";



export default function addProcucto() {

  const [img, setImg] = useState('')


  const changeImg = (e) => setImg(uploadFile(e.target.files[0]))


  const { register, handleSubmit } = useForm()


  const saveProducto = (e) => {
    //e.preventDefault();
    (async () => {
      const res = await fetch({
        url: 'http://localhost:3000/api/ping',
        method: 'POST',
        body: { e, img },
      })
      if (res) {
        console.log('sisa')
      } else (
        console.log('nolsa')
      )
    })()
  }

  console.log()

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit(saveProducto)}
        className="w-full md:w-1/2 rounded-3xl p-6 bg-[#212121]"
      >
        <h2 className="text-2xl pb-3 font-semibold">Agregar Nuevo Juego</h2>
        <div>
          <div className="flex flex-col mb-3">
            <input
              {...register("nombre")}
              name="nombre"
              type="text"
              placeholder="Nombre"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

            />
          </div>
          <div className="flex flex-col mb-3">
            <input
              name="precio"
              type="number"
              {...register("precio")}
              placeholder="Precio"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
          </div>




          <div className="flex flex-col mb-3">

            <label className="block text-sm font-medium text-white">Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={changeImg}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 text-white">or drag and drop</p>
                </div>
                <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>

          </div>
        </div>
        <div className="w-full pt-3">
          <button
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-black hover:bg-[#181818] hover:shadow-lg focus:outline-none"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );









  /*
  
  
  
   
  
  */



}
