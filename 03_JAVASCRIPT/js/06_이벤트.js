// 인라인 이벤트 모델 확인하기
function fnTest1(btn) {
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.cursor = "pointer";
}

// 고전 이벤트 모델 확인하기
document.getElementById("btn1").onclick = function() {
    alert('버튼 클릭됨');

    // 고전/표준 이벤트모델 장점
    // -> 이벤트 제거가 가능함

    // 요소의 속성 중 on이벤트명 속성에 함수대신 null을 대입하여
    // 이벤트 삭제 (변수에 값을 새로 대입하여 덮어쓰기하는 원리)
    document.getElementById("btn1").onclick = null;

}

document.getElementById("btn1").onmouseover = function() {
    // 마우스가 요소 위로 올라왔을 때
    document.getElementById("btn1").style.backgroundColor = 'red';
}

document.getElementById("btn1").onmouseout = function() {
    // 마우스가 요소 밖으로 나갔을 때
    document.getElementById("btn1").style.backgroundColor = 'yellow';
}

// 고전 이벤트 모델 단점
// -> 한 요소에 동일한 이벤트 리스너에 대한
//  다수의 이벤트 핸들러를 작성할 수 없다.
//    (마지막으로 대입된 이벤트 핸들러만 적용)
// -> 해결방법 : 표준 이벤트 모델





// 표준 이벤트 모델
const btn2 = document.getElementById("btn2");

// btn2.addEventListener("이벤트명", 함수);

btn2.addEventListener("click", function() {

    // 이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소
    console.log(this);

    this.style.backgroundColor = 'pink';
    this.style.border = "3px solid red";
    this.style.padding = "10px";
    this.style.display = "block";
})

// 고전이벤트 모델의 단점 보완한 것 확인해보기!
btn2.addEventListener("click", function() {
    this.style.fontSize = "20px";
    this.style.color = "red";
    this.style.fontWeight = "bold";
})

// 배경색이 입력한 값으로 변하는 박스
document.getElementById("input1").addEventListener("keyup", function() {
    // 박스 요소 선택
    const div1 = document.getElementById("div1");

    div1.style.backgroundColor = this.value;
});