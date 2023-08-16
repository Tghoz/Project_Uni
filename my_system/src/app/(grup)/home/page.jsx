"use client";
import { useState } from "react";

import Card from "@/components/Cart";

export default function Page() {
  const [modal_Open, setModal_Open] = useState(true);

  return (
    <>
      {/* Modal */}
      {modal_Open && (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="conainer mx-auto max-w-2xl h-[80vh] rounded-3xl bg-slate-800 py-6 px-4 ">
            <button
              onClick={() => {
                setModal_Open(false);
              }}
              className=" w-10 h-10 mb-4 font-bold rounded-full bg-slate-600 "
            >
              x
            </button>
            <h3>soy un modal jijiji</h3>
          </div>
        </div>
      )}

      <div className="grid  grid-cols-1 sm:grid-cols-3 p-10 gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

// como declarar un context en react!
