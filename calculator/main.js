var screenvar = document.getElementById("screen")
firstnumber = ""
secondnumber = ""
op = ""








function printonscreen(x){
    screenvar.innerHTML= ""
    firstnumber = firstnumber + x
    screenvar.innerHTML = firstnumber
}



function herşey(operation) {
    screenvar.innerHTML = ""
    secondnumber = firstnumber
    firstnumber = ""
    op = operation
}


function equal(){
    if(op == "+"){
        var result = parseInt(firstnumber) + parseInt(secondnumber)
        screenvar.innerHTML = result
    }

    if(op == "-"){
        var result = parseInt(secondnumber) - parseInt(firstnumber)
        screenvar.innerHTML = result
    }

    if(op == "*"){
        var result = parseInt(firstnumber) * parseInt(secondnumber)
        screenvar.innerHTML = result
    }

    if(op == "/"){
        var result = parseInt(secondnumber) / parseInt(firstnumber)
        screenvar.innerHTML = result
    }

    if(result){
        screenvar.innerHTML = result
    }

    if(!result){
        screenvar.innerHTML = "Error"
    }
}



function sil(){
    screenvar.innerHTML = "0"
    firstnumber = ""
    secondnumber = ""
}



