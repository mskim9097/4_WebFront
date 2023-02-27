document.getElementById("inputId").addEventListener("keyup", function() {
    const regExId = /^[a-z0-9]{5,}$/;
    const resultId = document.getElementById("resultId");


    if(regExId.test(this.value)) {
        resultId.innerText = "아이디 사용 가능"
        resultId.classList.add("confirm");
        resultId.classList.remove("error");

        
        
    } else {
        resultId.innerText = "아이디 사용 불가능"
        resultId.classList.remove("confirm");
        resultId.classList.add("error");
    }

})

const inputPw1 = document.getElementById("inputPw1");
const inputPw2 = document.getElementById("inputPw2");


document.getElementById("inputPw1").addEventListener("keyup", function() {
    const regExPw1 = /^[a-zA-Z0-9!@#$%^&*()-_=+\|`~,./<>?]{8,}$/;
    const resultPw1 = document.getElementById("resultPw1");

    if(regExPw1.test(this.value)) {
        resultPw1.innerText = "비밀번호 사용 가능"
        resultPw1.classList.add("confirm");
        resultPw1.classList.remove("error");
        
        
    } else {
        resultPw1.innerText = "비밀번호 사용 불가능"
        resultPw1.classList.remove("confirm");
        resultPw1.classList.add("error");
    }
})

document.getElementById("inputPw2").addEventListener("keyup", function() {
    
    const resultPw2 = document.getElementById("resultPw2");

    if(inputPw2.value == inputPw1.value) {
        resultPw2.innerText = "비밀번호 일치"
        resultPw2.classList.add("confirm");
        resultPw2.classList.remove("error");
        
    } else {
        resultPw2.innerText = "";
        resultPw2.classList.remove("confirm");
        resultPw2.classList.add("error");
    }
})

document.getElementById("inputName").addEventListener("keyup", function() {
    const regExName = /^[가-힣]{2,}$/;
    const resultName = document.getElementById("resultName");

    if(regExName.test(this.value)) {
        resultName.classList.add("confirm");
        resultName.classList.remove("error");
        
    } else {
        resultName.classList.remove("confirm");
        resultName.classList.add("error");
    }
})

document.getElementById("inputPhone").addEventListener("keyup", function() {
    const regExPhone = /^(010)[0-9]{8}$/;
    const resultPhone = document.getElementById("resultPhone");

    if(regExPhone.test(this.value)) {
        resultPhone.classList.add("confirm");
        resultPhone.classList.remove("error");
        
    } else {
        resultPhone.classList.remove("confirm");
        resultPhone.classList.add("error");
    }
})

document.getElementById("inputIdNum").addEventListener("keyup", function() {
    const regExIdNum = /^[0-9]{6}-[1234]{1}[0-9]{6}$/;
    const resultIdNum = document.getElementById("resultIdNum");

    if(regExIdNum.test(this.value)) {
        resultIdNum.classList.add("confirm");
        resultIdNum.classList.remove("error");
        
    } else {
        resultIdNum.classList.remove("confirm");
        resultIdNum.classList.add("error");
    }
})

document.getElementById("inputEmail").addEventListener("keyup", function() {
    const regExEmail = /^[a-zA-Z0-9_.-]{1,}(@)[[a-zA-Z0-9]{1,}.com$/;
    const resultEmail = document.getElementById("resultEmail");

    if(regExEmail.test(this.value)) {
        resultEmail.classList.add("confirm");
        resultEmail.classList.remove("error");
        
    } else {
        resultEmail.classList.remove("confirm");
        resultEmail.classList.add("error");
    }
})

document.getElementById("btn").addEventListener("click", function() {
    if(resultId.classList.contains("confirm") & resultPw1.classList.contains("confirm") &
    resultPw2.classList.contains("confirm") & resultName.classList.contains("confirm") &
    resultPhone.classList.contains("confirm") & resultIdNum.classList.contains("confirm")&
    resultEmail.classList.contains("confirm")) {
        alert('사용 가능한 계정입니다!');
    } else {
        alert('유효성 검사가 완료되지 않았습니다');
    }
})