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

// --- Función que muestra la lista de amigos en el HTML ---
// Limpio la lista y recorro el array con un for para crear los <li>
function mostrarAmigos() {
  // Evito duplicados en la vista borrando lo que haya antes
  listaEl.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaEl.appendChild(li);
  }
}
