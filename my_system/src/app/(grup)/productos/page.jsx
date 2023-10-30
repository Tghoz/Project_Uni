


import axios from "axios";
import Card from "@/components/Card";




  async function cargarProductos() {
    const {data } = await axios.get("http://localhost:3000/api/ping");
    return data
  }
  async function productoPage() {
    const productos = await cargarProductos();
    console.log( '==', productos)
    return <div className="grid  grid-cols-3 gap-6">
          {productos.map(producto => (
            <Card  producto={producto} key={producto.id_producto}/>
          ))}
        </div>
      
      
  
  }
export default productoPage;
