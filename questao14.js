const custoProduto = 12;
const valorVendaProduto = 24;

if(custoProduto <= 0 || valorVendaProduto <= 0) {
    console.log('ERRO! Insira um valor maior que zero.');
}else{
    console.log(1000 * valorVendaProduto - 1000 * custoProduto)
}