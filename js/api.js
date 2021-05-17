import * as ui from './interfaz.js';
import {mostrarError, spinner} from './funciones.js';

class API{
	constructor(artista, cancion){
		this.artista = artista;
		this.cancion = cancion;
	}

	consultarAPI(){
		const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

		fetch(url)
			.then(r => r.json())
			.then(r => {
				spinner();
				
				if(r.lyrics){
					const {lyrics} = r
					ui.divResult.textContent = lyrics;
					ui.headResult.innerHTML = `${this.cancion} de <span style="color:#1e3c72">${this.artista}</span>`;
					ui.form.reset();
				}
				else{
					mostrarError('La cancion o el artista no existen');
					ui.divResult.textContent = '';
					ui.headResult.innerHTML = '';
				}
			});
	}
}

export default API;