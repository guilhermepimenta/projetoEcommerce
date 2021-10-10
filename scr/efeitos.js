// Função para carregar para renderizar mais produtos//
function carregarMais() {
    let mais = document.getElementById("main-container");
    for (let i = 0; i < mais.children.length; i++) {
        if (i > 7) {
            mais.children[i].style.display = "flex";
            document.getElementById("mais").style.display = 'none';
        }
    }
}

// Função para adicionar item na sacola de compra //
function compra() {
    document.querySelector('.comprar').style.display = "flex";
    var contador = document.querySelector('.comprar').textContent++
};


