import {useState} from "react";
import {PropTypes} from "prop-types";
import {useFetch} from "./useFetch";

function Inventario({url, headers, table}) {
	const {data, loading, error} = useFetch(url);
	const [editingItem, setEditingItem] = useState(null);
	const [formData, setFormData] = useState({});

	const handleEditClick = (itemId) => {
		const selectedItem = data.find((item) => item.id === itemId);
		if (selectedItem) {
			setFormData(selectedItem);
			setEditingItem(itemId);
		}
	};

	const handleCancelEdit = () => {
		setEditingItem(null);
		setFormData({});
	};

	const handleSaveEdit = (itemId) => {
		fetch(`${url}${itemId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (response.ok) {
					console.log("Producto actualizado exitosamente");
					setEditingItem(null);
					window.location.reload();
				} else {
					console.error("Error al actualizar el producto");
				}
			})
			.catch((error) => {
				console.error("Error de red al actualizar el producto", error);
			});
	};

	const handleInputChange = (column, value) => {
		setFormData((prevData) => ({...prevData, [column]: value}));
	};

	return (
		<div className="w-[100%] h-[100%]">
			<table className="w-[100%] table-auto">
				<thead>
					<tr className="text-left">
						{headers.map((item, index) => (
							<th className="bg-[#fff] text-[#343b40] h-[3rem]" key={index}>
								{item}
							</th>
						))}
						<th className="bg-[#fff] text-[#343b40] h-[3rem] w-[7%]">
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					{loading && (
						<tr>
							<td>Loading...</td>
						</tr>
					)}
					{error && (
						<tr>
							<td>Error: {error.message}</td>
						</tr>
					)}
					{data &&
						(Array.isArray(data)
							? data.map((item) => (
									<tr key={item.id}>
										<td className="h-[3rem] bg-[#f2f2f2] text-[#000] border-b border-gray-400">
											<strong>{item.id}</strong>
										</td>
										{table.map((column, q) => (
											<td
												key={q}
												className="h-[3rem] bg-[#f2f2f2] text-[#343b40] border-b border-gray-400"
											>
												{editingItem === item.id ? (
													<input
														type="text"
														className="bg-white w-[90%]"
														value={
															formData[column] !== undefined
																? formData[column]
																: item[column]
														}
														name={column}
														onChange={(e) =>
															handleInputChange(column, e.target.value)
														}
													/>
												) : (
													item[column]
												)}
											</td>
										))}
										<td className="h-[3rem] bg-[#f2f2f2] text-[#343b40] border-b border-gray-400">
											{editingItem === item.id ? (
												<input
													type="text"
													className="bg-white w-[4rem]"
													value={
														formData.img !== undefined ? formData.img : item.img
													}
													name="img"
													onChange={(e) =>
														handleInputChange("img", e.target.value)
													}
												/>
											) : (
												<img className="h-[75px]" src={item.img} />
											)}
										</td>

										<td className="h-[5rem] bg-[#f2f2f2] flex justify-evenly items-center border-b border-gray-400">
											{editingItem === item.id ? (
												<>
													<button
														type="button"
														onClick={() => handleSaveEdit(item.id)}
														className="bg-[none] border-[none]"
													>
														<span className="material-symbols-outlined cursor-pointer text-[#53b453]">
															save
														</span>
													</button>
													<span
														className="material-symbols-outlined cursor-pointer text-[#FFC300] pb-[5px]"
														onClick={handleCancelEdit}
													>
														cancel
													</span>
												</>
											) : (
												<span
													data-id={item.id}
													className="material-symbols-outlined cursor-pointer text-[#FFC300] edit-new"
													onClick={() => handleEditClick(item.id)}
												>
													edit
												</span>
											)}
											<form
												action={`${url}${item.id}`}
												method="POST"
												onSubmit={(e) => {
													e.preventDefault();
													if (
														window.confirm(
															"¿Estás seguro de que deseas eliminar este producto?"
														)
													) {
														// Enviar la solicitud DELETE usando fetch o axios aquí
														fetch(`${url}${item.id}`, {
															method: "DELETE",
															headers: {
																"Content-Type": "application/json",
															},
														})
															.then((response) => {
																if (response.ok) {
																	console.log(
																		"Producto eliminado exitosamente"
																	);
																	window.location.reload();
																} else {
																	console.error(
																		"Error al eliminar el producto"
																	);
																}
															})
															.catch((error) => {
																console.error(
																	"Error de red al eliminar el producto",
																	error
																);
															});
													}
												}}
											>
												<input type="hidden" name="_method" value="DELETE" />
												<button
													type="submit"
													className="bg-[none] border-[none]"
												>
													<span className="material-symbols-outlined cursor-pointer text-[red]">
														delete
													</span>
												</button>
											</form>
										</td>
									</tr>
							  ))
							: Object.values(data).map((value, index) => (
									<tr key={index}>
										<td>{value}</td>
									</tr>
							  )))}
				</tbody>
			</table>
		</div>
	);
}

Inventario.propTypes = {
	url: PropTypes.string.isRequired,
	headers: PropTypes.array.isRequired,
	table: PropTypes.array.isRequired,
};

export default Inventario;
