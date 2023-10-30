import axios from "axios"
import Buttons from "./Buttons";


async function cargarProducto(id) {
    const { data } = await axios.get('http://localhost:3000/api/ping/' + id)
    return data;
}

export default async function page({ params }) {

    const producto = await cargarProducto(params.id)
    console.log('--------->', producto)
    return (
        <section className="flex justify-center items-center">
            <div className="p-6 bg-[#202020]">
                <p>name: {producto[0].nombre}</p>
                <p>precio: {producto[0].precio}</p>

              <Buttons productoID={producto[0].id_producto}/>
            </div>
        </section>

    )
}
