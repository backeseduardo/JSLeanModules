// https://tech.olx.com/webpack-from-zero-to-hero-cf1b77b852c9

import andHisNameIs from './assets/and-his-name-is-john-cena.mp3';
import johnCena from './assets/his-name-is-john-cena.jpg';

import './assets/sass/style.scss';

document.body.innerHTML = '<div id="myMemes"></div>';
document.getElementById('myMemes').innerHTML = `
  <h1>And his name is...</h1>
  <img src="${johnCena}" />
`;

const audio = new Audio(andHisNameIs);
const img = document.querySelector("#myMemes img");

img.addEventListener("load", event => audio.play());