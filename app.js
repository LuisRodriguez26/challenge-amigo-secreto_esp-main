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

// --- Función para sortear aleatoriamente un amigo ---
// Valido que haya elementos, genero un índice y muestro el resultado
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('La lista está vacía. Agrega al menos un nombre.');
    return;
  }

  // Índice aleatorio entre 0 y amigos.length - 1
  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  // Muestro el resultado dentro del <ul> de resultado
  resultadoEl.innerHTML = `<li>¡El amigo secreto es: <strong>${elegido}</strong>!</li>`;
}

// --- Agregar con Enter para mayor comodidad ---
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    agregarAmigo();
  }
});
