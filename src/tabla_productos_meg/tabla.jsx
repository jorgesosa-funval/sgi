// import './App.css'

import { useEffect, useState } from "react";

function Tabla() {

    const data_falsa_json = [
            {
              "Imagen": "ruta/imagen1.jpg",
              "Nombre": "Producto 1",
              "Código": "P001",
              "Marca": "Marca A",
              "Categoría": "Electrónicos",
              "Costo": 50.00,
              "Unidad": "Pieza",
              "Precio": 80.00,
              "Cortesia": false
            },
            {
              "Imagen": "ruta/imagen2.jpg",
              "Nombre": "Producto 2",
              "Código": "P002",
              "Marca": "Marca B",
              "Categoría": "Ropa",
              "Costo": 30.00,
              "Unidad": "Par",
              "Precio": 45.00,
              "Cortesia": true
            },
            {
              "Imagen": "ruta/imagen3.jpg",
              "Nombre": "Producto 3",
              "Código": "P003",
              "Marca": "Marca C",
              "Categoría": "Hogar",
              "Costo": 20.00,
              "Unidad": "Litro",
              "Precio": 30.00,
              "Cortesia": false
            }
    ]

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/tabla_productos_meg/data_falsa.json');
            const data = await response.json();
            setDatos(data);
          } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);
          }
        };
    
        fetchData();
      }, []);
    
    function añadirProducto(){
        console.log('Boton de añadir producto')
        console.log(data_falsa_json)
    }
    function borrar(){
        console.log('Borrar')
    }

  return (

    <>
        <div className="flex">
            <button onClick={añadirProducto}>Añadir Producto</button>
            <button>Imprimir Producto</button>
        </div>
        <div className="flex justify-between">
            <div>
                <label for="opciones">Registros por pagina</label>
                <select id="opciones" name="opciones">
                    <option value="opcion1">10</option>
                    <option value="opcion2">5</option>
                    <option value="opcion3">3</option>
                    <option value="opcion3">1</option>
                </select>
            </div>
            <div>
                <input type="text" placeholder="Buscar"/>
            </div>
            <div>
                <button>PDF</button>
                <button>CSV</button>
                <button>Impresion</button>
                <button onClick={borrar}>Borrar</button>
                <label for="opciones">Visibilidad de la Columna</label>
                <select id="opciones" name="opciones">
                    <option value="opcion1">10</option>
                    <option value="opcion2">5</option>
                    <option value="opcion3">3</option>
                    <option value="opcion3">1</option>
                </select>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <td>Cuadrado</td>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Código</td>
                    <td>Marca</td>
                    <td>Categoría</td>
                    <td>Costo</td>
                    <td>Unidad</td>
                    <td>Precio</td>
                    <td>Cortesia</td>
                    <td>Accion</td>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>
                        {/* Aqui abajo deberia haber un checkbox */}
                        Cuadrado 
                    </td>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Código</td>
                    <td>Marca</td>
                    <td>Categoría</td>
                    <td>Costo</td>
                    <td>Unidad</td>
                    <td>Precio</td>
                    <td>Cortesia</td>
                    <td>                  
                        <label for="opciones">**Accion**</label>
                        <select id="opciones" name="opciones">
                            <option value="opcion1">Ver</option>
                            <option value="opcion2">Editar</option>
                            <option value="opcion3">Editar Galeria</option>
                            <option value="opcion3">Borrar</option>
                        </select>
                    </td>
                </tr>
                {data_falsa_json.map((producto, index) => (
                    <tr key={index}>
                        <td>Cuadrado</td>
                        <td><img src={producto.Imagen} alt={producto.Nombre} width="50" /></td>
                        <td>{producto.Nombre}</td>
                        <td>{producto.Código}</td>
                        <td>{producto.Marca}</td>
                        <td>{producto.Categoría}</td>
                        <td>{producto.Costo}</td>
                        <td>{producto.Unidad}</td>
                        <td>{producto.Precio}</td>
                        <td>{producto.Cortesia ? 'Sí' : 'No'}</td>
                        <td>                  
                        <label for="opciones">**Accion**</label>
                        <select id="opciones" name="opciones">
                            <option value="opcion1">Ver</option>
                            <option value="opcion2">Editar</option>
                            <option value="opcion3">Editar Galeria</option>
                            <option value="opcion3">Borrar</option>
                        </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>

  )
}

export default Tabla