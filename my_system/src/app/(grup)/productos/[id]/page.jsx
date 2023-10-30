import axios from "axios"
import Buttons from "./Buttons";


async function cargarProducto(id) {
    const { data } = await axios.get('http://localhost:3000/api/ping/' + id)
    return data;
}

export default async function page({ params }) {

    const producto = await cargarProducto(params.id)
    return (
        <section className="flex justify-center items-center h-[calc(100vh-10rem)]">


            <div className="flex w-4/6 h-2/5 jus">
            <div className="p-6 bg-[#202020] w-1/3">
                <h3 className="text-2xl font-bold mb-3"> {producto[0].nombre}</h3>
                <h4 className="text-4xl font-bold">{producto[0].precio}</h4>
              <Buttons productoID={producto[0].id_producto}/>
            </div>
            <img src={producto[0].img} className="" alt="" />
            </div>
        </section>

    )
}
