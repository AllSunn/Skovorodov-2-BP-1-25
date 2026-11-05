let techList = document.querySelector("#technologies");

let firstTech = document.createElement("li");
firstTech.textContent = "Python";

let secondTech = document.createElement("li");
secondTech.textContent = "SQL";

let thirdTech = document.createElement("li");
thirdTech.textContent = "React";

techList.append(firstTech, secondTech, thirdTech);
