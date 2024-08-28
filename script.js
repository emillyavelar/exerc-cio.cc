
function exercício1(){
    let nota = prompt("digite uma nota")
     while(nota<0 || nota>10){
        nota = prompt("Digite uma nota")

     }
     alert("OK, sua nota é valida")
  
} function exercício2(){
  let username = prompt("Digite seu username")
  let password = prompt("Digite sua senha ")
  while(username ==password){
  alert("erro, digite uma senha diferente do username")
  username = prompt("Digite seu username")
  password = prompt("digite sua senha")
  }alert("Ok, seu usuario e senha são diferentes")

    
}function exercício3(){
    let dividendo = parseInt(prompt("Digite quantos números você quer usar para calcular a média:"));

    if (isNaN(dividendo) || dividendo <= 0) {
        alert("Por favor, insira um número válido maior que 0.");
    } else {
        let soma = 0;
        let x = 0;
    
        while (x < dividendo) {
            let numTemp = parseFloat(prompt("Digite um número:"));
            if (isNaN(numTemp)) {
                alert("Por favor, insira um número válido.");
                continue;
            }
            soma += numTemp;
            x++;
        }
    
        let media = soma / dividendo;
        alert("A média aritmética é: " + media);
    }
    
    
    
}    
function exercício4(){
    let numero = parseInt(prompt("Digite o número que você quer ver se é primo ou não"));
let primo = true;
let dividendo = 3;

if (numero <= 1 || (numero > 2 && numero % 2 == 0)) {
    primo = false;
} else if (numero == 2) {
    primo = true;
} else {
    while (dividendo * dividendo <= numero) {
        if (numero % dividendo == 0) {
            primo = false;
            break; // Se já encontramos um divisor, podemos sair do loop
        }
        dividendo += 2; // Testa apenas números ímpares
    }
}

if (primo) {
    alert(numero + " é um número primo.");
} else {
    alert(numero + " não é um número primo.");

 }
}



