let parrafos = document.getElementsByTagName('p');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const hidden = urlParams.get('oculto')

if (hidden == 'false') {
	for (let parrafo of parrafos) {
		if (parrafo.innerText.startsWith('(') && parrafo.innerText.endsWith(')')) {
		parrafo.style.visibility = 'visible';
		parrafo.style.display = 'inherit';
		}
	}
} else {
	for (let parrafo of parrafos) {
		if (parrafo.innerText.startsWith('(') && parrafo.innerText.endsWith(')')) {
		parrafo.style.visibility = 'hidden';
		parrafo.style.display = 'none';
		}
	}
}



