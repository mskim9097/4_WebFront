const inputBox = document.getElementsByClassName("inputBox");
const colorBox = document.getElementsByClassName("colorBox");
const duration = document.getElementsByClassName("duration");

// 배경색,텍스트색 변경
for(let i = 0; i < inputBox.length; i++) {
    inputBox[i].addEventListener("keyup", function() {
        colorBox[i].style.backgroundColor = inputBox[i].value;
        inputBox[i].style.color = inputBox[i].value;
    })
}

// 딜레이 생성, 텍스트 변경
const inputTD = document.getElementById("inputTD");
inputTD.addEventListener("click", function() {
    document.getElementById("currentTD").innerText = inputTD.value + "초";
    
    for(let i = 0; i < duration.length; i++) {
        duration[i].style.transitionDuration = inputTD.value + 's';
    }
})

// 배경색, 텍스트색, 딜레이, 딜레이텍스트 초기화
const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    
    for(let i = 0; i < colorBox.length; i++){
        colorBox[i].style.backgroundColor = "transparent";
        
    }

    for(let i = 0; i < inputBox.length; i++) {
        inputBox[i].value = "";
    }

    for(let i = 0; i < duration.length; i++) {
        document.getElementById("currentTD").innerText = "0초";
        duration[i].style.transitionDuration = '0s';
    }

    
})