const horaAtual = 23

let mensagem = ''

if(horaAtual > 22 || horaAtual === 22) {
    console.log(`${mensagem} Não deveríamos comer nada, é hora de dormir`);
} else if(horaAtual > 18 && horaAtual < 22 || horaAtual === 18) {
    console.log(`${mensagem} Rango da noite, vamos jantar :D`);
} else if(horaAtual > 14 && horaAtual < 18 || horaAtual === 14) {
    console.log(`${mensagem} Vamos fazer um bolo pro café da tarde?`);
} else if(horaAtual > 11 && horaAtual < 14 || horaAtual === 11) {
    console.log(`${mensagem}Hora do almoço!!!`);
} else{
    console.log(`${mensagem} Humm, cheiro de café recém-passado`);
}