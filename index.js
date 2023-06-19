const isiRan = document.getElementById('ran')
const stpbtn = document.getElementById('stpbtn')
const strbtn = document.getElementById('strbtn')




function acaknomor() {
    randomNum = Math.random() ;
    isiRan.innerHTML = Math.round(randomNum * 1000) ;
    console.log(Math.round(randomNum * 100))

}



function undi() {
    acaknum = setInterval( acaknomor, 50);
}



function stopbtn() {
    clearInterval(acaknum)
}




stpbtn.addEventListener("click", stopbtn)
strbtn.addEventListener("click", undi)








