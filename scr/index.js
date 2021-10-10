import data from './produtos.js';

//Ordenar Produtos

function ordenarProdutos() {
   
    var select = document.querySelector(".ordem");
    var val = select.options[select.selectedIndex].value;

    function ordenar(valor) {
        var value = valor;
        if (value == 'recentes') {
            var tipo = data.produtos.sort((a, b) => a._id - b._id)
            tipo.reverse()
        } 
        if(value == 'maior') {
            var tipo = data.produtos.sort((a, b) => a.preco - b.preco)
            tipo.reverse()
        } 
        if (value == 'menor') {
            var tipo = data.produtos.sort((a, b) => a.preco - b.preco)
        }                
        return tipo;
   }

//Render dos produtos

    let prod = ordenar(val);
    let produto = '';
    prod.forEach(element => {
        produto += `
        <div class="produtos" id="${element.id}">
                    <img src="${element.imagem}" alt="${element.nome}">
                    <strong class="nome">${element.nome}</strong>
                    <span class="preco">R$ ${element.preco}</span>
                    <h4>${element.parcela}</h4>
                    <button type="button" class="comprar" onclick="compra()">COMPRAR</button>
                </div>`
    });
    const main = document.getElementById("main-container");
    main.innerHTML = produto;
    let resetProduto = produto;

//Filtro dos produtos no menu lateral

    function filtro() {
        let info = document.querySelectorAll('[name=filter]:checked')
        let filtrado = [];
        for (let i = 0; i < info.length; i++) {
            filtrado.push(info[i].value);
        }
        var filtrados = prod.filter(function(a) {
            return filtrado.some(function(t) {
                let valores = '';
                if (a.preco > 0 && a.preco <= 50) {
                    valores = '0-50'
                } else if (a.preco > 50 && a.preco <= 150) {
                    valores = '51-150'
                } else if (a.preco > 150 && a.preco <= 300) {
                    valores = '151-300'
                } else if (a.preco > 300 && a.preco <= 500) {
                    valores = '301-500'
                } else if (a.preco > 500) {
                    valores = '500'
                };
                return a.cor === t || a.tamanho === t || valores === t;
            });
        });

        let produto = '';
        filtrados.forEach(element => {
            produto += `
        <div class="produtos" id="${element.id}">
                    <img src="${element.imagem}" alt="${element.nome}">
                    <strong class="nome">${element.nome}</strong>
                    <span class="preco">R$ ${element.preco}</span>
                    <h4>${element.parcela}</h4>
                    <button type="button" class="comprar" onclick="compra()">COMPRAR</button>
                </div>`
        });

        if(filtrados.length <= 0){
            produto = `
            <div class="produtos">
              <i class="fas fa-heart-broken"></i>
            <h1> Desculpe, produto em falta em nosso estoque :( </h1>
            </div>
            `
        }
               
        const main = document.getElementById("main-container");
        if (filtrado == '') {
            main.innerHTML = resetProduto;
            var pai = document.getElementById("main-container");
            for (var i = 0; i < pai.children.length; i++) {
                if (i > 8) {
                    pai.children[i].style.display = "none";
                    document.getElementById("mais").style.display = 'flex';
                }
            }
        } else {
            main.innerHTML = produto;
        }
    };
    let check = document.querySelectorAll('[name=filter]');
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click', filtro, false);
    }

    //setar quantidade de produtos
    let pai = document.getElementById("main-container");
    for (let i = 0; i < pai.children.length; i++) {
        if (i > 8) {
            pai.children[i].style.display = "none";
        }
    }
}

function carregar() {
    let el = document.getElementById("ordem");
    el.addEventListener("click", ordenarProdutos, false);
}

carregar()
ordenarProdutos();