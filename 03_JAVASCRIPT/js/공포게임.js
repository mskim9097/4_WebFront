const box = document.getElementById("box");

let count = 0;

box.addEventListener("mouseover", function() {
    
    count++;

    if(count == 1) {
        box.classList.remove("none");
        box.classList.add("love");
        box.innerText = "사랑해"
    } else if(count < 11) {
        const text = "사랑해";
        box.innerText += text;
    } else {
        box.classList.remove("love");
        box.classList.add("stop");
        box.innerText = "그만해!!!";
    }
})

