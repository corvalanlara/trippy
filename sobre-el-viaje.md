---
layout: post
title: Sobre el viaje
---
<span id="frase"></span>

#### Condiciones:
<ol>
<li>
El viaje comienza y termina en Chile.
</li>
<li>
El viaje se realizará en dirección oeste.
</li>
<li>
El viaje debe incluir los siguientes países:
	<ul>
		<li>
		Colombia
		</li>
		<li>
		El Líbano
		</li>
		<li>
		India
		</li>
		<li>
		Japón
		</li>
		<li>
		Marruecos
		</li>
		<li>
		México
		</li>
		<li>
		Turquía
		</li>
		<li>
		Vietnam
		</li>
	</ul>
</li>
</ol>

<script>
let frase = document.getElementById("frase");
let hoy = new Date();
let fecha_inicio = new Date(2024,1,16);
fecha_inicio.setHours(hoy.getHours())
fecha_inicio.setMinutes(hoy.getMinutes())
fecha_inicio.setSeconds(hoy.getSeconds())
fecha_inicio.setMilliseconds(hoy.getMilliseconds())
let dif = fecha_inicio.getTime() - hoy.getTime();
let milisegundos = dif / (1000 * 3600 * 24);
let dias;

if (Math.sign(milisegundos) == 1) {
	dias = Math.ceil(milisegundos);
} else if (Math.sign(milisegundos) == -1) {
	dias = Math.floor(milisegundos);
} else {
	dias = 0;
}

if (dias == 1) {
	frase.innerText = `El viaje comenzará mañana`
} else if (dias > 0) {
	frase.innerText = `El viaje comenzará en ${dias} días.`
} else if (dias == -1) {
	frase.innerText = `El viaje comenzó ayer`
} else if (dias < 0) {
	frase.innerText = `El viaje comenzó hace ${Math.abs(dias)} días.`
} else {
	frase.innerText = `El viaje comienza hoy.`
}
</script>
