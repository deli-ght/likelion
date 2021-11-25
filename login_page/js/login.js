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

const input_id = document.querySelector("#id");
const input_pw = document.querySelector("#pw");
const login_btn = document.querySelector(".login_btn-login");

login_btn.addEventListener("click", (e) =>{
    if(input_id.value != "minju" || input_pw.value != '0415'){
        e.preventDefault();
        e.stopPropagation();
    }

    if (!input_id.value){
        input_id.classList.add("is_error");

        const id_error = document.querySelector("#error_id");
        id_error.classList.add("is_show");
        setTimeout(()=> {
            input_id.classList.remove("is_error");
            id_error.classList.remove("is_show");},3000)
    }
    else if (!input_pw.value){
        input_pw.classList.add("is_error");

        const pw_error = document.querySelector("#error_pw");
        pw_error.classList.add("is_show");
        setTimeout(()=> {
            input_pw.classList.remove("is_error");
            pw_error.classList.remove("is_show");},3000)
    }

    else if(input_id.value != "minju" || input_pw.value != '0415'){
        const wr_error = document.querySelector("#error_wr");
        wr_error.classList.add("is_show");
        setTimeout(()=> {
            wr_error.classList.remove("is_show");},3000)
    }
})
