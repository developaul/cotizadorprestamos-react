import React, { useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

    // Definir el states
	const [ cantidad, guardarCantidad ] = useState(0),
		  [ plazo, guardarPlazo ] 		= useState(''),
		  [ total, guardarTotal ] 		= useState(0);

	return (
		<>
			<Header 
				titulo='Cotizador de Prestamos'
			/>

			<div className="container">
				<Formulario 
					cantidad={ cantidad }
					plazo={ plazo }
					total={ total }
					guardarCantidad={ guardarCantidad }
					guardarPlazo={ guardarPlazo }
					guardarTotal={ guardarTotal }
				/>

				<p>Total a Pagar: { total }</p>
			</div>
		</>
	);

}

export default App;
