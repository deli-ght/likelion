// js file

const CountBtn = document.querySelector(".btnCount");

CountBtn.addEventListener("click", ()=>{
    const hour = document.querySelector(".hourInput").value;
    const job = document.querySelector(".jobInput").value;

    if (hour && job){
        const resultJob = document.querySelector(".resultJob");
        const result = document.querySelector(".resultHour");
        let hours = parseFloat(hour)
        let studyHr = Math.ceil(10000 / hours)
        resultJob.textContent = job;
        result.textContent = studyHr;
    }else{
        alert("빈칸을 채워주세요!😥")
    }
})