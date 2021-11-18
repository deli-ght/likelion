const resultBtn = document.querySelector("#resultBtn");

function result(){
    const forms = document.querySelectorAll(".question");

    let answer = ''

    forms.forEach((el,idx) => {
        answer += el.elements[`q${idx+1}`].value;
    })

    if ( answer.length != 4 ){
        alert("모두 체크해주세요!");
        return
    }

    if (answer == "AAAA") {
        location.href = "result/nothing.html"
    }
    else if (answer[0] == 'A'){
        if (answer[1] == 'C' && answer[3] == 'A'){
            location.href = "result/wavve.html"
        }
        else location.href = "result/tving.html"
    }
    else {
        if (answer == "CCCC") {
            location.href = "result/all.html"
        }
        else if(answer[2] == "C"){
            if(answer[3] == "A"){
                location.href = "result/watcha.html"
            }
            else location.href = "result/disney.html"
        }
        else location.href = "result/netflix.html"
    }
}

resultBtn.addEventListener('click', result);