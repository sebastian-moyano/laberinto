

function inicioCanvas(){
var ctx = document.getElementById('game').getContext('2d');
//agregamos imagenes
var jugador = new Image();
var Ladrillo = new Image();
var fondo = new Image();

var velocidad = .5;

fondo.src = "Imagen/Fondo.jpg";
jugador.src = "Imagen/Jugador.png";
Ladrillo.src = "Imagen/Ladrillo.png";

var cW = ctx.canvas.width;
var cH = ctx.canvas.height;


  function colision(a,b){
    var colision = false;
    if(b.x + b.w >= a.x && b.x < a.x + a.w){
      if(b.y + b.h >= a.y && b.y < a.y + a.h){
        colision = true;
      }
    }
    if(b.x <= a.x && b.x + b.w >= a.x + a.w){
      if(b.y <= a.y && b.y + b.h >= a.y + a.h){
        colision = true;
      }
    }
    if(a.x <= b.x && a.x + a.w >= b.x + b.w){
      if(a.y <= b.y && a.y + a.h >= b.y + b.h){
        colision = true;
      }
        return  colision;
  }
  }

var enemigoMoviendo = function(opcion){
  return{
    id: opcion.id || '',
    x: opcion.x || '',
    y: opcion.y || '',
    w: opcion.w || '',
    h: opcion.h ||'',
    image: opcion.image || Ladrillo
  }
}
var enemigos = [
  new enemigoMoviendo({id: "enemigo3", x: 100, y: 10, w: 20, h: 20 })
  ];
  
  var mostrarEnemigo = function(listaEnemigos){
    for(i = 0; i < listaEnemigos.length; i++){
  var enemigo = listaEnemigos[i];
     ctx.drawImage(enemigo.image, enemigo.x, enemigo.y+=.3, enemigo.w, enemigo.h);
    }
  }
  function cuadrado(){
    
    this.y = 10,
    this.x = 10,
    this.w = 20,
    this.h = 20.
    this.direccion,
    this.bg = "white";
    
    
    this.mostrar = function(){
 if(this.direccion === 'izquierda')
{
  this.x -= velocidad;
}
  else if(this.direccion === 'derecha'){
    this.x += velocidad;
  }
  else if(this.direccion === 'arriba'){
    this.y -= velocidad;
  }
  else if(this.direccion === 'abajo'){
    this.y += velocidad;
  }
    
      
      ctx.fillStyle = this.bg;
      ctx.drawImage(fondo, 0, 0, 316, 456);
      ctx.drawImage(jugador, this.x, this.y, 20, 20);
      
      
      
    }
  }
  
var cuadrado = new cuadrado();

  
  
  
  function animacion(){
    ctx.clearRect(0, 0, cW, cH);
    if(tiempo === 0){
  clearInterval(restar);
}
  
    
    //borde izquierdo
  if(colision(cuadrado,pared_1)){
    cuadrado.x += 1;
  }
  //borde derecho
  if(colision(cuadrado,pared_2)){
    cuadrado.x -= 1;
  }
  //borde inferior
  if(colision(pared_3,cuadrado)){
    cuadrado.y -= 1;
  }
  //borde superior
  if(colision(pared_4,cuadrado)){
    cuadrado.y += 1;
  }
  if(colision(cuadrado,pared_5)){
    cuadrado.x +=1;
  }
  if(colision(cuadrado,pared_6)){
    cuadrado.x -= 1;
  }
  if(colision(pared_7,cuadrado)){
    cuadrado.y -= 1;
  }
  if(colision(cuadrado,pared_8)){
    cuadrado.x -=1;
  }
  if(colision(cuadrado,pared_9)){
    cuadrado.x +=1;
  }
  if(colision(pared_10,cuadrado)){
    cuadrado.y -=1;
  }
  if(colision(pared_11,cuadrado)){
    cuadrado.y +=1;
  }
  if(colision(pared_12,cuadrado)){
    cuadrado.y -=1;
  }
  if(colision(pared_13,cuadrado)){
    cuadrado.y +=1;
  }
  if(colision(cuadrado,pared_14)){
    cuadrado.x -=1;
  }
  if(colision(cuadrado,pared_15)){
    cuadrado.x +=1;
  }
  if(colision(cuadrado,pared_16)){
    cuadrado.x -=1;
  }
  if(colision(pared_17,cuadrado)){
    cuadrado.y -=1;
  }
  if(colision(pared_18,cuadrado)){
    cuadrado.y +=1;
  }
  if(colision(cuadrado,pared_19)){
    cuadrado.x -=1;
  }
  if(colision(cuadrado,pared_20)){
    cuadrado.x +=1;
  }
  if(colision(pared_21,cuadrado)){
    cuadrado.y -=1;
  }
  if(colision(pared_22,cuadrado)){
    cuadrado.y -=1;
  }
  if(colision(pared_23,cuadrado)){
    cuadrado.y +=1;
  }
  if(colision(cuadrado,pared_24)){
    cuadrado.x -=1;
  }
  if(colision(pared_25,cuadrado)){
    cuadrado.y +=1;
  }
  if(colision(pared_26,cuadrado)){
    cuadrado.y -=1;
  }
  if(colision(cuadrado,pared_27)){
    cuadrado.x +=1;
  }
  if(colision(cuadrado,pared_28)){
    cuadrado.x -=1;
  }
  if(colision(cuadrado,pared_29)){
    cuadrado.x +=1;
  }
  if(colision(pared_30,cuadrado)){
    cuadrado.y -=1;
  }
  if(colision(puerta,cuadrado)){
    cuadrado.y -=.1;
    puerta.h = 8;
    swal.fire({ title:"OBJETIVO SUPERADO!! ✨✨",
    html: " <a class='b_siguiente' href='Nvl2/Segundo.html'><spam>SIGUIENTE NIVEL</spam></a>",
    icon:"success",
    allowOutsideClick: false,
    showConfirmButton: false,
    });
    
    clearInterval(restar);
  }
  
 
   
    
   
   pared_1.mostrar();
   pared_2.mostrar();
   pared_3.mostrar();
   cuadrado.mostrar();
   pared_4.mostrar();
   pared_5.mostrar();
   pared_6.mostrar();
   pared_7.mostrar();
   pared_8.mostrar();
   pared_9.mostrar();
   pared_10.mostrar();
   pared_11.mostrar();
   pared_12.mostrar();
   pared_13.mostrar();
   pared_14.mostrar();
   pared_15.mostrar();
   pared_16.mostrar();
   pared_17.mostrar();
   pared_18.mostrar();
   pared_19.mostrar();
   pared_20.mostrar();
   pared_21.mostrar();
   pared_22.mostrar();
   pared_23.mostrar();
   pared_24.mostrar();
   pared_25.mostrar();
   pared_26.mostrar();
   pared_27.mostrar();
   pared_28.mostrar();
   pared_29.mostrar();
   pared_30.mostrar();
   pared_31.mostrar();
   pared_32.mostrar();
   pared_33.mostrar();
   pared_34.mostrar();
   pared_35.mostrar();
   pared_36.mostrar();
   pared_37.mostrar();
   pared_38.mostrar();
   pared_39.mostrar();
   pared_40.mostrar();
   pared_41.mostrar();
   puerta.mostrar();
// pared_4.y += .2;

    
    //mostrarEnemigo(enemigos);
  }
  
  var animacionInterval = setInterval(animacion, 6);
  
  var arriba = document.getElementById('arriba');
var abajo = document.getElementById('abajo');
var derecha = document.getElementById('derecha');
var izquierda = document.getElementById('izquierda');

  
  document.addEventListener('keydown',function(event){
  if(event.keyCode === 37){
    cuadrado.direccion = 'izquierda';
    //para que no salga del canvas
    if(cuadrado.x < cW){
      cuadrado.x += 0;
      cuadrado.direccion = '';
    }
  }
});
document.addEventListener('keyup',function(event){
  if(event.keyCode === 37){
    cuadrado.x += 0;
    cuadrado.direccion = '';
  }
});
document.addEventListener('keydown',function(event){
  if(event.keyCode === 39){
    cuadrado.direccion = 'derecha';
    //para que no salga del canvas
    if(cuadrado.x > cW ){
      cuadrado.x -= 0;
      cuadrado.direccion = '';
    }
  }
});
document.addEventListener('keyup',function(event){
  if(event.keyCode === 39){
    cuadrado.x -= 0;
    cuadrado.direccion = '';
  }
});
document.addEventListener('keydown',function(event){
  if(event.keyCode === 38){
    cuadrado.direccion = 'arriba';
    //para que no salga del canvas
    if(cuadrado.y < cH){
      cuadrado.y += 0;
      cuadrado.direccion = '';
    }
  }
});
document.addEventListener('keyup',function(event){
  if(event.keyCode === 38){
    cuadrado.y -= 0;
    cuadrado.direccion = '';
  }
});
document.addEventListener('keydown',function(event){
  if(event.keyCode === 40){
    cuadrado.direccion = 'abajo';
    //para que no salga del canvas
    if(cuadrado.y > cH){
      cuadrado.y -= 0;
      cuadrado.direccion = '';
    }
  }
});
document.addEventListener('keyup',function(event){
  if(event.keyCode === 40){
    cuadrado.y += 0;
    cuadrado.direccion = '';
  }
});

arriba.addEventListener('click',function(event){
  cuadrado.direccion = 'arriba';
});
arriba.addEventListener('clickup',function(event){
  cuadrado.direccion = '';
});
abajo.addEventListener('click',function(event){
  cuadrado.direccion = 'abajo';
});
abajo.addEventListener('clickup',function(event){
  cuadrado.direccion = '';
});
derecha.addEventListener('click', function(event) {
  cuadrado.direccion = 'derecha';
 
  
});
derecha.addEventListener('clickup', function(event) {
  cuadrado.direccion = '';
});
izquierda.addEventListener('click', function(event) {
  cuadrado.direccion = 'izquierda';
});
izquierda.addEventListener('clickup', function(event) {
  cuadrado.direccion = '';
});
//crear paredes


function paredes(x, y, w, h, color){
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.color = color;
  
  this.mostrar = function(){
    this.draw();
  }
  this.draw = function(){
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
var pared_1 = new paredes(0,0,0,456,'red'); 
var pared_2 = new paredes(316,0,2,456, 'blue');
var pared_3 = new paredes(0,456,440,10,'green');
var pared_4 = new paredes(0,0,440,1,'black');
var pared_5 = new paredes(10,22,2,300,'brown');
var pared_6 = new paredes(300,22,2,300,'brown');
var pared_7 = new paredes(10,320,270,2,'brown');
var pared_8 = new paredes(40,22,2,140,'brown');
var pared_9 = new paredes(60,22,2,140,'brown');
var pared_10 = new paredes(40,22,22,2,'brown');
var pared_11 = new paredes(40,160,22,2,'brown');
var pared_12 = new paredes(90,22,100,2,'brown');
var pared_13 = new paredes(90,80,100,2,'brown');
var pared_14 = new paredes(90,22,2,60,'brown');
var pared_15 = new paredes(190,22,2,200,'brown');
var pared_16 = new paredes(187,80,2,147,'brown');
var pared_17 = new paredes(187,222,25,2,'brown');
var pared_18 = new paredes(187,227,25,2,'brown');
var pared_19 = new paredes(210,22,2,260,'brown');
var pared_20 = new paredes(255,22,2,260,'brown');
var pared_21 = new paredes(210,22,47,2,'brown');
var pared_22 = new paredes(50,284,255,2,'brown');
var pared_23 = new paredes(50,294,255,2,'brown');
var pared_24 = new paredes(50,284,2,10,'brown');
var pared_25 = new paredes(10,257,180,2,'brown');
var pared_26 = new paredes(10,251,180,2,'brown');
var pared_27 = new paredes(188,251,2,8,'brown');
var pared_28 = new paredes(100,120,2,138,'brown');
var pared_29 = new paredes(140,120,2,138,'brown');
var pared_30 = new paredes(100,120,40,2,'brown');
var pared_31 = new paredes(42,24,20,136,'#592A00B5');
var pared_32 = new paredes(92,24,98,56,'#592A00B5');
var pared_33 = new paredes(189,24,2,205,'#592A00B5');
var pared_34 = new paredes(191,222,20,6,'#592A00B5');
var pared_35 = new paredes(212,24,43,260,'#592A00B5');
var pared_36 = new paredes(102,122,38,136,'#592A00B5');
var pared_37 = new paredes(10,250,180,8,'#592A00B5');
var pared_38 = new paredes(50,284,250,10,'#592A00B5');
var pared_39 = new paredes(0,24,10,299,'#592A00B5');
var pared_40 = new paredes(300,24,20,299,'#592A00B5');
var pared_41 = new paredes(0,322,316,10,'#592A00B5');
var puerta = new paredes(270,320,40,6,'white');

function animacionPared(){
  requestAnimationFrame(animacionPared);
  ctx.clearRect(0,0,cW,cH);
  
}
var tiempo = 30;
 function restarTiempo(){
   tiempo--;
   document.getElementById("tiempo").innerHTML = "Tiempo: " +tiempo;
   if(tiempo == 0){
    
     swal.fire({
  title: "LA JUGADA ESTA AHÍ, PERO NECESITAS VERLA😉",
  text: "Intentalo de nuevo",
  icon: "error",
  allowOutsideClick: false,
  showConfirmButton: false,
  html: " <a class='b_reintentar' href='index.html'><spam>Reintentar</spam></a>"
 
});
     tiempo =0;
   }
 }
var  restar = setInterval(restarTiempo,1000);
function reiniciarTiempo(){
  if(tiempo==0){
    var  restar = setInterval(restarTiempo,1000);
  }
}



}


  



window.addEventListener('load', function(event){
  inicioCanvas();
});
