const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');



btnCart.addEventListener('click', () => {

   containerCartProducts.classList.toggle('hidden-cart');
});

  var myCarousel = document.querySelector('#carouselExample');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Cambia las diapositivas cada 5 segundos
    wrap: true // Permite recorrer el carrousel en bucle
  });



