let mainTitle = document.querySelector("#mainTitle");

document.querySelector("#changeTextColor")
.addEventListener("click", function() {
    mainTitle.style.color = "green";
});

document.querySelector("#changePageBg")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});
