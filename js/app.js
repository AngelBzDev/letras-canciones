import * as ui from './interfaz.js';
import {mostrarError} from './funciones.js';
import API from './api.js';

ui.form.addEventListener('submit', buscarCancion);

function buscarCancion(e){
	e.preventDefault();

	//Obteniendo los datos del formualario
	const artista = document.querySelector("#artista").value;
	const cancion = document.querySelector("#cancion").value;

	if(artista === '' || cancion === ''){
		mostrarError('Ambos campos son obligatorios');
		return;
	}

	//Consultar la API
	const busqueda = new API(artista, cancion);
	busqueda.consultarAPI();
}
