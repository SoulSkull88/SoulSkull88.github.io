//show cart

(function(){
const Cart = document.getElementById('cart-info');
const cart = document.getElementById('cart');
Cart.addEventListener("click", function(){
	cart.classList.toggle('scroll');
});

})();