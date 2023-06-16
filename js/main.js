var id = document.getElementById("color");

var box = document.getElementById("box");

id.addEventListener("click", function () {
    var arr = ["red", "orange", "yellow", "blue", "green", "pink", "skyblue", "grey", "black", "violet", "aqua"];
    var clip = Math.round(Math.random() * arr.length);
    box.style.backgroundColor = arr[clip];

})
