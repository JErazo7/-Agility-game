var inicio = new Date().getTime();
var menorTiempo = 200;
function get_random_color() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function aparecerForma() {
  var top = Math.random()*300;
  var left = Math.random()*800;
  var width = (Math.random()*200) + 100;
  var color = get_random_color();
  if(Math.random()>0.5){
    document.getElementById('forma').style.borderRadius = "50%";
  }else {
    document.getElementById('forma').style.borderRadius = "0%";
  }
  document.getElementById('forma').style.display = "block";
  document.getElementById('forma').style.top = top+"px";
  document.getElementById('forma').style.left = left+"px";
  document.getElementById('forma').style.width = width+"px";
  document.getElementById('forma').style.backgroundColor = color;
  inicio =  new Date().getTime();

}

setTimeout(aparecerForma,Math.random()*2000);

function desaparecerFigura() {
  document.getElementById('forma').style.display = "none";
  var fin = new Date().getTime();
  var diferencia = (fin - inicio)/1000;
  if(diferencia < menorTiempo)
      menorTiempo = diferencia;
  document.getElementById('reaccion').innerHTML = diferencia +" segundos.";
  document.getElementById('mejorTiempo').innerHTML = menorTiempo +" segundos.";
  setTimeout(aparecerForma,Math.random()*2000);
}
