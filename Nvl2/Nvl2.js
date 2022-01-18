function inicioCanvas(){
var ctx = document.getElementById('nivel2').getContext('2d');
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
    this.y = 0,
    this.x = 150,
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
    cuadrado.x -=1;
  }
  if(colision(cuadrado,pared_6)){
    cuadrado.x += 1;
  }
  if(colision(pared_7,cuadrado)){
    cuadrado.y += 1;
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
  if(colision(cuadrado,pared_17)){
    cuadrado.x -=1;
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
    cuadrado.y +=1;
  }
  if(colision(pared_22,cuadrado)){
    cuadrado.y +=1;
  }
  if(colision(pared_23,cuadrado)){
    cuadrado.y -=1;
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
  
  if(colision(pared_22,pared_34)){
    pared_34.y += 330;
   }
   if(colision(pared_3,pared_42)){
     pared_42.y -= 380;
   }
   if(colision(pared_43,cuadrado)){
     cuadrado.y -=1;
   }
   if(colision(pared_44,cuadrado)){
     cuadrado.y +=1;
   }
   if(colision(cuadrado,pared_45)){
     cuadrado.x -=1;
   }
   if(colision(cuadrado,pared_46)){
     cuadrado.x +=1;
   }
  
   if(colision(pared_34,cuadrado)){
     cuadrado.x = 100;
     cuadrado.y = 0;
   }
   if(colision(pared_42,cuadrado)){
     cuadrado.x = 100;
     cuadrado.y = 0;
   }
   if(colision(cuadrado,pared_47)){
     cuadrado.x -=1;
   }
   if(colision(cuadrado,pared_48)){
     cuadrado.x += 1;
   }
   if(colision(pared_49,cuadrado)){
     cuadrado.y -=1;
   }
   if(colision(pared_50,cuadrado)){
     cuadrado.y +=1;
   }
   if(colision(pared_51,cuadrado)){
     cuadrado.y -=1;
   }
   if(colision(pared_52,cuadrado)){
     cuadrado.y +=1;
   }
   if(colision(pared_53,cuadrado)){
     cuadrado.y -=1;
   }
   if(colision(pared_54,cuadrado)){
     cuadrado.y +=1;
   }
   if(colision(cuadrado,pared_55)){
     cuadrado.x -=1;
   }
   if(colision(cuadrado,pared_56)){
     cuadrado.x +=1;
   }
   if(colision(señuelo,cuadrado)){
     cuadrado.y +=0 ;
     trampa.w = 100;
   }
   if(colision(trampa,cuadrado)){
     cuadrado.y -=1;
   }
   if(colision(pared_58,pared_28)){
     pared_58.x -=100;
   }
   if(colision(cuadrado,pared_58)){
     cuadrado.x = 100;
     cuadrado.y = 0;
   }
   if(colision(pared_59,pared_1)){
     pared_59.x +=100;
   }
   if(colision(cuadrado,pared_59)){
     cuadrado.x =100;
     cuadrado.y =0;
   }
   if(colision(pared_60,pared_1)){
     pared_60.x +=100;
   }
   if(colision(cuadrado,pared_60)){
     cuadrado.x = 100;
     cuadrado.y = 0;
   }
   if(colision(cuadrado,puerta)){
    cuadrado.x -=1;
    puerta.w = 20;
      swal.fire({ title:"EXCELENTE SIGUE ASI!!🌟",
    html: '<a class="b_siguiente" href="../Nivel3/NIVEL3.html"><spam>SIGUIENTE NIVEL</spam></a>',
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
//pared en movimiento
   pared_34.y -= .5;
   pared_42.mostrar();
   //pared en movimiento
   pared_42.y += .5;
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
   trampa.mostrar();
   señuelo.mostrar();
   pared_58.mostrar();
   pared_58.x += velocidad;
   pared_59.mostrar();
   pared_59.x -= velocidad;
   pared_60.mostrar();
   pared_60.x -= velocidad;
   
   
    
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
//par de 7 y 23
var pared_5 = new paredes(20,412,2,10,'brown');
// con 5,7 y 23
var pared_6 = new paredes(288,412,2,10,'brown');
var pared_7 = new paredes(20,420,270,2,'brown');
var pared_8 = new paredes(40,22,2,140,'brown');
var pared_9 = new paredes(60,22,2,140,'brown');
var pared_10 = new paredes(40,22,22,2,'brown');
var pared_11 = new paredes(40,160,22,2,'brown');
var pared_12 = new paredes(100,22,45,2,'brown');
var pared_13 = new paredes(100,80,45,2,'brown');
var pared_14 = new paredes(100,22,2,60,'brown');
var pared_15 = new paredes(145,22,2,60,'brown');
var pared_16 = new paredes(270,100,2,20,'brown');
var pared_17 = new paredes(22,252,2,12,'brown');
var pared_18 = new paredes(22,264,180,2,'brown');
//par de 20,21
var pared_19 = new paredes(235,60,2,261,'brown');
var pared_20 = new paredes(255,60,2,261,'brown');
var pared_21 = new paredes(235,320,22,2,'brown');
// pareja con 24
var pared_22 = new paredes(200,60,150,2,'brown');
//pareja de pared_7
var pared_23 = new paredes(20,410,270,2,'brown');
//pareja con 22
var pared_24 = new paredes(200,0,2,60,'brown');
// par con 28,29
var pared_25 = new paredes(100,350,40,2,'brown');
// par con 27,18
var pared_26 = new paredes(22,251,180,2,'brown');
var pared_27 = new paredes(200,251,2,16,'brown');
var pared_28 = new paredes(100,120,2,230,'brown');
var pared_29 = new paredes(140,120,2,232,'brown');
var pared_30 = new paredes(100,120,40,2,'brown');
var pared_31 = new paredes(42,24,20,136,'#592A00B5');
var pared_32 = new paredes(102,24,43,56,'#592A00B5');
var pared_33 = new paredes(170,90,40,40,'#592A00B5');
//se mueve en vertical
var pared_34 = new paredes(292,400,28,4,'blue');
var pared_42 = new paredes(270,100,28,4,'blue');
var pared_35 = new paredes(236,60,20,260,'#592A00B5');
var pared_36 = new paredes(102,122,38,229,'#592A00B5');
var pared_37 = new paredes(24,252,176,12,'#592A00B5');
//esta se va a mover
var pared_38 = new paredes(170,160,120,10,'#592A00B5');
var pared_39 = new paredes(272,100,70,20,'#592A00B5');
var pared_40 = new paredes(202,0,120,60,'#592A00B5');
var pared_41 = new paredes(20,412,270,8,'#592A00B5');
var puerta = new paredes(310,60,6,30,'white');
var pared_43 = new paredes(170,160,120,2,'brown');
var pared_44 = new paredes(170,170,120,2,'brown');
var pared_45 = new paredes(170,160,2,10,'brown');
var pared_46 = new paredes(288,160,2,10,'brown');
var pared_47 = new paredes(170,90,2,40,'brown');
var pared_48 = new paredes(210,90,2,40,'brown');
var pared_49 = new paredes(170,90,40,2,'brown');
var pared_50 = new paredes(170,130,42,2,'brown');
var pared_51 = new paredes(270,100,48,2,'brown');
var pared_52 = new paredes(270,120,48,2,'brown');
var pared_53 = new paredes(156,200,60,2,'brown');
var pared_54 = new paredes(156,220,60,2,'brown');
var pared_55 = new paredes(156,200,2,20,'brown');
var pared_56 = new paredes(214,200,2,20,'brown');
var pared_57 = new paredes(156,200,60,20,'#592A00B5');
var trampa = new paredes(140,300,70,10,'brown');
var señuelo= new paredes(200,250,40,2,'#14181300');
var pared_58 = new paredes(1,210,10,6,'blue');
var pared_59 = new paredes(90,240,10,6,'blue');
var pared_60 = new paredes(90,180,10,6,'blue');






function animacionPared(){
  requestAnimationFrame(animacionPared);
  ctx.clearRect(0,0,cW,cH);
  
}
var tiempo = 60;
 function restarTiempo(){
   tiempo--;
   document.getElementById("tiempo").innerHTML = "Tiempo: " +tiempo;
   if(tiempo == 0){
    
     swal.fire({
  title: "LA JUGADA ESTA AHÍ, PERO NECESITAS VERLA😉",
  text: "Intentalo de nuevo",
  icon: "error",
  allowOutsideClick: false,
  html:" <a class='b_reintentar' href='Segundo.html'><spam>Reintentar</spam></a>",
  showConfirmButton:false,
  
});

     tiempo =0;
   }
 }
var  restar = setInterval(restarTiempo,1000);
//intento de animacion


}

window.addEventListener('load', function(event){
  inicioCanvas();
});