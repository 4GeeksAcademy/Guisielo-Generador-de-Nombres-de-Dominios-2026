import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon','surfnet','colorio','colones','campus'];
  let extensiones = ['.com', '.net', '.us', '.io', '.es'];

  const contenedor = document.getElementById("dominios");
  contenedor.innerHTML = "";

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensiones) {
          const extSinPunto = ext.slice(1);
          let resultado;

          if (n.endsWith(extSinPunto)) {//dominio hackeado
            resultado =
              `${p}${a}${n.slice(0, n.length - extSinPunto.length)}${ext}  &lt;-- hackeado 😎`;
          } else {
            resultado = `${p}${a}${n}${ext}`;
          }
          contenedor.innerHTML += `${resultado}<br>`;
          console.log(resultado.replace("&lt;", "<"));
        }
      }
    }
  }
  //console.log("Hello Rigo from the console!");
};