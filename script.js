var data = new Date();
//var hora = data.getHours();
var hora = 19;
var minuto = data.getMinutes();
if (minuto < 10) {
  minuto = "0" + minuto;
} else {
  minuto = minuto + "";
}
var tempo = document.getElementById("tempo");
tempo.innerHTML = `São ${hora}:${minuto}`;
var img = document.getElementById("imagem");
if (hora < 12) {
  img.setAttribute("src", "fotomanha.png");
  document.body.style.background = "#e2cd9f";
  document.body.style.color = "#e2cd9f";
} else if (hora < 18) {
  img.setAttribute("src", "fototarde.png");
  document.body.style.background = "#b9846f";
  document.body.style.color = "#b9846f";
} else {
  img.setAttribute("src", "fotonoite.png");
  document.body.style.background = "#143840";
  document.body.style.color = "#143840";
}
console.log(minuto);
