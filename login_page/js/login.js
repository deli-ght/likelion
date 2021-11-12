const main_login = document.querySelector(".main_btn-login");
const modal = document.querySelector("#login")
const closeBtn = document.querySelector(".close")

const login_chx_label = document.querySelector(".login_radio-keep-id")
const login_chx = document.querySelector("#login_checkbox");
const login_show_chx = document.querySelector(".login_check");

main_login.addEventListener("click", () => {
    modal.style.display = "inline-block";    
})

closeBtn.addEventListener("click", ()=> {
    modal.style.display = "none";
})

login_chx_label.addEventListener('click',() => {
    if (login_chx.checked){
        login_show_chx.classList.toggle("is-clicked");
    }
})
