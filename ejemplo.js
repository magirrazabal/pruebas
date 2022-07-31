//debugger

let userName = prompt("Ingrese el nombre de usuario");
let password = prompt ("Ingrese su contraseña");

if ((userName != "") && (userName == "Emiliano" && password == "1234")) {
    alert ("Bienvenido, " + userName);
   elegirClase();
} 
else {
    alert("No se reconoce el usuario y/o contraseña");
}
function elegirClase () { 
    let clase = prompt ("¿Qué clase quiere reservar?")    
         switch (clase) {
             case "Functional":
                 alert("Esta clase está completa");
                 elegirClase();
             case "Yoga":
                 alert("Esta clase está completa");
                 elegirClase();
             case "Spinning":
                 alert("¡Listo! Gracias por reservar.")
                 break;
             case "Boxeo":
                 alert("¡Listo! Gracias por reservar.")
                 break;
             case "Pilates":
                 alert("¡Listo! Gracias por reservar.")
                 break;
             default:
                 alert("Ingrese una clase válida")
         }
     }