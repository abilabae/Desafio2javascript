function sumar(){
    let valor1=parseInt(document.getElementById("sticker1").value)
    let valor2= parseInt(document.getElementById("sticker2").value)
    let valor3= parseInt(document.getElementById("sticker3").value)
    
    
    const suma= valor1 + valor2 + valor3
    return suma
}   


document.getElementById("submit").addEventListener("click", function(){
    let suma=sumar()

    if(suma <= 10){
        document.getElementById("total").innerText= suma 
    } else {
        document.getElementById("mensaje").innerHTML= "Llevas demasiados stickers"
    }

   
})