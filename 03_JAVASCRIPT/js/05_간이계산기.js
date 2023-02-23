// 전역 변수
const num1 = document.getElementById("num1"); // 요소 추적 O, 값, 속성 추적 X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function add() {

    // 함수가 호출 되었을 때 내부 코드가 해석되면서 수행.
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.innerText = n1 + n2;
}

function sub() {
    result.innerText = Number(num1.value) - Number(num2.value);
}

function mul() {
    result.innerText = Number(num1.value) * Number(num2.value);
}

function div() {
    result.innerText = Number(num1.value) / Number(num2.value);
}

function mod() {
    result.innerText = Number(num1.value) % Number(num2.value);
}




