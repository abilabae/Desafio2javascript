const clave1="911"
const clave2="714"

document.getElementById("checkearClave").addEventListener("click", function(){
    const digito1=document.getElementById("numero1").value
    const digito2=document.getElementById("numero2").value
    const digito3=document.getElementById("numero3").value
    
    
    const clave= digito1+ digito2+ digito3

    let resultado=document.getElementById("resultado")

    switch(clave){
        case clave1: resultado.innerText= "Password 1 correcta"
            break
        case clave2:resultado.innerText= "Password 2 correcta"
            break
        default : resultado.innerText= "Password incorrecta"
        break    
    }
})