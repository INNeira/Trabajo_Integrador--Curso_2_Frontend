let slider = document.querySelector(".slider");
let sliderInividual = document.querySelectorAll(".slider-conteiner");
let contador = 1;
let width = sliderInividual[0].clientWidth; // El primer elemento individual del slider, va tomar el width que tenga
let intervalo = 7000;

window.addEventListener("resize", () =>{ // Se va actualizar en cada pantalla de distintos dispositivos
    width = sliderInividual[0].clientWidth;
})

setInterval(() => {
    slides();
}, intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;

    if(contador == sliderInividual.length){ //cuando llegue a la posicion final, quiero que vuelva al punto original
        setTimeout(() => {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500);
    }
}