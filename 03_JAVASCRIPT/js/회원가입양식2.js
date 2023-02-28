document.getElementById("inputId").addEventListener("keyup", function() {
    // 영어 소문자로 시작하고, 영어 대/소문자, 숫자, - , _ 로만 이루어진 6~14 글자 사이 문자열인지 검사
    const regExId = /^[a-z][A-Za-z0-9-,_]{5,13}$/;
    const inputId = document.getElementById("inputId");
    
    if(regExId.test(this.value)) {
        inputId.style.backgroundColor = "springgreen"; 
        inputId.style.color = "black";      
        
    } else {
        inputId.style.backgroundColor = "red";
        inputId.style.color = "white";
    }

})

const inputPw1 = document.getElementById("inputPw1");
const inputPw2 = document.getElementById("inputPw2");


document.getElementById("inputPw2").addEventListener("keyup", function() {

    if(inputPw2.value == inputPw1.value) {
        resultPw1.innerText = "비밀번호 일치"
        resultPw1.classList.add("confirm");
        resultPw1.classList.remove("error");
        
    } else {
        resultPw1.innerText = "비밀번호 불일치";
        resultPw1.classList.remove("confirm");
        resultPw1.classList.add("error");
    }
})

document.getElementById("inputName").addEventListener("keyup", function() {
    const regExName = /^[가-힣]{2,5}$/;
    const resultName = document.getElementById("resultName");

    if(regExName.test(this.value)) {
        resultName.innerText = "정상입력";
        resultName.classList.add("confirm");
        resultName.classList.remove("error");
        
    } else {
        resultName.innerText = "한글만 입력하세요";
        resultName.classList.remove("confirm");
        resultName.classList.add("error");
    }
})

function validate() {


    const gender = document.getElementsByName("gender");
    const checked = false;

    const inputPhone = document.getElementById("inputPhone");
    const regExPhone = /^0[0-9]{1,2}-[0-9]{3,4}-[0-9]{3,4}/;



    for(let i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            checked = true;
            break;
        }
    }

    if (!checked) {
        alert('성별을 선택해주세요');
    }
    if(regExPhone.test(inputPhone.value) == false) {
        alert('전화번호의 형식이 올바르지 않습니다');
    }
}

const reset = document.getElementById("reset");

reset.addEventListener("click", function() {
    inputId.style.backgroundColor = "white"; 
    inputId.style.color = "black";
    resultPw1.innerText = "";
    resultName.innerText = "";
})
