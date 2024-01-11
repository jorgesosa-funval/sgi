import { React, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faPlus} from '@fortawesome/free-solid-svg-icons'; 
import {faCopy} from '@fortawesome/free-solid-svg-icons'; 
import {faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons'; 
import {faPrint} from '@fortawesome/free-solid-svg-icons'; 
import {faEye} from '@fortawesome/free-solid-svg-icons'; 
import {faTruck} from '@fortawesome/free-solid-svg-icons'; 
import { useSgiMarketContext } from "../../context/SGIProvider";

export function Ventas() {

    const { datos, seccion } = useSgiMarketContext();
    
    function añadirVenta(){
        console.log('Boton de añadir producto')
    }
    function borrar(){
        console.log('Borrar')
    }

  return (
    <>
        <section className="flex">
            <button className='bg-[#4c4949a1] text-slate-50 rounded-md p-2.5 mr-2 hover:bg-[#4c49497d]' onClick={añadirVenta}>
                <FontAwesomeIcon className='mr-2' icon={faPlus}/>
                Añadir Venta
            </button>
            <button className='bg-[#4c4949a1] text-slate-50 rounded-md p-2.5 hover:bg-[#4c49497d]'>
                <FontAwesomeIcon className='mr-2' icon={faCopy}/>
                Venta de Importación
            </button>
        </section>
        <section className="flex justify-center">
            <article>
                <label className='font-bold mx-3' for="fecha">Elige fecha </label>
                <input className='border-[1px] border-solid rounded-sm border-slate-400 hover:cursor-pointer' type="date" id="fecha" name="fecha"></input>
            </article>
            <h1 className='font-bold mx-3'>A</h1>
            <article>
                {/* <label for="fecha">Selecciona una fecha: </label> */}
                <input className='border-[1px] border-solid rounded-sm border-slate-400 hover:cursor-pointer' type="date" id="fecha" name="fecha"></input>
            </article>
        </section>
        <section className="flex justify-between my-6">
            <article>
                <select className='border-[1px] border-solid rounded-sm border-slate-400 w-14 mr-2 hover:cursor-pointer' id="opciones" name="opciones">
                    <option value="opcion1">10</option>
                    <option value="opcion2">5</option>
                    <option value="opcion3">3</option>
                    <option value="opcion3">1</option>
                </select>
                <label for="opciones">Registros por página</label>
            </article>
            <div className='flex'>
                <label className='mr-2 hover:cursor-pointer' htmlFor="buscar">Buscar</label>
                <input className='border-[1px] border-solid rounded-sm border-slate-400 w-22 h-6' type="text" id='buscar'/>
            </div>
            <article>
                <button className='bg-[#4c4949a1] text-slate-50 rounded-s-md px-2.5 py-1 mr-1 hover:bg-[#4c49497d]'>PDF</button>
                <button className='bg-[#4c4949a1] text-slate-50  px-2.5 py-1 mr-1 hover:bg-[#4c49497d]'>CSV</button>
                <button className='bg-[#4c4949a1] text-slate-50 px-2.5 py-1 mr-1 hover:bg-[#4c49497d]'>Impresion</button>
                <button onClick={borrar} className='bg-[#4c4949a1] text-slate-50 px-2.5 py-1 mr-1 hover:bg-[#4c49497d]'>Borrar</button>
                {/* <label className='bg-[#4c4949a1] text-slate-50 rounded-md px-2.5 py-1.5 mr-1 hover:bg-[#4c49497d]' for="visibilidad">Visibilidad de la Columna</label>
                <select id="visibilidad" name="opciones">
                    <option value="opcion1">10</option>
                    <option value="opcion2">5</option>
                    <option value="opcion3">3</option>
                    <option value="opcion3">1</option>
                </select> */}

                <select className='bg-[#4c4949a1] text-slate-50 rounded-e-md px-1 py-1 mr-1 hover:cursor-pointer' id="opciones" name="opciones" placeholder="Accion">
                            <option value="" disabled selected hidden>Visibilidad de la columna</option>
                            <option value="opcion0">Visibilidad 1</option>
                            <option value="opcion1">Visibilidad 2</option>
                            <option value="opcion2">Visibilidad 3</option>
                            <option value="opcion3">Visibilidad 4</option>
                            <option value="opcion4">Visibilidad 5</option>
                </select>

            </article>
        </section>
        <table className="border-[1px] border-solid rounded-sm border-black shadow-xl shadow-black">
            <thead className='border-b border-black font-bold'>
                <tr>
                    <td className='pl-4'>
                        <input type="checkbox" id="miCheckbox" name="miCheckbox"></input>
                        <label for="miCheckbox"></label>
                    </td>
                    <td>Fecha</td>
                    <td className='flex f'>Nro. Venta/Factura</td>
                    <td>Producto Id</td>
                    <td>Cliente</td>
                    <td>Cantidad vendida</td>
                    <td>Costo</td>
                    <td className='pr-2'>Total</td>
                    <td className='pr-2'>Pagado</td>
                    <td className='pr-2'>Debido</td>
                    <td>Cortesía</td>
                    <td>Metodo Pago</td>
                    <td>Acción</td>
                </tr>
            </thead>
            
            <tbody>
                {datos.map((producto, index) => (
                    <tr key={index}>
                        <td className='pl-4'>
                            <input className='hover:cursor-pointer' type="checkbox" id="miCheckbox" name="miCheckbox"></input>
                            <label for="miCheckbox"></label>
                        </td>

                        {/* Aqui abajo es en donde se puede llegar a renderizar una imagen */}

                        {/* <td><img src={producto.Imagen} alt={producto.Nombre} width="50" /></td> */}
                        <td>{producto.fechaVenta}</td>
                        <td>{producto.venta_id}</td>
                        <td>{producto.producto_id}</td>
                        <td>{producto.id}</td>
                        <td>
                            <p  className='bg-[#4c4949e8] text-slate-50 rounded-md font-medium mx-[14px] text-sm'>
                                {producto.cantidadVendida}
                            </p>
                        </td>
                        <td>
                            <p className='bg-[#4c4949e8] text-slate-50 rounded-md font-medium mx-[20px] text-sm'>
                                {producto.costo}
                            </p>
                        </td>
                        <td>{producto.total}</td>
                        <td>{producto.total}</td>
                        <td>{producto.Debido}</td>
                        <td>{producto.Cortesia ? 'Sí' : 'No'}</td>
                        <td><FontAwesomeIcon className='mr-2' icon={faMoneyBill1Wave}/></td>
                        <td className='pr-4'>                  
                        {/* <label for="opciones">**Accion**</label> */}
                        <select className='w-20 border-[1px] border-solid rounded-sm border-slate-400 hover:cursor-pointer' id="opciones" name="opciones" placeholder="Accion">
                            <option value="" disabled selected hidden>Acción</option>
                            <option value="opcion0">
                                <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> 
                                    Imprimir Venta
                            </option>
                            <option value="opcion1">
                                <FontAwesomeIcon icon={faEye}/>
                                Ver
                            </option>
                            <option value="opcion2">
                                <FontAwesomeIcon icon={faPlus}/>
                                Añadir Pago
                            </option>
                            <option value="opcion3">
                                <FontAwesomeIcon icon={faMoneyBill1Wave}/>
                                Ver Pago
                            </option>
                            <option value="opcion4">
                                <FontAwesomeIcon icon={faTruck}/>    
                                Añadir Entrega
                            </option>
                        </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>

  )
}

export default Ventas