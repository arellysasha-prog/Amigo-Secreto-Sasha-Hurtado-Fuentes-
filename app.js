// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let buscarAmigos = [];
let nombresAmigos = [];


function agregarAmigo() {
    let listaAmigos = document.getElementById('amigo').value;
     if (listaAmigos == "") 
        alert("Por favor, inserte un nombre.");
         console.log(listaAmigos);
                
         buscarAmigos.push(listaAmigos);  

         mostrarListaAmigos();
     
         document.getElementById('amigo').value = "";
        return; 
}
 

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

   for (let i = 0; i < buscarAmigos.length; i++) {
        let amigo = buscarAmigos[i];

        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

     
function sortearAmigo() {
    if (buscarAmigos.length === 0) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * buscarAmigos.length);
    let amigoSorteado = buscarAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Tu Amigo Secreto Es: <strong>${amigoSorteado}</strong>`;
}