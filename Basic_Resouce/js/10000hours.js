// js file

const CountBtn = document.querySelector(".btnCount");

CountBtn.addEventListener("click", ()=>{
    const hour = document.querySelector(".hourInput");
    const job = document.querySelector(".jobInput");

    const resultJob = document.querySelector(".resultJob");
    const result = document.querySelector(".resultHour");
    let hours = parseInt(hour.value)
    let studyHr = Math.ceil(10000 / hours)
    resultJob.textContent = job.value;
    result.textContent = studyHr;
})