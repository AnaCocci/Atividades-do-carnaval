const nome = "Shuri";
const anoDeNascimento = 1988;
const profissao = "Super Heroína";
const frase = "O Pantera Negra vive, e quando ele lutar pelo destino de Wakanda, estarei ao lado dele.";
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const idade = anoAtual-anoDeNascimento;

console.log
(
    `Olá, me chamo ${nome}, sou ${profissao}, tenho ${idade} anos e tenho algo para te dizer: ${frase}`
)

