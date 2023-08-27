"use client";
import { AiFillCloseCircle } from "react-icons/ai";
import Boton from "./Boton";
import Factura from "./Factura";

export function Modal({ setModal_Open }) {
  return (
    <>
      <div
        className="absolute p-20 top-0 left-0 w-[200vh] h-full backdrop-blur-xl z-10 transition-all duration-500  "
      >
        <div className=" container w-[185vh]  h-[80vh] rounded-3xl bg-[#252525] py-6 px-4 ">
          <div className="">
            <Boton close={true} onClick={() => setModal_Open(false)}>
              <AiFillCloseCircle size={26} />
            </Boton>
          </div>

          <div className=" flex m-0  min-h-full ">
            <Factura />
          </div>
        </div>
      </div>
    </>
  );
}
