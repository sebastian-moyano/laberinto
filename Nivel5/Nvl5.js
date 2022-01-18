function inicioCanvas(){
var ctx = document.getElementById('nivel5').getContext('2d');
//agregamos imagenes
var jugador = new Image();
var Ladrillo = new Image();
var fondo = new Image();
var Muro = new Image();

var velocidad = .5;

fondo.src = "Imagen/Fondo_nvl5.jpg";
jugador.src = "Imagen/Jugador.png";
Ladrillo.src = "Imagen/Ladrillo.png";
Muro.src = "Imagen/Muro.jpg";

var cW = ctx.canvas.width;
var cH = ctx.canvas.height;
var disparos = [];


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
  new enemigoMoviendo({id: "enemigo1", x: 10, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo2", x: 40, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo3", x: 70, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo4", x: 100, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo5", x: 130, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo6", x: 160, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo7", x: 190, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo8", x: 220, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo9", x: 250, y: 2, w: 15, h: 15 }),
  new enemigoMoviendo({id: "enemigo10", x: 280, y: 2, w: 15, h: 15 }),
  ];
  
  var mostrarEnemigo = function(listaEnemigos){
    for(i = 0; i < listaEnemigos.length; i++){
  var enemigo = listaEnemigos[i];
     ctx.drawImage(enemigo.image, enemigo.x, enemigo.y+=.5, enemigo.w, enemigo.h);
     cuadrado.pasaCanvasEnemigo(enemigo);
    }
  }
  function cuadrado(){
    this.y = 350,
    this.x = 150,
    this.w = 15,
    this.h = 15.
    this.direccion,
   // this.disparo = [],
    this.bg = "white";
    
    this.EstadoDelJuego ={
      message: "",
      fillStyle: 'yellow',
      font: 'italic bold 20px Arial, sans-serif',
    }
    
    
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
 
    moverDisparos();
 dibujarDisparos();
 
   
    
  }
  
var cuadrado = new cuadrado();

 var pos;
  
  
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
      swal.fire({ title:"FELICITACIONES LLEGASTE AL FINAL 😎",
    //html: " <a class='b_siguiente' href='../Nivel6/NIVEL6.html'><spam>SIGUIENTE NIVEL</spam></a>",
    icon:"success",
    allowOutsideClick: false,
    showConfirmButton: false,
    });
    clearInterval(restar);
  }
 if(colision(pared_3,muro)){
   muro.y += 0;
   
   cuadrado.y = 350;
   muro.y = -100;
   muro.x = 150;
 }
if(colision(pared_3,muro1)){
   muro1.y += 0;
  // cuadrado.x = 150;
   cuadrado.y = 350;
   muro1.y = -100;
   muro1.x = 10;
 }
 if (colision(pared_3,muro2)) {
   muro2.y += 0;
   cuadrado.x = 150;
   cuadrado.y = 350;
   muro2.y = -100;
   muro2.x = 250;
 }
if(colision(pared_6,cuadrado)){
  cuadrado.y += velocidad;
}
if(colision(pared_5,cuadrado)){
  cuadrado.y -= velocidad;
}
if(colision(cuadrado,pared_7)){
  cuadrado.x -= velocidad;
}
if(colision(cuadrado,pared_8)){
  cuadrado.x += velocidad;
}
if(colision(muro,pared_7)){
  muro.x -= velocidad;
}
if(colision(muro,pared_12)){
  muro.x += velocidad;
}
if(colision(pared_9,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_10,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_11)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_12)){
  cuadrado.x +=velocidad;
}
if(colision(muro,pared_16)){
  muro.x += velocidad;
}
if(colision(pared_13,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_14,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_15)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_16)){
  cuadrado.x +=velocidad;
}
if(colision(muro,pared_19)){
  muro.x -= velocidad;
}
if(colision(pared_17,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_18,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_19)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_20)){
  cuadrado.x +=velocidad;
}
if(colision(muro,pared_23)){
  muro.x -= velocidad;
}
if(colision(pared_21,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_22,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_23)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_24)){
  cuadrado.x +=velocidad;
}
if(colision(muro,pared_27)){
  muro.x -= velocidad;
}
if(colision(pared_25,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_26,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_27)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_28)){
  cuadrado.x +=velocidad;
}
if(colision(cuadrado,muro)){
  muro.y-=0;
  cuadrado.y = 350;
}
if(colision(muro,pared_27)){
  muro.x -= velocidad;
}
if(colision(pared_29,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_30,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_31)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_32)){
  cuadrado.x +=velocidad;
}
if(colision(muro1,pared_32)){
  muro1.x += velocidad;
}
if(colision(muro1,pared_8)){
  muro1.x += velocidad;
}
if(colision(muro1,pared_35)){
  muro1.x -= velocidad;
}
if(colision(muro1,pared_12)){
  muro1.x -= velocidad;
}
if (colision(muro1, pared_11)) {
  muro1.x -= velocidad;
}
if(colision(pared_33,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_34,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_35)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_36)){
  cuadrado.x +=velocidad;
}
if (colision(muro1, pared_40)) {
  muro1.x += velocidad;
}
if(colision(pared_37,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_38,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_39)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_40)){
  cuadrado.x +=velocidad;
}
if (colision(muro1, pared_43)) {
  muro1.x -= velocidad;
}
 if(colision(pared_41,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_42,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_43)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_44)){
  cuadrado.x +=velocidad;
} 
if (colision(muro1, pared_48)) {
  muro1.x += velocidad;
}
 if(colision(pared_45,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_46,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_47)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_48)){
  cuadrado.x +=velocidad;
} 
if (colision(muro1, pared_51)) {
  muro1.x -= velocidad;
}
 if(colision(pared_49,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_50,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_51)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_52)){
  cuadrado.x +=velocidad;
} 
if (colision(muro2, pared_55)) {
  muro2.x -= velocidad;
}
 if(colision(pared_53,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_54,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_55)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_56)){
  cuadrado.x +=velocidad;
} 
if (colision(muro2, pared_8)) {
  muro2.x += velocidad;
}
if (colision(muro2, pared_36)) {
  muro2.x += velocidad;
}
if (colision(muro2, pared_59)) {
  muro2.x -= velocidad;
}
 if(colision(pared_57,cuadrado)){
  cuadrado.y -=velocidad;
}
if(colision(pared_58,cuadrado)){
  cuadrado.y +=velocidad;
}
if(colision(cuadrado,pared_59)){
  cuadrado.x -=velocidad;
}
if(colision(cuadrado,pared_60)){
  cuadrado.x +=velocidad;
} 
if (colision(muro2, pared_16)) {
  muro2.x += velocidad;
}
if (colision(muro2, pared_20)) {
  muro2.x += velocidad;
}
if (colision(muro2, pared_23)) {
  muro2.x -= velocidad;
}
if (colision(muro2, pared_28)) {
  muro2.x += velocidad;
}
  
  
   
   pared_1.mostrar();
   pared_2.mostrar();
   pared_3.mostrar();
   cuadrado.mostrar();
   pared_4.mostrar();
   puerta.mostrar();
   muro.mostrar();
   muro.y +=.4;
   
   if (colision(pared_5, muro)) {
     muro.y -= .4;
     muro.x -= .4;
   }
   if(colision(pared_9,muro)){
     muro.y -=.4;
     muro.x +=.4;
   }
   if(colision(pared_13,muro)){
     muro.y -=.4;
     muro.x +=.4;
   }
   if(colision(pared_17,muro)){
     muro.y -=.4;
     muro.x -=.4;
   }
   if(colision(pared_21,muro)){
     muro.y -=.4;
     muro.x -=.4;
   }
    if(colision(pared_25,muro)){
     muro.y -=.4;
     muro.x -=.4;
   }
   muro1.mostrar();
   muro1.y +=.4;
   if (colision(pared_29, muro1)) {
     muro1.y -= .4;
     muro1.x += .4;
   }
   if(colision(pared_5,muro1)){
     muro1.y -=.4;
     muro1.x +=.4;
   }
   if(colision(pared_33,muro1)){
     muro1.y -=.4;
     muro1.x -=.4;
   }
  if(colision(pared_9,muro1)){
     muro1.y -=.4;
     muro1.x -=.4;
   }
   if(colision(pared_37,muro1)){
     muro1.y -=.4;
     muro1.x +=.4;
   }
   if(colision(pared_41,muro1)){
     muro1.y -=.4;
     muro1.x -=.4;
   }
   if(colision(pared_45,muro1)){
     muro1.y -=.4;
     muro1.x +=.4;
   }
   if(colision(pared_49,muro1)){
     muro1.y -=.4;
     muro1.x -=.4;
   }
  muro2.mostrar();
  muro2.y +=.4;
  if(colision(pared_53,muro2)){
     muro2.y -=.4;
     muro2.x -=.4;
   }
   if (colision(pared_5, muro2)) {
     muro2.y -= .4;
     muro2.x += .4;
   }
   if(colision(pared_33,muro2)){
     muro2.y -=.4;
     muro2.x +=.4;
   }
   if(colision(pared_57,muro2)){
     muro2.y -=.4;
     muro2.x -=.4;
   }
   if(colision(pared_13,muro2)){
     muro2.y -=.4;
     muro2.x +=.4;
   }
   if(colision(pared_17,muro2)){
     muro2.y -=.4;
     muro2.x +=.4;
   }
   if(colision(pared_21,muro2)){
     muro2.y -=.4;
     muro2.x -=.4;
   }
    if(colision(pared_25,muro2)){
     muro2.y -=.4;
     muro2.x +=.4;
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
   pared_48.mostrar();
   pared_49.mostrar();
   pared_50.mostrar();
   pared_51.mostrar();
   pared_52.mostrar();
   pared_53.mostrar();
   pared_54.mostrar();
   pared_55.mostrar();
   pared_56.mostrar();
   pared_57.mostrar();
   pared_58.mostrar();
   pared_59.mostrar();
   pared_60.mostrar();
   dibujarDisparos();
   
  
 
    
   // mostrarEnemigo(enemigos);
  }
  
  var animacionInterval = setInterval(animacion, 6);
  
  var arriba = document.getElementById('arriba');
var abajo = document.getElementById('abajo');
var derecha = document.getElementById('derecha');
var izquierda = document.getElementById('izquierda');
var disparar = document.getElementById('disparar');

  
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

disparar.addEventListener('click',
  function (event){
    disparos.push({
      x: cuadrado.x + cuadrado.w*.5,
      y: cuadrado.y,
      w: 3,
      h: 6,
      
    });
  
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
var pared_5 = new paredes(100,70,100,2,'#d2edd4');
var pared_6 = new paredes(100,74,100,2,'#d2edd4');
var pared_7 = new paredes(100,70,2,4,'#d2edd4');
var pared_8 = new paredes(198,70,2,4,'#d2edd4');
var pared_9 = new paredes(50,140,100,2,'#d2edd4');
var pared_10 = new paredes(50,144,100,2,'#d2edd4');
var pared_11 = new paredes(50,140,2,4,'#d2edd4');
var pared_12 = new paredes(148,140,2,4,'#d2edd4');
var pared_13 = new paredes(110,190,100,2,'#d2edd4');
var pared_14 = new paredes(110,194,100,2,'#d2edd4');
var pared_15 = new paredes(110,190,2,4,'#d2edd4');
var pared_16 = new paredes(208,190,2,4,'#d2edd4');
var pared_17 = new paredes(180,230,100,2,'#d2edd4');
var pared_18 = new paredes(180,234,100,2,'#d2edd4');
var pared_19 = new paredes(180,230,2,4,'#d2edd4');
var pared_20 = new paredes(278,230,2,4,'#d2edd4');
var pared_21 = new paredes(230,260,100,2,'#d2edd4');
var pared_22 = new paredes(230,264,100,2,'#d2edd4');
var pared_23 = new paredes(230,260,2,4,'#d2edd4');
var pared_24 = new paredes(328,260,2,4,'#d2edd4');
var pared_25 = new paredes(150,300,100,2,'#d2edd4');
var pared_26 = new paredes(150,304,100,2,'#d2edd4');
var pared_27 = new paredes(150,300,2,4,'#d2edd4');
var pared_28 = new paredes(248,300,2,4,'#d2edd4');
var pared_29 = new paredes(0,40,130,2,'#d2edd4');
var pared_30 = new paredes(0,44,130,2,'#d2edd4');
var pared_31 = new paredes(0,40,2,4,'#d2edd4');
var pared_32 = new paredes(128,40,2,4,'#d2edd4');
var pared_33 = new paredes(150,100,130,2,'#d2edd4');
var pared_34 = new paredes(150,104,130,2,'#d2edd4');
var pared_35 = new paredes(150,100,2,4,'#d2edd4');
var pared_36 = new paredes(278,100,2,4,'#d2edd4');
var pared_37 = new paredes(-50,164,130,2,'#d2edd4');
var pared_38 = new paredes(-50,168,130,2,'#d2edd4');
var pared_39 = new paredes(-50,164,2,4,'#d2edd4');
var pared_40 = new paredes(78,164,2,4,'#d2edd4');
var pared_41 = new paredes(16,214,130,2,'#d2edd4');
var pared_42 = new paredes(16,218,130,2,'#d2edd4');
var pared_43 = new paredes(16,214,2,4,'#d2edd4');
var pared_44 = new paredes(144,214,2,4,'#d2edd4');
var pared_45 = new paredes(0,254,100,2,'#d2edd4');
var pared_46 = new paredes(0,258,100,2,'#d2edd4');
var pared_47 = new paredes(0,254,2,4,'#d2edd4');
var pared_48 = new paredes(98,254,2,4,'#d2edd4');
var pared_49 = new paredes(30,284,100,2,'#d2edd4');
var pared_50 = new paredes(30,288,100,2,'#d2edd4');
var pared_51 = new paredes(30,284,2,4,'#d2edd4');
var pared_52 = new paredes(128,284,2,4,'#d2edd4');
var pared_53 = new paredes(200,45,100,2,'#d2edd4');
var pared_54 = new paredes(200,49,100,2,'#d2edd4');
var pared_55 = new paredes(200,45,2,4,'#d2edd4');
var pared_56 = new paredes(298,45,2,4,'#d2edd4');
var pared_57 = new paredes(205,140,100,2,'#d2edd4');
var pared_58 = new paredes(205,144,100,2,'#d2edd4');
var pared_59 = new paredes(205,140,2,4,'#d2edd4');
var pared_60 = new paredes(303,140,2,4,'#d2edd4');

var puerta = new paredes(150,0,30,6,'red');

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
  html:" <a class='b_reintentar' href='NIVEL5.html'><spam>Reintentar</spam></a>",
  showConfirmButton:false,
 
  
});

     tiempo =0;
   }
 }
var  restar = setInterval(restarTiempo,1000);

//dibuja muro


function muro(){
  this.x = 140;
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

function muro1(){
  this.x = 10;
  this.y = 0;
  this.w = 15;
  this.h = 15;
  
  this.bg = "white";
  
  this.mostrar = function(){
  
  ctx.fillStyle = this.bg;
      
      ctx.drawImage(Muro,this.x,this.y, 15, 15);
  }
}
var muro1 = new muro1();

function muro2(){
  this.x = 250;
  this.y = 0;
  this.w = 15;
  this.h = 15;
  
  this.bg = "white";
  
  this.mostrar = function(){
  
  ctx.fillStyle = this.bg;
      
      ctx.drawImage(Muro,this.x,this.y, 15, 15);
  }
}
var muro2 = new muro2();

function moverDisparos(){
  for( var i in disparos){
    var disparo = disparos[i];
    disparos.y -= .3;
  }
  
  
}


  
  
  
  
  
  function dibujarDisparos() {
  ctx.save();
  ctx.fillStyle = 'white';
  for(var i in disparos){
    var disparo = disparos[i];
   ctx.fillRect(disparo.x, disparo.y-=1, disparo.w, disparo.h);
   
   
     //colisiones con disparos
   
   if(colision(muro,disparo)){
     disparo.y +=0;
    muro.y =-200;
    muro.x = 150;
      }
    if(colision(muro1,disparo)){
      disparo.y -=0;
      muro1.y =-200;
      muro1.x =10;
    }
   if(colision(muro2,disparo)){
      disparo.y -=0;
      muro2.y =-200;
      muro2.x = 250;
    }
    
    
    
  }
  ctx.restore();
  
  disparos = disparos.filter(function(disparo){
    
    return disparo.y > 0;
   
  });
  
  
  }
 
 

}

window.addEventListener('load', function(event){
  inicioCanvas();
});