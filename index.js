const isiRan = document.getElementById('ran')




function acaknomor() {
    randomNum = Math.random() ;
    isiRan.innerHTML = Math.round(randomNum * 100) ;
    console.log(Math.round(randomNum * 100))

}


setInterval( acaknomor, 100)




