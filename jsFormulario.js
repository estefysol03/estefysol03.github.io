const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(event) {
  event.preventDefault(); 
  const pelicula = document.getElementById('pelicula');
  const puntuacion = document.getElementById('puntuacion');
  const comentario = document.getElementById('comentario');

  if (pelicula.value.length === 0 || pelicula.value.length > 30) {
    
    return pelicula;
  }

  if (puntuacion.value < 1 || puntuacion.value > 5) {
    
    return puntuacion;
  }

  if (comentario.value.length > 0 && (comentario.value.length < 10 || comentario.value.length > 200)) {
   
    return comentraio;
  }

  agregarPelicula(pelicula.value, puntuacion.value, comentario.value);
  formulario.reset();
}

function agregarPelicula(pelicula, puntuacion, comentario) {
  const listaPeliculas = document.getElementById('listapeliculas');
  const peliculaItem = document.createElement('peliculaItem');
  peliculaItem.textContent = `Pelicula: ${pelicula} - Puntuacion: ${puntuacion} - Comentario: ${comentario}`;
  listaPeliculas.appendChild(peliculaItem);
}

const listaPeliculas = document.getElementById('lista-peliculas');
const peliculas = ['Titanic', 'El Padrino', 'La La Land', 'Avatar'];

peliculas.forEach(pelicula => {
  const peliculaItem = document.createElement('li');
  peliculaItem.textContent = pelicula;
  listaPeliculas.appendChild(peliculaItem);
});
