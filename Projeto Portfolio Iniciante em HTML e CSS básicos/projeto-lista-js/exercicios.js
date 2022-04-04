// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2  
}
console.log(soma(2, 4));

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let cal1 = prompt('Digite aqui a largura do triângulo')
  let cal2 = prompt('Digite aqui a altura do triângulo')
  let cal3 = cal1 * cal2
  console.log(cal3)
}


// EXERCÍCIO 02
function imprimeIdade() {
  let id = prompt('Digite o ano atual que estamos')
  let id2 = prompt('Digite o ano do seu nascimento')
  let id3 = id - id2
  console.log(id3)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}
console.log(calculaIMC(140, 1.78))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() { 
  let nome = prompt('Digite seu nome')
  let idade = Number(prompt('Digite sua idade'))
  let email = prompt('Digite seu email')
  console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, e o meu email é ' + email + '.')

}




// EXERCÍCIO 05
function imprimeTresCoresFavoritas() { 
   let cores = [] 
   let cor1 = prompt('Digite primeira cor')
   cores.push(cor1)
   let cor2 = prompt('Digite segunda cor')
   cores.push(cor2)
   let cor3 = prompt('Digite terceira cor')
   cores.push(cor3)
   console.log(cores)
}



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
  
}
console.log(retornaStringEmMaiuscula('oi'));


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso  
}
console.log(calculaIngressosEspetaculo(200, 10));
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}
console.log(checaStringsMesmoTamanho('Olá', 'kkkk'))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}
console.log(retornaPrimeiroElemento(['arroz', 'feijoada', 'suco']))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const resultado1 = array.length;
    return array[resultado1 -1];
  
}
console.log(retornaUltimoElemento(['uva', 'acabaxi', 'limão']))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroElemento = array[0]
  let tamanho = array.length
  let ultimoElemento = array[tamanho -1]
  array[0]=ultimoElemento
  array[tamanho -1] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}



// EXERCÍCIO 13
  function checaRenovacaoRG() {
    let anoAtual = Number(prompt('Digite o ano atual'))
    let anoNascimento = Number(prompt('Digite seu ano de nascimento'))
    let anoCarteiraIdent = Number(prompt('Digite o ano de emissão da sua carteira'))
    let idade = anoAtual - anoNascimento
    var resultado = false
    var diferecaDeAnos = anoAtual - anoCarteiraIdent
  
    if(idade <= 20){ 
  
      if(diferecaDeAnos >= 5){
        resultado = true
      }
  
    }else if(idade > 20 && idade <= 50){
  
  
     if(diferecaDeAnos >= 10){
       resultado =  true   
      }
  
    }else if(idade > 50){
  
      if(diferecaDeAnos > 50){
        resultado = true
      }
    }  
    
    console.log(resultado)
    }

    checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15

    function checaValidadeInscricaoLabenu() {
    let maiorDeIdade = prompt('Você é maior de 18 anos ?').toUpperCase().trim()
    let ensinoMedio = prompt('Tem ensino médio completo ?').toUpperCase().trim()
    let disponibilidadeParaOcurso = prompt('Você é maior de 18 anos ?').toUpperCase().trim()
    var resultado = false
    
      if(maiorDeIdade === 'SIM' && ensinoMedio ==='SIM' && disponibilidadeParaOcurso === 'SIM'){

       resultado = true

      }
      console.log(resultado);

      }

      checaValidadeInscricaoLabenu()
