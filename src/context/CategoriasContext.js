import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
// Crear el Context
export const CategoriasContext = createContext();

//Provider Es de donde van a salir los datos y las funciones
const CategoriasProvider = (props) => {
	const [categorias, guardarCategoria] = useState([]);

	useEffect(() => {
		const obtenerCategorias = async () => {
			const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
			const categorias = await axios.get(url);
			guardarCategoria(categorias.data.drinks);
		};
		obtenerCategorias();
	}, []);

	// Son todos lo que va a estar disponeble a todos los componentes
	return (
		<CategoriasContext.Provider
			value={{
				categorias,
			}}
		>
			{props.children}
		</CategoriasContext.Provider>
	);
};

export default CategoriasProvider;
