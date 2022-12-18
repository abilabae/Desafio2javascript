
var border=false

document.getElementById("imagen").addEventListener("click", function(){
    if(border) {
        this.className= "borderless"
        border=false
    } else{
        this.className= "border"
        border=true
    }
})