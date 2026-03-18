document.getElementById("d1").innerHTML = "Breno Penha dos Santos Gonçalves"

let nome = "Breno" // prompt("Digite seu nome: ");
let idade = 18 // prompt("Digite sua idade: ");
let ano = 2026;

let nasc = ano - idade;

document.getElementById("resp_ex1").innerHTML = "Olá " + nome + ", seu ano de nascimento é " + nasc

function msg(){
    alert("Olá")
}

function msg_2(texto){
    alert(texto)
}

// msg()
// msg_2("Breno")
// msg()
// msg_2("Exemplo")

function soma(a,b){
    return a+b;
}

resp = soma(3,7);
document.getElementById("soma").innerHTML = resp

function mult(a,b){
    return a*b
}

function exemplo2(){
    let x = parseInt(document.getElementById("in_ex2").value);

    for(let i=1; i <= x; i++){
        console.log(x + i);
    }

    document.getElementById("resp_ex2").innerHTML = x;
}

function exemplo3(){
    let a = parseInt(document.getElementById("in_1_ex3").value)
    let b = parseInt(document.getElementById("in_2_ex3").value)
    let resp = soma(a,b);

    document.getElementById("resp_ex3").innerHTML = resp;
}

function exemplo4(){
    let a = parseInt(document.getElementById("in_1_ex4").value)
    let b = parseInt(document.getElementById("in_2_ex4").value)

    let resp = 0
    if(a < 0 || b < 0){
        resp = soma(a,b)
    }else{
        resp = mult(a,b)
    }

    document.getElementById("resp_ex4").innerHTML = resp;
}