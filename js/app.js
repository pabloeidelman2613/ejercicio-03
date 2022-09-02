const myDoc = document;

let myLi = myDoc.getElementById("elemento");

const cant_elements = 8;

const elemento = myLi.innerHTML; 

for (let index = 0; index < cant_elements; index++) {
      myLi.innerHTML += elemento;
}