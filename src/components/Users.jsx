import React, { useState } from "react";

function Users() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productData, setProductData] = useState({
        nombre: "",
        stock: "",
        marca: "",
        costo: "",
        precio: "",
        fechaVencimiento: "",
        agregarImagen: "",
        categoria: "",

    });

    const products = [
        { nombre: "chamarra", stock: "10", marca: "adidas", costo: "40", precio: "$50", fechaVencimiento: "2023-05-12", agregarImagen: "", categoria: "ropa" },
        { nombre: "cobija", stock: "20", marca: "nike", costo: "20", precio: "$30", fechaVencimiento: "", agregarImagen: "", categoria: "cama" },
        { nombre: "cinturón", stock: "15", marca: "puma", costo: "10", precio: "$15", fechaVencimiento: "", agregarImagen: "", categoria: "hombre" },
        { nombre: "sudadera", stock: "25", marca: "lux", costo: "30", precio: "$40", fechaVencimiento: "", agregarImagen: "", categoria: "niño" },
        { nombre: "suéter", stock: "18", marca: "lacost", costo: "30", precio: "$35", fechaVencimiento: "", agregarImagen: "", categoria: "mujer" },
    ];

    const uniqueCategories = [...new Set(products.map((product) => product.categoria))];


    const handleEditProduct = (product) => {
        setProductData(product);
        setIsModalOpen(true);
    };

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Stock</th>
                            <th>Marca</th>
                            <th>Costo</th>
                            <th>Precio</th>
                            <th>Fecha de vencimiento</th>
                            <th>Agregar Imagen</th>
                            <th>Categoria</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>

                                <td>{product.nombre}</td>
                                <td>{product.stock}</td>
                                <td>{product.marca}</td>
                                <td>{product.costo}</td>
                                <td>{product.precio}</td>
                                <td>{product.fechaVencimiento}</td>
                                <td>{product.agregarImagen}</td>
                                <td>{product.categoria}</td>
                                <td>
                                    <button onClick={() => handleEditProduct(product)} className="bg-blue-500 text-white p-2 rounded-md">
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                </td>
                                <td>
                                    <form action="">
                                        <input type="hidden" />
                                        <button className="bg-red-500 text-white p-2 rounded-md">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg max-w-2xl">
                        <h2 className="text-xl font-bold mb-4">Editar producto</h2>
                        <form className="grid grid-cols-2 gap-4">

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Nombre del Producto</label>
                                <input type="text" className="w-full border p-2" placeholder="Ingrese el nombre del producto" value={productData.nombre} onChange={(e) => setProductData({ ...productData, nombre: e.target.value })} />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Cantidad en Stock</label>
                                <input type="number" className="w-full border p-2" placeholder="Ingrese la cantidad en stock" value={productData.stock} onChange={(e) => setProductData({ ...productData, stock: e.target.value })} />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Marca</label>
                                <input type="text" className="w-full border p-2" placeholder="Ingrese el precio del producto" value={productData.marca} onChange={(e) => setProductData({ ...productData, marca: e.target.value })} />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Costo</label>
                                <input type="number" className="w-full border p-2" placeholder="Ingrese el precio del producto" value={productData.costo} onChange={(e) => setProductData({ ...productData, costo: e.target.value })} />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Precio</label>
                                <input type="number" className="w-full border p-2" placeholder="Ingrese el precio del producto" value={productData.precio} onChange={(e) => setProductData({ ...productData, precio: e.target.value })} />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">fecha de vencimiento</label>
                                <input type="date" className="w-full border p-2" placeholder="Ingrese el precio del producto" value={productData.fechaVencimiento} onChange={(e) => setProductData({ ...productData, fechaVencimiento: e.target.value })} />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Agregar una imagen</label>
                                <input type="file" className="w-full border p-2" onChange={(e) => setProductData({ ...productData, agregarImagen: e.target.files[0] })} />

                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Categoria</label>
                                <select name="categoria" id="categoria" className="w-full border p-2" value={productData.categoria} onChange={(e) => setProductData({ ...productData, categoria: e.target.value })}>
                                    {uniqueCategories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 mt-2">Editar producto</button>

                        </form>

                        <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white p-2 mt-4">
                            Cancelar
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Users;

