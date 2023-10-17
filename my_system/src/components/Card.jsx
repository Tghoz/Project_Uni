"use client";


import { FiShoppingCart } from "react-icons/fi";

export default function Card({ game }) {

  const { nombre, precio, img, id_producto } = game;



  const add = () => {
    console.log( 'el id del juego es:',  id_producto )
  }

  return (
    <div className="bg-[#202020]  text-white rounded-3xl ">
      <div className="max-w-sm  h-full">
        <a>
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div class="p-5">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {nombre}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {precio}
          </p>
          <a
            className=" inline-block px-3 py-2 text-sm font-medium cursor-pointer text-white bg-black rounded-lg "
            onClick={add}
          >
            <FiShoppingCart size={20}  /> 
          </a>
        </div>
      </div>
    </div>
  );
}
