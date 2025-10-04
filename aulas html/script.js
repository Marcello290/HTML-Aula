function perguntar() {
let resposta = confirm('você tem certeza?');
if (resposta) {
alert('você clicou em ok');
}
else{
    alert('você clicou em cancelar');
}
}



let cor = false;
function MudarCor(){
    if (cor){
        document.body.style.backgroundColor = "white";
    }

    else {
        document.body.style.backgroundColor = "blue";
    }
    cor = !cor;
}
