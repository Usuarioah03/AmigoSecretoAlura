// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];



// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); 

    if (nombre === "") {
        // Si el campo está vacío, mostrar una alerta
        alert("Por favor, ingrese un nombre válido.");
    } else {
        // Si el nombre no está vacío, agregarlo a la lista
        amigos.push(nombre);
        // Actualizar la visualización de la lista
        actualizarLista(); 
    }
    // Limpiar el campo de texto después de agregar el nombre
    input.value = '';


}

// Función para actualizar la lista visual de amigos
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizarla

    amigos.forEach(amigo => {
        const listItem = document.createElement('li'); // Crear un nuevo ítem de lista
        listItem.textContent = amigo; // Asignar el nombre al ítem
        listaAmigos.appendChild(listItem); // Agregar el ítem a la lista
    });
}

// Función para hacer el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, añada nombres primero.");
        return;
    }

    // Seleccionar un amigo aleatoriamente
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en la página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}

