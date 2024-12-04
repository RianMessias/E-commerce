let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartIcon = document.getElementById('cartIcon');
const cartBadge = document.getElementById('cart-badge');
const cartModal = document.getElementById('cartModal');
const cartItemsList = document.getElementById('cartItemsList');
const cartTotal = document.getElementById('cartTotal');

function updateCartUI() {
  cartBadge.textContent = cart.length;
  let total = 0;
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name, price, image) {
  const product = { name, price, image };
  cart.push(product);
  updateCartUI();
}

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

document.getElementById('closeCartModal').addEventListener('click', () => {
  cartModal.style.display = 'none';
});

document.getElementById('openCartBtn').addEventListener('click', () => {
  cartModal.style.display = 'block';
});

document.getElementById('closeCarrinho').addEventListener('click', () => {
  cartModal.style.display = 'none';
});

updateCartUI();
