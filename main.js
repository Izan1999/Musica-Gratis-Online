//ALERTA INFO//

function info(){
  
  swal.fire({
    
    icon: 'info',
    title: 'INFORMACIÓN',
    text: 'Se añadirá contenido poco a poco cualquier error contacta conmigo en el apartado contacto del menu, ten en cuenta que la web esta en desarrollo y es un proyecto personal a modo de practica, gracias por probarlo y disfruta :D'
    
  });
}

//CODIGO MENU DESPLEGABLE//

function desplegar(){
  document.getElementById("sidemenu").style.marginLeft = "0";
}

function plegar(){
  document.getElementById("sidemenu").style.marginLeft = "-100%";
}

//CODIGO AUDIOS AQUI//

var quevedo = new Audio();
quevedo.src = "sonidos/quevedo.mp3";

function quevedostop(){
  quevedo.pause();
  quevedo.currentTime = 0;
}

var paulolondra = new Audio();
paulolondra.src = "sonidos/paulolondra.mp3";

function paulolondrastop() {
  paulolondra.pause();
  paulolondra.currentTime = 0;
}

var anuelaa = new Audio();
anuelaa.src = "sonidos/anuelaa.mp3";

function anuelaastop() {
  anuelaa.pause();
  anuelaa.currentTime = 0;
}

var residente = new Audio();
residente.src = "sonidos/residente.mp3";

function residentestop() {
  residente.pause();
  residente.currentTime = 0;
}

var nickyjam = new Audio();
nickyjam.src = "sonidos/nickyjam.mp3";

function nickyjamstop() {
  nickyjam.pause();
  nickyjam.currentTime = 0;
}

var villanoantillano = new Audio();
villanoantillano.src = "sonidos/villanoantillano.mp3";

function villanoantillanostop() {
  villanoantillano.pause();
  villanoantillano.currentTime = 0;
}

var eladiocarrion = new Audio();
eladiocarrion.src = "sonidos/eladiocarrion.mp3";

function eladiocarrionstop() {
  eladiocarrion.pause();
  eladiocarrion.currentTime = 0;
}

var homer = new Audio();
homer.src = "sonidos/homer.mp3";

function homerstop() {
  homer.pause();
  homer.currentTime = 0;
}

var morad = new Audio();
morad.src = "sonidos/morad.mp3";

function moradstop() {
  morad.pause();
  morad.currentTime = 0;
}

var nathy = new Audio();
nathy.src = "sonidos/nathy.mp3";

function nathystop() {
  nathy.pause();
  nathy.currentTime = 0;
}

var lgante = new Audio();
lgante.src = "sonidos/lgante.mp3";

function lgantestop() {
  lgante.pause();
  lgante.currentTime = 0;
}

var speedofsound = new Audio();
speedofsound.src = "sonidos/speedofsound.mp3";

function speedofsoundstop() {
  speedofsound.pause();
  speedofsound.currentTime = 0;
}

var blindinglights = new Audio();
blindinglights.src = "sonidos/blindinglights.mp3";

function blindinglightsstop() {
  blindinglights.pause();
  blindinglights.currentTime = 0;
}

var getlucky = new Audio();
getlucky.src = "sonidos/getlucky.mp3";

function getluckystop() {
  getlucky.pause();
  getlucky.currentTime = 0;
}

var someoneyouloved = new Audio();
someoneyouloved.src = "sonidos/someoneyouloved.mp3";

function someoneyoulovedstop() {
  someoneyouloved.pause();
  someoneyouloved.currentTime = 0;
}
