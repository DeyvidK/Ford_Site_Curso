class carro{
    constructor(image,modelo,alcacamba,alveiculo,alsolo,carga,motor,potencia,volume,roda,preco){
        this.image = image;
        this.modelo = modelo;
        this.alcacamba = alcacamba;
        this.alveiculo = alveiculo;
        this.alsolo = alsolo;
        this.carga = carga;
        this.motor = motor;
        this.potencia = potencia;
        this.volume = volume;
        this.roda = roda;
        this.preco = preco;
    }
}


const fordXl = new carro("icons/img/XL Cabine.jpg","XL Cabine Simples 2.2 Diesel 4X4 MT 2022", "511", "1821", "232", "1234", "2.2", "160", "1420", "Aço Estampado 16", "R$ 183.850,00");
const fordXLS = new carro("icons/img/xls 2.2 diesel.jpg","XLS Cabine Simples 2.2 Diesel 4X4 MT 2022", "511", "1821", "232", "1234", "2.2", "170", "1420", "Aço Estampado 16", "R$ 220.690,00");
const storm = new carro("icons/img/storm.jpg","Storm 3.2 Diesel 4X4 AT 2022", "511", "1821", "232", "1040", "3.2", "200", "1180", "Liga Leve 17", "R$ 227.790,00");
const carros=[fordXl,fordXLS,storm];

let  indices=[];

const checkboxes = document.querySelectorAll(".selecao");

function atualizarSelecionados() {
    indices = [];
    checkboxes.forEach(item => {
      if (item.checked) {
        indices.push(item.id);
      }
    });
    console.log(indices);
}
  
checkboxes.forEach(cb => {
    cb.addEventListener("change", atualizarSelecionados);
});




const modal = document.getElementById("modal");



const botao = document.getElementById("butt")


function abrir(){
    if (indices.length !== 2) {
        alert("Selecione exatamente 2 carros para comparar!");
        return;}

    const carro1 = carros[indices[0]]
    const carro2 = carros[indices[1]]
    modal.innerHTML= `
    <table>
    <tr><td></td><td><img src="${carro1.image}"></td><td><img src="${carro2.image}"></td>
    <tr><td>Modelo</td><td>${carro1.modelo}</td><td>${carro2.modelo}</td></tr>
    <tr><td>Altura da caçamba (mm)</td><td>${carro1.alcacamba}</td><td>${carro2.alcacamba}</td></tr>
    <tr><td>Altura do veículo (mm)</td><td>${carro1.alveiculo}</td><td>${carro2.alveiculo}</td></tr>
    <tr><td>Altura livre do solo (mm)</td><td>${carro1.alsolo}</td><td>${carro2.alsolo}</td></tr>
    <tr><td>Capacidade de carga (Kg)</td><td>${carro1.carga}</td><td>${carro2.carga}</td></tr>
    <tr><td>Motor</td><td>${carro1.motor}</td><td>${carro2.motor}</td></tr>
    <tr><td>Potência (cv)</td><td>${carro1.potencia}</td><td>${carro2.potencia}</td></tr>
    <tr><td>Volume da caçamba (L)</td><td>${carro1.volume}</td><td>${carro2.volume}</td></tr>
    <tr><td>Roda</td><td>${carro1.roda}</td><td>${carro2.roda}</td></tr>
    <tr><td>Preço</td><td>${carro1.preco}</td><td>${carro2.preco}</td></tr>
</table>
        <button id="fechar">Fechar</button>
        `
    
    document.getElementById("fechar").addEventListener("click", () => modal.close());
    modal.showModal();
}

botao.addEventListener("click" , abrir)


// if(indices.length>2){
  //  alert("Por favor selecione apenas 2 carros para comparção"); return 0;}

  /*<table>
                <tr><td>Modelo</td></tr>
                <tr><td>Altura da caçamba (mn)</td></tr>
                <tr><td>Altura do veículo (mn)</td></tr>
                <tr><td>Altura livre do solo (mn)</td></tr>
                <tr><td>Capacidade de carga (Kg)</td></tr>
                <tr><td>Motor</td></tr>
                <tr><td>Potência (cv)</td></tr>
                <tr><td>Volume  de caçamba (L)</td></tr>
                <tr><td>Roda</td></tr>
                <tr><td>Preço</td></tr>
            </table>
            <button id="fechar">Fechar</button>
            */