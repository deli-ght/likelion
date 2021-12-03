const btns = document.querySelectorAll("button");
const pad = document.querySelector(".colorPad");

btns.forEach(el => {
    let color = el.textContent;
    el.addEventListener("click", ()=> {
        pad.className = "colorPad"
        pad.classList.add(color);
    })
    el.addEventListener("mouseover", () => {
        el.classList.add(color);
        setTimeout(()=> el.classList.remove(color), 1000)
    })
})