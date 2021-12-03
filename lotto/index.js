// //Math.random
// //0부터 10미만의 값 랜덤으로 출력
// Math.floor(Math.random()*10); 

// //0부터 46미만의 값을 랜덤으로 출력
// Math.floor(Math.random()*46);

// //2부터 48미만의 값을 랜덤으로 출력
// Math.floor(Math.random()*46) + 2; 

const lottoBtn = document.querySelector(".lotto-btn");
const makeLotto =  document.querySelector(".root");

function random(end, start = 0){
    return Math.floor(Math.random() * ( end - start + 1)) + start;
}

function getLotto(){
    let arr = new Set()
    while(arr.size < 6){
        arr.add(random(45,1))
    }
    
    makeLotto.innerHTML = "";
    makeBall(arr);
}

function makeBall(arr){
    arr.forEach(el => {
        const li = document.createElement("div");
        li.classList.add("ball");
        li.textContent = el;
        makeLotto.appendChild(li);
    })
}

lottoBtn.addEventListener("click", getLotto);


