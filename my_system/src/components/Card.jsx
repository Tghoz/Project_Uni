'use client'

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function Card({ producto }) {
  return (
    <Link
    className="bg-[#202020]  text-white rounded-3xl hover:bg-[#232323]"
    href={'/productos/'+producto.id_producto}
    > 
      <div className="max-w-sm  h-full">
          <div>
          <img className="rounded-t-lg" src={producto.img} alt="" />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {producto.nombre}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {producto.precio}
          </p>
          
          <div
            className=" inline-block px-3 py-2 text-sm font-medium cursor-pointer text-white bg-black rounded-lg "
            onClick={null}
          >
            <FiShoppingCart size={20} />
          </div>
        </div>
      </div>
    </Link>
  )
}