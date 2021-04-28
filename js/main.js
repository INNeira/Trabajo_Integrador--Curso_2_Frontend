/*let principalUbication = window.pageYOffset; // Saber en que parte de la pagina (eje Y) estamos ubicacdos

window.addEventListener("scroll", function(){
    let actualMovement = window.pageYOffset;
    if(principalUbication >= actualMovement){
        document.getElementsByTagName("header")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("header")[0].style.top = "-100px";
    }
    principalUbication = actualMovement;
    
})*/

// Menu burguer
let menu = document.querySelectorAll(".menu")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", () =>{
    menu.classList.toggle("menudos");
})


