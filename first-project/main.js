let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let nouvil = document.querySelector(".nouvil")
window.onscroll = function(){
    let value = scrollY;
    img1.style.left = value + "px"
    img2.style.top = value *3 + "px"
    img3.style.top = value *1.3+ "px"
    img4.style.top = value *1.5+ "px"
    img5.style.top = value + "px"
    img6.style.top = value + "px"
    img6.style.left = value * 3+ "px"
    nouvil.style.fontSize = value+ "px"

    if( scrollY >= 67){
        nouvil.style.fontSize = 67 + "px"
        nouvil.style.position = "fixed";
        if(scrollY>= 492){
            nouvil.style.display = "none";
        }
        else{
            nouvil.style.display = "block";
        }

        if(scrollY >= 190){
            document.querySelector(".main").style.background = "linear-gradient(#205ca7, #10001f)"

        }
        else{
             document.querySelector(".main").style.background = "linear-gradient(#200016, #10001f)"
        }
    }
    
}