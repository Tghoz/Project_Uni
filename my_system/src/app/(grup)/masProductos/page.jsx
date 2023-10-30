"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function addProcucto() {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
  });

  const [file,setFile] = useState(null);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSutmit = async (e) => {
    e.preventDefault();

    if (!params.id) {

      const formData = new FormData();
      formData.append('nombre', producto.nombre)
      formData.append('precio', producto.precio)

      if (file) formData.append('img', file)

      const res = await axios.post("/api/ping", formData,{
        headers:{
        'Content-Type' : 'multipart/form-data'
        }
      });
    
  
    }else{
      const res = await axios.put('/api/ping/'+params.id,producto)
    }

    location.replace("http://localhost:3000/productos");
  };

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      axios.get("/api/ping/" + params.id).then((res) => {

        setProducto({
          nombre: res.data[0].nombre,
          precio: res.data[0].precio,
        });
      });
    }
  }, []);

  return (
    <div className="flex justify-center ">
      <form

        onSubmit={handleSutmit}
        className="w-full md:w-1/2 rounded-3xl p-6 bg-[#212121]"
      >
        <h2 className="text-2xl pb-3 font-semibold">Agregar Nuevo Juego</h2>
        <div>
          <div className="flex flex-col mb-3">
            <input
              name="nombre"
              type="text"
              placeholder="Nombre"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              onChange={handleChange}
              value={producto.nombre}
            />
          </div>
          <div className="flex flex-col mb-3">
            <input
              name="precio"
              type="number"
              placeholder="Precio"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              onChange={handleChange}
              value={producto.precio}
            />
          </div>

          <div className="flex flex-col mb-3 object-contain mx-auto">
            <label className="block text-sm font-medium text-white">
              Image
            </label>

            {file ?  file && <img src={URL.createObjectURL(file)} alt="" /> 
            : 
            
            ( 
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
                      className="sr-only"
                      onChange={(e) => {
                        setFile(e.target.files[0])
                      }}
                    />
                    
                  </label>
                  <p className="pl-1 text-white">or drag and drop</p>
                </div>
                <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            ) }
          </div>
        </div>
        <div className="w-full pt-3">
          <button className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-black hover:bg-[#181818] hover:shadow-lg focus:outline-none">
            Guardar
          </button>
        </div>
      </form>
     
    </div>
  );
}
