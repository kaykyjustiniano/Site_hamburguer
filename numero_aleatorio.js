var numeroEscolhido = parseInt(prompt("Digite o numero de 0 a 10"))
console.log(typeof(numeroEscolhido))

var numeroAleatorio = Math.floor(Math.random()*11)
console.log(numeroAleatorio)

if(numeroEscolhido === numeroAleatorio){
    console.log(`O numero sorteado foi ${numeroAleatorio} e vc escolheu ${numeroEscolhido}`)
}
else{
    console.log(`O numero sorteado foi ${numeroAleatorio} e vc escolheu ${numeroEscolhido} , Voçe Errou !!`)
}