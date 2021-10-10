
//mostrar mais cores
function cor() {
    let cor = document.getElementById("cor-conteiner");
    for (let i = 0; i < cor.children.length; i++) {
        if (i > 4) {
            cor.children[i].style.display = "block";
            document.getElementById("ver-cores").style.display = 'none';
            document.getElementById("ver-cores2").style.display = 'block';
            
        }        
    }
}

//mostrar menos cores
function menosCor(){
    let cor = document.getElementById("cor-conteiner");
    for (let i = 0; i < cor.children.length; i++) {
        if (i < 4) {
            cor.children[i].style.display = "none";                      
            document.getElementById('ver-cores').style.display = 'block';
            document.getElementById("ver-cores2").style.display = 'none';
        }        
    }
}

// funções do filtro
function filtro() {
    document.querySelector(".menu-filter").style.display = 'block';
    document.querySelector(".cor-conteiner").style.display = 'none';
    document.querySelector(".tamanho-conteiner").style.display = 'none';
    document.querySelector(".preco-conteiner").style.display = 'none';
    document.querySelector(".btn-opt-filtro").style.display = 'none';
    document.querySelector("body").style.height = '200vh';
    document.querySelector("body").style.overflow = 'hidden';
}

function escondeFiltrar() {
    document.querySelector(".menu-filter").style.display = 'none';
    document.querySelector("body").style.height = '100%';
    document.querySelector("body").style.overflow = 'visible';
}

function selecionaCor() {
    document.querySelector(".cor-conteiner").style.display = 'block';
    document.querySelector(".btn-opt-filtro").style.display = 'flex';
    document.querySelector("#cor-aparece").style.display = 'none';
    document.querySelector("#cor-esconde").style.display = 'block';
}

function escondeCor() {
    document.querySelector(".cor-conteiner").style.display = 'none';
    document.querySelector("#cor-aparece").style.display = 'block';
    document.querySelector("#cor-esconde").style.display = 'none';
}

function selecionaTamanho() {
    document.querySelector(".tamanho-conteiner").style.display = 'block';
    document.querySelector(".btn-opt-filtro").style.display = 'flex';
    document.querySelector("#tamanho-selecionado").style.display = 'none';
    document.querySelector("#tamanho-esconde").style.display = 'block';
}

function escondeTamanho() {
    document.querySelector(".tamanho-conteiner").style.display = 'none';
    document.querySelector("#tamanho-selecionado").style.display = 'block';
    document.querySelector("#tamanho-esconde").style.display = 'none';
}

function selecionaPreco() {
    document.querySelector(".preco-conteiner").style.display = 'block';
    document.querySelector(".btn-opt-filtro").style.display = 'flex';
    document.querySelector("#preco-selecionado").style.display = 'none';
    document.querySelector("#preco-esconde").style.display = 'block';
}

function escondePreco() {
    document.querySelector(".preco-conteiner").style.display = 'none';
    document.querySelector("#preco-selecionado").style.display = 'block';
    document.querySelector("#preco-esconde").style.display = 'none';
}

function limpar() {
    var limpar = document.getElementsByClassName("check");
    for (i = 0; i < l.length; i++){
        if (l[i].type == "checkbox"){
            l[i].checked = 0
        }
    }
}

