import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";
const Formulario = () => {
	const [busqueda, guardarBusqueda] = useState({
		nombre: "",
		categoria: "",
	});

	const { categorias } = useContext(CategoriasContext);
	const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

	// funcion para leer los contenidos

	const obtenerDatosReceta = (e) => {
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			className="col-12 mt-4"
			onSubmit={(e) => {
				e.preventDefault();
				buscarRecetas(busqueda);
				guardarConsultar(true);
			}}
		>
			<fielset className="text-center">
				<legend>Buscar bebidas por categoria o ingrediente</legend>
			</fielset>

			<div className="row">
				<div className="col-md-4">
					<input
						name="nombre"
						className="form-control"
						type="text"
						placeholder="Buscar por Ingrediente"
						onChange={obtenerDatosReceta}
					/>
				</div>

				<div className="col-md-4">
					<select
						className="form-control"
						name="categoria"
						onChange={obtenerDatosReceta}
					>
						<option value="">Seleccionar</option>
						{categorias.map((categoria) => (
							<option key={categoria.strCategory} value={categoria.strCategory}>
								{categoria.strCategory}
							</option>
						))}
					</select>
				</div>

				<div className="col-md-4">
					<input
						type="submit"
						className="btn btn-primary btn-block"
						value="Buscar Bebidas"
					/>
				</div>
			</div>
		</form>
	);
};

export default Formulario;
