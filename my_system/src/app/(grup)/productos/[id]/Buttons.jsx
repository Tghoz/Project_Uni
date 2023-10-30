"use client";

import React from "react";
import axios from "axios";

function Buttons({ productoID }) {
  return (
    <div className="flex gap-x-2 justify-end">
      <button
        className="bg-red-500 hover:bg-red-700 m-5 px-3 rounded"
        onClick={async () => {
            if(confirm('Seguro que deseas eliminar el producto?')){
                const res = await axios.delete('/api/ping/'+  productoID);
                if(res.status ===  204){
                    location.replace('http://localhost:3000/productos')
                }
            }
        }
        }
      >
        Borrar
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 m-5 px-3 rounded"
      
        onClick={() => {
          location.replace('http://localhost:3000/productos/edit/'+productoID)
        }}
      >
        Editar
      </button>
    </div>
  );
}

export default Buttons;
