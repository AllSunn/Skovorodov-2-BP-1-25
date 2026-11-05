let note = document.querySelector("#note");
let removeButton = document.querySelector("#remove");

removeButton.addEventListener("click", function() {
    note.remove();
});
