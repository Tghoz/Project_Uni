"use client";


import { FiShoppingCart } from "react-icons/fi";

export default function Card({ game }) {





  const { id,  title, short_description, category, thumbnail, rating } = game;
  
  const add = () => {
    console.log( 'el id del juego es:',  id )
  }



  return (
    <div className="bg-[#202020]  text-white rounded-3xl ">
      <div class="max-w-sm  h-full">
        <a>
          <img class="rounded-t-lg" src={thumbnail} alt="" />
        </a>
        <div class="p-5">
          <a>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {short_description}
          </p>
          <a
            class=" inline-block px-3 py-2 text-sm font-medium  text-white bg-black rounded-lg "
            onClick={add}
          >
            <FiShoppingCart size={20} /> 
          </a>
        </div>
      </div>
    </div>
  );
}
