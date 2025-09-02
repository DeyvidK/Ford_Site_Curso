const check = document.getElementById("check");
const botao = document.querySelector(".but1");

check.addEventListener("change", function(){
    botao.disabled = !this.checked
});
