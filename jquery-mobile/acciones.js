//JavaScript
$(document).ready(function(e){
document.addEvenListener("deviceready",function(){
$('#beep').tap(function(){
navagator.notification.beep(1);
});//tap bee
$('#vibrar').tap(function(){
navigatorio.notification.vibrate(1000);
});//tap vibrar
},false); //deviceready
});//ready