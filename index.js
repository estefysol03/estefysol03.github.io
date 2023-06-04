const btnCart = document.querySelector('.container-icon');
const containerCartProducts = document.querySelector('.container-cart-products');



btnCart.addEventListener('click', () => {

   containerCartProducts.classList.toggle('hidden-cart');
});

  /*var myCarousel = document.querySelector('#carouselExample');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Cambia las diapositivas cada 5 segundos
    wrap: true // Permite recorrer el carrousel en bucle
  });
*/

  $(document).ready(function() {
    $('.carousel').slick();
  });
  window.addEventListener('load', function() {
    var carruselItems = document.querySelectorAll('.carrusel-item');
    var carruselWidth = carruselItems[0].offsetWidth;
    var carrusel = document.querySelector('.carrusel');
    carrusel.style.width = carruselWidth * carruselItems.length + 'px';
  });
  