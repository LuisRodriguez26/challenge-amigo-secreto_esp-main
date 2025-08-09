// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Aquí guardo los nombres que va ingresando el usuario
let amigos = [];

// Referencias a elementos del HTML
const input = document.getElementById('amigo');
const listaEl = document.getElementById('listaAmigos');
const resultadoEl = document.getElementById('resultado');

// --- Función para añadir un amigo ---
// Tomo el valor del input, valido y lo agrego al array
function agregarAmigo() {
  const nombre = input.value.trim();

  // Si está vacío, aviso con un alert (tal como pide la consigna)
  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Agrego el nombre al array
  amigos.push(nombre);

  // Limpio el campo para que quede listo para el siguiente nombre
  input.value = '';

  // Refresco la lista que se muestra en pantalla
  mostrarAmigos();
}
