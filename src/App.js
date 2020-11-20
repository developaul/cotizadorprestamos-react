import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

    // Definir el states
	const [ cantidad, guardarCantidad ] = useState(0),
		  [ plazo, guardarPlazo ] 		= useState(''),
		  [ total, guardarTotal ] 		= useState(0),
		  [ cargando, guardarCargando ] = useState(false);

	let componente;

	if( cargando ) {
		componente = <Spinner />
	} else if( total === 0 ) {
		componente = <Mensaje />
	} else {
		componente = <Resultado
						total={total}
						plazo={plazo}
						cantidad={cantidad}
					/>
	}

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
					guardarTotal={ guardarTotal }
					guardarCargando={ guardarCargando }
				/>

				<div className="mensajes">
					{ componente }
				</div>
			</div>
		</>
	);

}

export default App;
