let slider = document.querySelector(".slide");
let value = document.querySelector(".value");
let password = document.querySelector(".txt");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let number = document.querySelector("#numbers");
let symbol = document.querySelector("#symbols");
let button = document.querySelector(".pass");
let copy = document.querySelector(".copy-symbol");

//Slider Work
value.textContent = slider.value;
slider.addEventListener("input", ()=>{
    value.textContent = slider.value;
});

button.addEventListener("click", ()=> {
   password.value = generatePassword();
})

let upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lwr = "abcdefghijklmnopqrstuvwxyz";
let n = "0123456789";
let sym = "!@#$%^&*~";

function generatePassword(){
    let passwrd = "";
    let allchars = "";
    allchars += uppercase.checked ? upr : " ";
    allchars += lowercase.checked ? lwr : " ";
    allchars += number.checked ?  n: " ";
    allchars += symbol.checked ? sym : " ";

    if(allchars == "" || allchars.length == 0){
        return passwrd;
    }

    let i;
    for(i = 1; i<=slider.value;i++){
        passwrd += allchars.charAt(Math.floor(Math.random()*allchars.length));
    }
    return passwrd;
}

copy.addEventListener("click", ()=> {
    navigator.clipboard.writeText(password.value);
})
