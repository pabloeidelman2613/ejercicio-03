const myDoc = document;

let myLi = myDoc.getElementById("elemento");

const cant_elements = prompt("Ingrese la cantidad de veces que se va a " +
"repetir el video");

const elemento = myLi.innerHTML; 

for (let index = 1; index < cant_elements; index++) {
      myLi.innerHTML += elemento;
}