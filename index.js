const isiRan = document.getElementById('ran')
const stpbtn = document.getElementById('stpbtn')
const strbtn = document.getElementById('strbtn')
const tampilkanbtn = document.getElementById('btn2')
const box1 = document.getElementById('box1')
const btn2 = document.getElementById('btn2')



const username = "eka"
const password = "joss23"


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

function tampilkanbox() {
    box1.style.display="block"
}

function verifikasi() {
    valueuser = document.getElementById('userinput').value
    valuepass = document.getElementById('passinput').value
    if (valueuser == username && valuepass == password) {
        document.getElementById('btn2').style.display = "block";
        alert("Selamat, Password dan Username Benar")
    }
    else {
        alert("Password atau Username Salah")
    }
}



stpbtn.addEventListener("click", stopbtn)
strbtn.addEventListener("click", undi)
btn2.addEventListener("click", tampilkanbox )
document.getElementById('submitbtn').addEventListener("click", verifikasi)








