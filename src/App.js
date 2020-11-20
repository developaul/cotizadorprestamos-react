import React, { useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

    // Definir el states
	const [ cantidad, guardarCantidad ] = useState(0),
		  [ plazo, guardarPlazo ] = useState('');


	return (
		<>
			<Header 
				titulo='Cotizador de Prestamos'
			/>

			<div className="container">
				<Formulario 
					cantidad={ cantidad }
					plazo={ plazo }
					guardarCantidad={ guardarCantidad }
					guardarPlazo={ guardarPlazo }
				/>
			</div>
		</>
	);
}

export default App;
