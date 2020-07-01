

const campoTexto = document.querySelector(".text");
const limpar = document.querySelector("#limpar");
const numeros = document.querySelectorAll(".numbers");
const limparCaracter = document.querySelector(".limparCaracter");
const res = document.querySelector("#calcular");
var num; 
   
//butao limpar
limpar.addEventListener("click", ()=>{
    campoTexto.value = "";
   
})

numeros.forEach((num)=>{
   num.addEventListener("click", ()=>{
       if(campoTexto.value.length<10)
         campoTexto.value+= num.textContent;
   })
})


// butao C
limparCaracter.addEventListener("click", ()=>{
    let val = campoTexto.value;
    console.log(val.substring(0,val.length-1));
    campoTexto.value = val.substring(0,val.length-1);
});

//butao '.'
function ponto(){

    if(campoTexto.value.length == 0){
        campoTexto.value =  "0.";
    }else{
        if(campoTexto.value.indexOf(".") == 1){
            return
        }else{
            campoTexto.value += ".";
            } 
            
        } 
             
}
    
//butao '='
res.addEventListener("click", ()=>{
    if(isNaN(campoTexto.value.length == 0)){
        campoTexto.value = "Valor indefinido!";
    }else{
        campoTexto.value = eval(campoTexto.value);
        console.log(eval(campoTexto.value));
    }
    
})


