/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log('Bem vindo ao jogo')
if (confirm('Você quer iniciar uma nova rodada ?')) {
   confirm === true
   console.log('O jogo iniciará uma rodada')

   const usuarioCarta = comprarCarta();
   const usuarioCartaDois = comprarCarta();
   const usuarioCartaSoma = usuarioCarta.valor + usuarioCartaDois.valor
   console.log(`Usuário - cartas ${usuarioCarta.texto} ${usuarioCartaDois.texto} - pontuação ${usuarioCartaSoma}`);

   const computadorCarta = comprarCarta()
   const computadorCartaDois = comprarCarta()
   const computadorCartaSoma = computadorCarta.valor + computadorCartaDois.valor
   console.log(`Computador - cartas ${computadorCarta.texto} ${computadorCartaDois.texto} - pontuação ${computadorCartaSoma}`)
   if(usuarioCartaSoma === computadorCartaSoma){
      console.log('Empate !');
   }
   
   else if (usuarioCartaSoma > computadorCartaSoma) {
      console.log('Vitoria do usuario');

   } else {
      console.log('Vitória do computador');
   }
} else {
   confirm === false
   console.log('O jogo acabou')
}
