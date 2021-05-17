import * as ui from './interfaz.js';

export function mostrarError(msj){
	ui.divMsj.textContent = msj;
	ui.divMsj.classList.add('error');

	setTimeout(() => {
		ui.divMsj.textContent = '';
		ui.divMsj.classList.remove('error');
	}, 3000)
}

export function spinner(){
	const div = document.createElement('div');
   	div.classList.add('spinner');

   	div.innerHTML = `
   		<div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>`;

    ui.divResult.appendChild(div);
}