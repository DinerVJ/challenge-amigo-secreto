// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let namesArray = [];
let lsNames = document.getElementById('listaAmigos');
let r = document.getElementById('resultado');

function agregarAmigo(){
    let inputName = document.getElementById('amigo').value;
    if (inputName === ""){
        alert("Ingrese un nombre!");
        return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/.test(inputName)){
        alert("Digite solo letras");
        return;
    }

    namesArray.push(inputName);

    lsNames.innerHTML = namesArray.map(n => `<li>${n}</li>`).join("");
    cleanInputName();
}
function cleanInputName(){
    let cin = document.getElementById('amigo');
    cin.value = '';
}
function sortearAmigo() {
    if (namesArray.length === 0) {
        alert("No hay nombres en la lista")
        return;
    }
    let randomName = Math.floor(Math.random()*namesArray.length);
    let secretFriend = namesArray[randomName];
    console.log(secretFriend);
    r.innerHTML = `El amigo secreto sorteado es: ${secretFriend}`;
    namesArray=[];
    lsNames.innerHTML = "";
}