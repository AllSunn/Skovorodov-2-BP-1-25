let newTaskField = document.querySelector("#newTaskField");
let createButton = document.querySelector("#createButton");
let itemsList = document.querySelector("#itemsList");
let totalCount = document.querySelector("#totalCount");

createButton.addEventListener("click", function() {
    let value = newTaskField.value;
    
    if (value !== "") {
        let item = document.createElement("li");
        item.textContent = value;
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "Стереть";
        
        removeButton.addEventListener("click", function() {
            item.remove();
            refreshCount();
        });
        
        item.append(removeButton);
        itemsList.append(item);
        
        newTaskField.value = "";
        refreshCount();
    }
});

function refreshCount() {
    let allItems = document.querySelectorAll("#itemsList li");
    totalCount.textContent = "Всего: " + allItems.length;
}
