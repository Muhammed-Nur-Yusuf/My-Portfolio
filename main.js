function mmo(){
    window.location.href = "About/about.html"
}



let password = document.getElementById("inp");



function logg(){
    new Promise((resolve,reject)=>{
        if(password.value == "121212"){
            resolve()
        }else{
            reject()
        }

    })
.then(()=>{
    window.location.href = "skills.html"

})
.catch(()=>{
    alert("error!");
})
}