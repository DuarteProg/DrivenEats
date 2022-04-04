let frango = null;
let frangoPreco = null;
let bebida = null;
let bebidaPreco = null;
let sobremesa = null;
let sobremesaPreco = null;

let somador = 0;



function selecionarComida (div, descricao, preco) {

    const comidaSelecionada = document.querySelector(".dentro-principal.selecionado")
     if(comidaSelecionada !== null) {
         comidaSelecionada.classList.remove("selecionado")
         somador = somador - 1;
     }

    div.classList.add("selecionado")
    frango = descricao
    frangoPreco = preco
    somador = somador + 1;

    finalizarCompra()
}


function selecionarBebida (div, descricao, preco) {

const bebidaSelecionada = document.querySelector(".dentro-principal.bebida.selecionado")
 if(bebidaSelecionada !== null) {
  bebidaSelecionada.classList.remove("selecionado")
  somador = somador - 1;
 }

div.classList.add("selecionado")
bebida = descricao
bebidaPreco = preco
somador = somador + 1;

finalizarCompra()
}

function selecionarSobremesa (div, descricao, preco ) {

const sobremesaSelecionada = document.querySelector(".dentro-principal.sobremesa.selecionado")
 if(sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove("selecionado")
    somador = somador -1;
 }

div.classList.add("selecionado")
sobremesa = descricao
sobremesaPreco = preco
somador = somador + 1;

finalizarCompra()
}


function finalizarCompra () {
    let botao = document.querySelector("button");
 if(somador === 3) {
     botao.classList.add("selecionado1");
     botao.disabled = false;
     botao.innerHTML = "Fechar pedido";
     
 } else {
    botao.disabled = true;
    botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
    botao.classList.remove("selecionado1")
 }
  
}

function descricaoFinal () {
const mensagemFinal = numeroWpp();
window.open(mensagemFinal,'_blank');
}

function numeroWpp() {
    let total = (frangoPreco + bebidaPreco + sobremesaPreco).toFixed(2);
    let numeroCel = "2155900000000"
    let descricaoFinal = 
    `Olá, gostaria de fazer o pedido:
- Prato: ${frango}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${total}`

descricaoFinal = encodeURIComponent(descricaoFinal);
return `https://wa.me/${numeroCel}?text=${descricaoFinal}`
}