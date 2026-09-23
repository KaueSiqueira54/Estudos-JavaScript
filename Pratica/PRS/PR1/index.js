const main = document.querySelector("main");
let section = document.createElement("section");
section.setAttribute("class", "section");
main.appendChild(section);

section = document.querySelector(".section");
// Estilizando section
section.style.width = "50%";
section.style.height = "auto";
section.style.margin = "auto";
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.textAlign = "center";
section.style.fontSize = "20px";

//Div container 1

let divContainer1 = document.createElement("div");
divContainer1.setAttribute("class", "divContainer1");
divContainer1.style.width = "100%";
divContainer1.style.height = "100px";
divContainer1.style.display = "flex";
section.appendChild(divContainer1);

divContainer1 = document.querySelector(".divContainer1");

//div 1

let div1 = document.createElement("div");
div1.setAttribute("class", "div1");
div1.style.width = "20%";
div1.style.height = "100px";
div1.style.backgroundColor = "blue";
div1.style.color = "#fff";
div1.innerHTML = "Container 1";

divContainer1.appendChild(div1);

//Div 2

let div2 = document.createElement("div");
div2.setAttribute("class", "div2");
div2.style.width = "80%";
div2.style.height = "100px";
div2.style.backgroundColor = "rgb(255, 238, 0)";
div2.style.color = "#000";
div2.innerHTML = "Container 2";

divContainer1.appendChild(div2);

//Segunda div Container

let divContainer2 = document.createElement("div");
divContainer2.style.width = "100%";
divContainer2.style.height = "60px";
divContainer2.style.backgroundColor = "green";
divContainer2.style.color = "#fff";
divContainer2.innerHTML = "Container 3";

section.appendChild(divContainer2);

// div container 3

let divContainer3 = document.createElement("div");
divContainer3.setAttribute("class", "divContainer3");
divContainer3.style.width = "100%";
divContainer3.style.height = "350px";
divContainer3.style.backgroundColor = "red";
divContainer3.style.display = "flex";
divContainer3.style.justifyContent = "center";
divContainer3.style.alignItems = "center";
section.appendChild(divContainer3);

divContainer3 = document.querySelector(".divContainer3");

// Div 3

let div3 = document.createElement("div");
div3.style.width = "95%";
div3.style.height = "320px";
div3.style.backgroundColor = "yellow";
div3.style.color = "#000";
div3.innerHTML = "Container 4";

divContainer3.appendChild(div3);

//div 4

const div4 = document.createElement("div");
div4.style.width = "100%";
div4.style.height = "50px";
div4.style.backgroundColor = "gray";
div4.style.color = "#000";
div4.innerHTML = "Container 5";

section.appendChild(div4);
