let cor = false
function MudarCor(){
    if (cor){
        document.body.style.background = "white"
    }
    else{
        document.body.style.background ="blue"
    }
    cor =!cor;
}