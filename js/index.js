import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

// Numero senyores marcados
const marcados = document.querySelector(".num-senyores-marcados");
let numeroMarcados = 0;
for (const senyor of senyores) {
  if (senyor.marcado) {
    numeroMarcados++;
  }
}
marcados.textContent = numeroMarcados;

// Mapeado de cartas senyores

for (const {
  nombre,
  foto,
  profesion: profesionSenyor,
  estado: estadoSenyor,
  twitter: twitterSenyor,
  marcado: marcadoSenyor,
} of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;

  // Profesion
  const profesion = senyorElemento.querySelector(".profesion-senyor");
  profesion.textContent = profesionSenyor;

  // Estado
  const estado = senyorElemento.querySelector(".estado-senyor");
  estado.textContent = estadoSenyor;

  // Twitter
  const twitter = senyorElemento.querySelector(".twitter-senyor");
  twitter.textContent = twitterSenyor;

  // Inicial

  const inicial = senyorElemento.querySelector(".inicial");

  const primeraPalabraNombre = nombre.split(" ")[0];
  const segundaPalabraNombre = nombre.split(" ")[1];

  if (primeraPalabraNombre.length < 3) {
    inicial.textContent = segundaPalabraNombre[0];
  } else {
    inicial.textContent = primeraPalabraNombre[0];
  }

  // Senyor Marcado
  // Icono
  const icono = senyorElemento.querySelector(".icono");
  // Estilo Foto
  const avatar = senyorElemento.querySelector(".avatar img");
  if (marcadoSenyor) {
    icono.classList.add("icono-marcado");
    avatar.classList.add("avatar-marcado");
  }

  principal.append(senyorElemento);
}
