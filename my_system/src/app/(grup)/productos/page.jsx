"use client";

import { useEffect, useState } from "react";
import { fetch } from "../../../../service/fetch";
import { FiShoppingCart } from "react-icons/fi";

export default function Producto() {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch({ url: "http://localhost:3000/api/ping" });
      if (res) setProducto(res);
    })();
  }, []);


  const add = () => {
    null
  };


  return (
    <div className="grid  grid-cols-3 gap-6">
      {!producto.length ? (
        <>
          no hay jajas
        </>
      ) : (
        <>
          {producto.map(({ id_producto, nombre, precio, img }) =>

          (


            <div className="bg-[#202020]  text-white rounded-3xl ">
              <div className="max-w-sm  h-full">
                <a>
                  <img className="rounded-t-lg" src={img} alt="" />
                </a>
                <div className="p-5">
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
                    onClick={null}
                  >
                    <FiShoppingCart size={20} />
                  </a>
                </div>
              </div>
            </div>

          ))}
        </>
      )}
    </div>
  );
}
