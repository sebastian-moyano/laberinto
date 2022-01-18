function inicioCanvas(){
var ctx = document.getElementById('nivel4').getContext('2d');
//agregamos imagenes
var jugador = new Image();
var Ladrillo = new Image();
var fondo = new Image();
var Muro = new Image();

var velocidad = .5;

fondo.src = "Imagen/FondoNivel3.jpg";
jugador.src = "Imagen/Jugador.png";
Ladrillo.src = "Imagen/Ladrillo.png";
Muro.src = "Imagen/Muro.jpg";

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
  new enemigoMoviendo({id: "enemigo3", x: 100, y: 10, w: 15, h: 15 })
  ];
  
  var mostrarEnemigo = function(listaEnemigos){
    for(i = 0; i < listaEnemigos.length; i++){
  var enemigo = listaEnemigos[i];
     ctx.drawImage(enemigo.image, enemigo.x, enemigo.y+=.3, enemigo.w, enemigo.h);
    }
  }
  function cuadrado(){
    this.y = 0,
    this.x = 5,
    this.w = 15,
    this.h = 15.
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
      ctx.drawImage(jugador, this.x, this.y, 15, 15);
      
      
      
    }
  }
  
var cuadrado = new cuadrado();

  var pos;
  var pos_2;
  
  
  function animacion(){
    
    ctx.clearRect(0, 0, cW, cH);
    if(tiempo === 0){
  clearInterval(restar);
}
    
    
    //borde izquierdo
  if(colision(cuadrado,pared_1)){
    cuadrado.x += velocidad;
  }
  //borde derecho
  if(colision(cuadrado,pared_2)){
    cuadrado.x -= velocidad;
  }
  //borde inferior
  if(colision(pared_3,cuadrado)){
    cuadrado.y -= velocidad;
  }
  //borde superior
  if(colision(pared_4,cuadrado)){
    cuadrado.y += velocidad;
  }
  
  if(colision(cuadrado,puerta)){
    cuadrado.x -=velocidad;
    puerta.w = 8;
      swal.fire({ title:"SIGUE ASI 😎",
    html: " <a class='b_siguiente' href='../Nivel5/NIVEL5.html'><spam>SIGUIENTE NIVEL</spam></a>",
    icon:"success",
    allowOutsideClick: false,
    showConfirmButton: false,
    });
    clearInterval(restar);
  }
  if(colision(cuadrado,pared_5)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_6)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_7,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_8)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_9)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_10,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(pared_11,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_12)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_13)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_14,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(pared_18,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(pared_19,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_20)){
    cuadrado.x +=velocidad;
  }
  if(colision(cuadrado,pared_22)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_23)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_24,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(pared_25,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(cuadrado,pared_27)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_28)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_29,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(pared_30,cuadrado)){
    cuadrado.y-=velocidad;
  }
  if(colision(cuadrado,pared_32)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_33)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_34,cuadrado)){
    cuadrado.y -= velocidad;
  }
  if(colision(invisible_34,cuadrado)){
    cuadrado.y -= velocidad;
  }
  
  if(colision(pared_35,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(invisible_35,cuadrado)){
    cuadrado.y += velocidad;
  }
  if(colision(pared_4,misil_1)){
    misil_1.y =190;
    misil_1.x =0;
  }
  if(colision(misil_2,pared_2)){
    misil_2.y =190;
    misil_2.x =15;
  }
  if (colision(misil_3,pared_2)) {
    misil_3.y = 190;
    misil_3.x = 30;
  }
  if(colision(pared_3,misil_4)){
    misil_4.x = 0;
    misil_4.y = 218;
  }
  if(colision(misil_5,pared_2)){
    misil_5.x = 15;
    misil_5.y = 218;
  }
  if(colision(misil_6,pared_2)){
    misil_6.x = 30;
    misil_6.y =218;
  }
  if(colision(misil_7,pared_2)){
    misil_7.x = 30;
    misil_7.y = 205;
  }
  if(colision(cuadrado,misil_1)){
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if(colision(cuadrado,misil_2)){
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if (colision(cuadrado,misil_3)) {
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if (colision(cuadrado,misil_4)) {
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if (colision(cuadrado,misil_5)) {
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if (colision(cuadrado,misil_6)) {
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if (colision(cuadrado,misil_7)) {
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if(tiempo == 100){
    pared_34.w = 60;
    pared_35.w = 60;
  }
  if(tiempo == 80){
    pared_34.w = 15;
    pared_35.w = 15;
  }
  if (tiempo == 60) {
    pared_34.w = 60;
    pared_35.w = 60;
  }
  if (tiempo == 40) {
    pared_34.w = 15;
    pared_35.w = 15;
  }
  if (tiempo == 20) {
    pared_34.w = 60;
    pared_35.w = 60;
  }
  if (tiempo == 10) {
    pared_34.w = 15;
    pared_35.w = 15;
  }
  if(colision(muro,invisible_1)){
    muro.x -= .3;
  }
  if(colision(pared_3,muro)){
    muro.x = 106;
    muro.y = 0;
  }
  if(colision(muro,boton_1)){
    muro.y +=0;
    pbt_1.h = 65;
  }
  if(colision(cuadrado,pbt_1)){
    cuadrado.x -=velocidad;
  }
  if(colision(muro,boton_2)){
    muro.x -=0;
    pbt_2.w = 50;
  }
  if(colision(pbt_2,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(muro,boton_3)){
    muro.y +=0;
    pbt_3.h = 50;
  }
  if(colision(cuadrado,pbt_3)){
    cuadrado.x -=velocidad;
  }
  if(colision(muro,boton_4)){
    muro.y +=0;
    pbt_4.w = -50;
    pbt_4.x = 205;
  }
  if(colision(cuadrado,pbt_4)){
    cuadrado.y -=velocidad;
  }
  if(colision(muro,boton_5)){
    muro.x +=0;
    pbt_5.h = -60;
    pbt_5.y = 332;
    pbt_3.h = 15;
  }
  if(colision(cuadrado,pbt_5)){
    cuadrado.x -= velocidad;
  }
  if(colision(cuadrado,boton_6)){
    cuadrado.y +=0;
    pbt_1.h = 15;
  }
  if(colision(boton_6invisible,cuadrado)){
    cuadrado.y +=0;
    pbt_1.h = 15;
  }
 

 
  
  
  
  
   
   pared_1.mostrar();
   pared_2.mostrar();
   pared_3.mostrar();
   cuadrado.mostrar();
   pared_4.mostrar();
   puerta.mostrar();
   muro.mostrar();
   muro.y +=.3;
   if(colision(invisible_2,muro)){
     muro.y -=.3;
     muro.x +=.3;
   }
   if(colision(invisible_3,muro)){
     muro.y -=.3;
     muro.x -=.3;
   }
   boton_1.mostrar();
  boton_2.mostrar();
  boton_3.mostrar();
  boton_4.mostrar();
  boton_5.mostrar();
  pbt_1.mostrar();
  pbt_2.mostrar();
  pbt_3.mostrar();
  pbt_4.mostrar();
  pbt_5.mostrar();
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
   misil_1.mostrar();
   misil_1.x +=.3;
   misil_1.y -=.3;
  misil_2.mostrar();
  if(tiempo < 119){
    misil_2.x +=.4;
  misil_2.y -=.2;
  misil_2.y +=.3;
  }
  misil_3.mostrar();
  if(tiempo < 117){
    misil_3.x +=.4;
  misil_3.y -=.4;
  misil_3.y +=.2;
  }
  misil_4.mostrar();
  misil_4.x +=.3;
  misil_4.y +=.3;
  misil_5.mostrar();
  if(tiempo < 119){
    misil_5.x +=.4;
  misil_5.y +=.2;
  misil_5.y -=.3;
  }
  misil_6.mostrar();
  if(tiempo < 117){
    misil_6.x +=.4;
  misil_6.y -=.2;
  misil_6.y +=.4;
  }
  misil_7.mostrar();
  if(tiempo < 118){
    misil_7.x +=.4;
  }
  invisible_34.mostrar();
  invisible_35.mostrar();
  invisible_1.mostrar();
  invisible_2.mostrar();
  invisible_3.mostrar();
  boton_6.mostrar();
  boton_6invisible.mostrar();
  
  
    
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
var pared_1 = new paredes(0,0,0,456,'brown'); 
var pared_2 = new paredes(316,0,2,456, 'brown');
var pared_3 = new paredes(0,456,440,10,'brown');
var pared_4 = new paredes(0,0,440,1,'brown');
var pared_5 = new paredes(120,0,2,100,'brown');
var pared_6 = new paredes(160,0,2,100,'brown');
var pared_7 = new paredes(120,100,42,2,'brown');
var pared_8 = new paredes(120,140,2,150,'brown');
var pared_9 = new paredes(160,140,2,150,'brown');
var pared_10 = new paredes(120,140,42,2,'brown');
var pared_11 = new paredes(120,290,42,2,'brown');
var pared_12 = new paredes(120,330,2,140,'brown');
var pared_13 = new paredes(160,330,2,140,'brown');
var pared_14 = new paredes(120,330,42,2,'brown');
var pared_15 = new paredes(122,0,38,100,'#001A7173');
var pared_16 = new paredes(122,142,38,148,'#001A7173');
var pared_17 = new paredes(122,332,38,140,'#001A7173');
var pared_18 = new paredes(0,190,32,2,'brown');
var pared_19 = new paredes(0,220,32,2,'brown');
var pared_20 = new paredes(31,190,2,32,'brown');
var pared_21 = new paredes(0,190,32,30,'brown');
var pared_22 = new paredes(200,60,2,130,'brown');
var pared_23 = new paredes(210,60,2,130,'brown');
var pared_24 = new paredes(200,60,12,2,'brown');
var pared_25 = new paredes(200,190,12,2,'brown');
var pared_26 = new paredes(202,62,8,128,'#001A7173');
var pared_27 = new paredes(200,230,2,150,'brown');
var pared_28 = new paredes(210,230,2,150,'brown');
var pared_29 = new paredes(200,229,12,2,'brown');
var pared_30 = new paredes(200,380,12,2,'brown');
var pared_31 = new paredes(202,230,8,150,'#001a7173');
var pared_32 = new paredes(270,182,2,58,'brown');
var pared_33 = new paredes(272,182,2,58,'brown');
//34+35 cuidadoras de puerta
var pared_34 = new paredes(264,178,15,4,'brown');
var invisible_34 = new paredes(258,178,25,4,'#FFFFFF00');
var pared_35 = new paredes(264,238,15,4,'brown');
var invisible_35 = new paredes(258,238,25,4,'#FFFFFF00');
var misil_1 = new paredes(0,190,4,4,'blue');
var misil_2 = new paredes(15,190,4,4,'blue');
var misil_3 = new paredes(30,190,4,4,'blue');
var misil_4 = new paredes(0,218,4,4,'blue');
var misil_5 = new paredes(15,218,4,4,'blue');
var misil_6 = new paredes(30,218,4,4,'blue');
var misil_7 = new paredes(30,205,4,4,'blue');
var invisible_1 = new paredes(120,0,2,100,'#ffffff00');
var invisible_2 = new paredes(100,116,100,2,'#ffffff00');
var invisible_3 = new paredes(105,330,120,2,'#ffffff00');
var boton_1 =new paredes(112,95,8,4,'red');
var boton_2 =new paredes(158,98,4,8,'black');
var boton_3 =new paredes(192,180,8,4,'orange');
var boton_4 =new paredes(192,300,8,4,'purple');
var boton_5 =new paredes(140,324,4,8,'yellow');
var pbt_1 = new paredes(120,90,2,10,'red');
var pbt_2 = new paredes(158,60,10,2,'black');
var pbt_3 = new paredes(200,186,2,10,'orange');
var pbt_4 = new paredes(196,328,14,2,'purple');
var pbt_5 = new paredes(120,326,2,10,'yellow');
var boton_6 = new paredes(33,202,8,4,'red');
var boton_6invisible = new paredes(31,202,25,4,'#ffffff00');





var puerta = new paredes(310,195,6,30,'red');

// bloques





function animacionPared(){
  requestAnimationFrame(animacionPared);
  ctx.clearRect(0,0,cW,cH);
  
}
var tiempo = 120;
 function restarTiempo(){
   tiempo--;
   document.getElementById("tiempo").innerHTML = "Tiempo: " +tiempo;
   if(tiempo == 0){
    
     swal.fire({
  title: "LA JUGADA ESTA AHÍ, PERO NECESITAS VERLA😉",
  text: "Intentalo de nuevo",
  icon: "error",
  allowOutsideClick: false,
  html:" <a class='b_reintentar' href='NIVEL4.html'><spam>Reintentar</spam></a>",
  showConfirmButton:false,
 
  
});

     tiempo =0;
   }
 }
var  restar = setInterval(restarTiempo,1000);

//dibuja muro


function muro(){
  this.x = 106;
  this.y = 0;
  this.w = 15;
  this.h = 15;
  
  this.bg = "white";
  
  this.mostrar = function(){
  
  ctx.fillStyle = this.bg;
      
      ctx.drawImage(Muro,this.x,this.y, 15, 15);
  }
}
var muro = new muro();
  

}

window.addEventListener('load', function(event){
  inicioCanvas();
});