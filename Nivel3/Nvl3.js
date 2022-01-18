function inicioCanvas(){
var ctx = document.getElementById('nivel3').getContext('2d');
//agregamos imagenes
var jugador = new Image();
var Ladrillo = new Image();
var fondo = new Image();
var Muro = new Image();

var velocidad = .4;

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
  
  if(colision(puerta,cuadrado)){
    cuadrado.y -=velocidad;
    puerta.h = 8;
      swal.fire({ title:"SIGUE ASI 😎",
    html: " <a class='b_siguiente' href='../Nivel4/NIVEL4.html'><spam>SIGUIENTE NIVEL</spam></a>",
    icon:"success",
    allowOutsideClick: false,
    showConfirmButton: false,
    });
    clearInterval(restar);
  }
  
  
  if(colision(cuadrado,pared_5)){
    cuadrado.x -=velocidad;
  }
  if(colision(pared_6,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_7)){
    cuadrado.x -=velocidad;
  }
  if(colision(pared_8,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_9)){
    cuadrado.x += velocidad;
  }
  if(colision(cuadrado,pared_10)){
    cuadrado.x -=velocidad;
  }
  if(colision(pared_11,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_12)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_13,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(cuadrado,pared_14)){
    cuadrado.x -= velocidad;
  }
  if(colision(pared_15,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_16)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_17)){
    cuadrado.x += velocidad;
  }
  if(colision(pared_18,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(pared_24,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(pared_25,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_26)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_28)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_29)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_30,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(pared_31,cuadrado)){
    cuadrado.y +=velocidad;
  }
  if(colision(cuadrado,pared_33)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_34)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_35,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(pared_37,cuadrado)){
    cuadrado.y -=velocidad;
  }
  if(colision(cuadrado,pared_38)){
    cuadrado.x -= velocidad;
  }
  if(colision(cuadrado,pared_39)){
    cuadrado.x +=velocidad;
  }
  if(colision(pared_40,cuadrado)){
    cuadrado.y += velocidad;
  }
  if(colision(cuadrado,pared_42)){
    cuadrado.x -=velocidad;
  }
  if(colision(cuadrado,pared_43)){
    cuadrado.x +=velocidad;
  }
  if(colision(cuadrado,pared_46)){
    cuadrado.x +=velocidad;
  }
  if(colision(cuadrado,pared_47)){
    cuadrado.x -=velocidad;
  }
  if(colision(pared_45,misil_1)){
    misil_1.y -=178;
  }
  if(colision(cuadrado,misil_1)){
    cuadrado.y -=velocidad;
    cuadrado.y = 0;
    cuadrado.x = 5;
  }
  if(colision(misil_2,pared_2)){
    misil_2.x -=200;
  }
  if(colision(cuadrado,misil_2)){
    cuadrado.x += velocidad;
    cuadrado.y = 0;
    cuadrado.x = 5;
  }
  if(colision(misil_3,pared_2)){
    misil_3.x -=110;
  }
  if(colision(cuadrado,misil_3)){
    cuadrado.x +=velocidad;
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if(colision(misil_4,pared_17)){
    misil_4.x +=110;
  }
  if(colision(cuadrado,misil_4)){
    cuadrado.x -=velocidad;
    cuadrado.x = 5;
    cuadrado.y = 0;
  }
  if(colision(invisible,muro)){
    muro.y -=0;
    pared_48.w = 43;
    pared_49.w = 43;
    relleno_1.w = 43;
  }
  
  if(colision(pared_48,cuadrado)){
    cuadrado.y -= velocidad;
  }
  if(colision(pared_49,cuadrado)){
    cuadrado.y += velocidad;
  }
  if(colision(muro,pared_16)){
    let animacion_frame = requestAnimationFrame(animacion);
    muro.x -= velocidad;
   cancelAnimationFrame(animacion_frame);
   pos =1;
   
  }
 if(colision(pared_3,muro)){
   let animacion_frame = requestAnimationFrame(animacion);
   muro.y -= velocidad;
   
   //cancelAnimationFrame(animacion_frame);
   
 }
 if(colision(cuadrado,pared_50)){
   cuadrado.y -=0;
   pared_48.w = 4;
   pared_49.w = 4;
   relleno_1.w = 4;
 }
 if(colision(muro,pared_52)){
   muro.x -=velocidad;
   pared_52.h = 66;
   pared_53.h = 66;
   relleno_2.h = 66;
 }
 if(colision(cuadrado,pared_52)){
   cuadrado.x -=velocidad;
 }
 if(colision(cuadrado,pared_53)){
   cuadrado.x +=velocidad;
 }
 if(colision(cuadrado,pared_54)){
   cuadrado.y -=0;
   pared_52.h = 4;
   pared_53.h = 4;
   relleno_2.h = 4;
 }
 if(colision(cuadrado,pared_55)){
   cuadrado.y +=0;
   pared_52.h = 4;
   pared_54.h = 4;
   relleno_2.h = 4;
 }
 if(colision(muro,pared_2)){
   let animacion_frame = requestAnimationFrame(animacion);
   muro.x -= velocidad;
   muro.y -=1;
   cancelAnimationFrame(animacion_frame);
 }
 if(colision(muro,pared_56)){
   muro.x -=0;
   pared_58.w = -40;
   pared_59.w = -40;
   relleno_3.w = -40;
 }
 if(colision(cuadrado,pared_58)){
   cuadrado.y +=velocidad;
 }
 if(colision(cuadrado,pared_59)){
   cuadrado.y -= velocidad;
 }
 if(colision(cuadrado,pared_56)){
   cuadrado.x-=velocidad;
   pared_58.w = 4;
   pared_59.w = 4;
   relleno_3.w = 4;
 }
 if(colision(cuadrado,pared_57)){
   cuadrado.x-=velocidad;
   pared_58.w = 4;
   pared_59.w = 4;
   relleno_3.w = 4;
 }
 if(colision(pared_4,muro)){
   muro.y +=velocidad;
   muro.x = 5;
   muro.y = 2;
 }
 if(colision(muro,pared_60)){
   muro.y +=0;
   if(pared_59.w = -40, pared_58.w = -40, relleno_3.w = -40){
     pared_59.w = 4;
     pared_58.w = 4;
     relleno_3.w = 4;
   }
   else{
     pared_59.w = -40;
     pared_58.w = -40;
     relleno_3.w = -40;
   }
 }
 if(colision(invisible_2,muro)){
   muro.y -= velocidad;
 }

   
   
  
  
  
  
  
  
  
  
   
   pared_1.mostrar();
   pared_2.mostrar();
   pared_3.mostrar();
   cuadrado.mostrar();
   pared_4.mostrar();
   puerta.mostrar();
   muro.mostrar();
   muro.x += .2;
   if(pos===1){
     muro.y +=.2;
   }
  else{
    muro.x +=.2;
   }
  
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
   pared_42.mostrar();
   pared_43.mostrar();
   pared_44.mostrar();
   pared_45.mostrar();
   pared_46.mostrar();
   pared_47.mostrar();
   misil_1.mostrar();
   misil_1.y +=.8;
   misil_2.mostrar();
   misil_2.x +=.8;
   misil_3.mostrar();
   misil_3.x += .6;
   misil_4.mostrar();
   misil_4.x -= .6;
   pared_48.mostrar();
   pared_49.mostrar();
   relleno_1.mostrar();
   invisible.mostrar();
   pared_50.mostrar();
   pared_51.mostrar();
   pared_52.mostrar();
   pared_53.mostrar();
   relleno_2.mostrar();
   pared_54.mostrar();
   pared_55.mostrar();
   pared_56.mostrar();
   pared_57.mostrar();
   pared_58.mostrar();
   pared_59.mostrar();
   relleno_3.mostrar();
   pared_60.mostrar();
   pared_61.mostrar();
   invisible_2.mostrar();
  
    
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
var pared_5 = new paredes(30,0,2,70,'brown');
var pared_6 = new paredes(30,70,50,2,'brown');
var pared_7 = new paredes(78,71,2,90,'brown');
var pared_8 = new paredes(78,160,10,2,'brown');
var pared_9 = new paredes(86,0,2,161,'brown');
var pared_10 = new paredes(120,100,2,100,'brown');
var pared_11 = new paredes(120,100,10,2,'brown');
var pared_12 = new paredes(130,100,2,140,'brown');
var pared_13 = new paredes(72,200,50,2,'brown');
var pared_14 = new paredes(72,200,2,40,'brown');
var pared_15 = new paredes(72,240,60,2,'brown');
var pared_16 = new paredes(170,0,2,120,'brown');
var pared_17 = new paredes(200,0,2,120,'brown');
var pared_18 = new paredes(170,120,32,2,'brown');
var pared_19 = new paredes(172,0,28,120,'#001A7173');
var pared_20 = new paredes(32,0,55,70,'#001A7173');
var pared_21 = new paredes(80,70,6,90,'#001A7173');
var pared_22 = new paredes(73,202,49,40,'#001A7173');
var pared_23 = new paredes(122,102,8,140,'#001A7173');
var pared_24 = new paredes(170,180,200,2,'brown');
var pared_25 = new paredes(169,210,200,2,'brown');
var pared_26 = new paredes(168,180,2,31,'brown');
var pared_27 = new paredes(170,182,200,28,'#001A7173');
var pared_28 = new paredes(30,280,2,50,'brown');
var pared_29 = new paredes(60,280,2,50,'brown');
var pared_30 = new paredes(30,280,32,2,'brown');
var pared_31 = new paredes(31,329,30,2,'brown');
var pared_32 = new paredes(32,282,28,48,'#001A7173');
var pared_33 = new paredes(31,400,2,70,'brown');
var pared_34 = new paredes(90,400,2,70,'brown');
var pared_35 = new paredes(31,400,61,2,'brown');
var pared_36 = new paredes(32,400,58,60,'#001A7173');
var pared_37 = new paredes(200,250,30,2,'brown');
var pared_38 = new paredes(200,250,2,60,'brown');
var pared_39 = new paredes(230,250,2,60,'brown');
var pared_40 = new paredes(200,310,32,2,'brown');
var pared_41 = new paredes(202,252,28,58,'#001A7173');
var pared_42 = new paredes(110,350,2,4,'brown');
var pared_43 = new paredes(112,350,2,4,'brown');
var pared_44 = new paredes(150,454,4,2,'brown');
var pared_45 = new paredes(150,452,4,2,'brown');
var pared_46 = new paredes(152,270,2,4,'brown');
var pared_47 = new paredes(150,270,2,4,'brown');
var misil_1 = new paredes(150,272,4,6,'blue');
var misil_2 = new paredes(114,350,6,4,'blue');
var misil_3 = new paredes(200,30,4,10,'blue');
var misil_4 = new paredes(314,80,4,10,'blue');
//48+49+invisible+relleno_1
var pared_48 = new paredes(129,100,4,2,'black');
var pared_49 = new paredes(129,108,4,2,'black');
var relleno_1 = new paredes(129,102,4,6,'black');
var invisible = new paredes(130,102,44,2,'#42445A00');
//50+51
var pared_50 = new paredes(28,420,4,4,'black');
var pared_51 = new paredes(28,424,4,4,'black');
//52+53+relleno_2
var pared_52 = new paredes(170,119,2,6,'purple');
var pared_53 = new paredes(178,119,2,6,'purple');
var relleno_2 = new paredes(172,119,6,6,'purple');
//54+55
var pared_54 = new paredes(150,348,4,4,'purple');
var pared_55 = new paredes(150,352,4,4,'purple');
//56+57
var pared_56 = new paredes(313,340,4,4,'red');
var pared_57 = new paredes(313,336,4,4,'red');
//58+59+relleno_3
var pared_58 = new paredes(169,208,4,4,'red');
var pared_59 = new paredes(169,200,4,4,'red');
var relleno_3 = new paredes(169,202,4,6,'red');
var pared_60 = new paredes(313,90,4,4,'red');
var pared_61 = new paredes(313,94,4,4,'red');
var invisible_2= new paredes(0,17,150,2,'#42445A00');








var puerta = new paredes(270,0,30,6,'red');

// bloques





function animacionPared(){
  requestAnimationFrame(animacionPared);
  ctx.clearRect(0,0,cW,cH);
  
}
var tiempo = 90;
 function restarTiempo(){
   tiempo--;
   document.getElementById("tiempo").innerHTML = "Tiempo: " +tiempo;
   if(tiempo == 0){
    
     swal.fire({
  title: "LA JUGADA ESTA AHÍ, PERO NECESITAS VERLA😉",
  text: "Intentalo de nuevo",
  icon: "error",
  allowOutsideClick: false,
  html:" <a class='b_reintentar' href='NIVEL3.html'><spam>Reintentar</spam></a>",
  showConfirmButton:false,
 
  
});

     tiempo =0;
   }
 }
var  restar = setInterval(restarTiempo,1000);

//dibuja muro


function muro(){
  this.x = 5;
  this.y = 2;
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