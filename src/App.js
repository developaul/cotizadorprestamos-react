import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';

function App() {

    // Definir el states
	const [ cantidad, guardarCantidad ] = useState(0),
		  [ plazo, guardarPlazo ] 		= useState(''),
		  [ total, guardarTotal ] 		= useState(0);

	const componente = ( total === 0 ) ? <Mensaje /> : <Resultado />

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

				<div className="mensajes">
					{ componente }
				</div>
			</div>
		</>
	);

}

export default App;
