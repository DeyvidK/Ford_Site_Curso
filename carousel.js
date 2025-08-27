const img = document.querySelector(".image");
const txt = document.getElementById("txt");
class slide{
    constructor(image,texto) {
    this.image=image;
    this.texto=texto;}
}
const slides = [
     new slide("icons/img/imagem_1.jpg", "Essa é a nova Ford Ranger 2022. Verifique a novidade"),
     new slide("icons/img/imagem_2.jpg", "Ford a nossa história"),
     new slide("icons/img/imagem_3.jpg", "Nova Ford Bronco Sport 2022")
]
let index = 0;
 img.style.transition = "opacity 0.5s ease-in-out";
 txt.style.transition = "opacity 0.5s ease-in-out";
 
 
function trocarImagem() {
    img.style.opacity = 0.5; 
    setTimeout(() => {
        index = (index + 1) % slides.length;
        img.setAttribute("src", slides[index].image);
        txt.innerText = slides[index].texto;
        img.style.opacity = 1;
      }, 500);
}

setInterval(trocarImagem, 2000);
