// // Select the navbar
// const navbar = document.getElementById('navbar');

// // Add a scroll event listener
// window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled'); // Add the 'scrolled' class when scrolling down
//     } else {
//         navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
//     }
// });

// Image Slider Logic
const productImages = ["../images/product-1.jpg", "../images/product-02.jpg", "../images/product-03.jpg"];
let productIndex = 0;
const productCurrentImage = document.getElementById("productCurrentImage");
const productLeftArrow = document.querySelector(".product-arrow-left");
const productRightArrow = document.querySelector(".product-arrow-right");

productLeftArrow.addEventListener("click", () => {
  productIndex = (productIndex - 1 + productImages.length) % productImages.length;
  productCurrentImage.src = productImages[productIndex];
});

productRightArrow.addEventListener("click", () => {
  productIndex = (productIndex + 1) % productImages.length;
  productCurrentImage.src = productImages[productIndex];
});

// Quantity Selector Logic
const productQuantityInput = document.getElementById("productQuantity");
const productDecrease = document.getElementById("productDecrease");
const productIncrease = document.getElementById("productIncrease");

productDecrease.addEventListener("click", () => {
  if (productQuantityInput.value > 1) {
    productQuantityInput.value--;
  }
});

productIncrease.addEventListener("click", () => {
  productQuantityInput.value++;
});

  
const gallery = document.querySelector('.product-gallery');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentIndex = 0;

const products = document.querySelectorAll('.product-item');
const totalProducts = products.length;
const visibleProducts = 3;
const productWidth = products[0].clientWidth + 20; // Includes margin

function updateGalleryPosition() {
  const translateX = -currentIndex * productWidth;
  gallery.style.transform = `translateX(${translateX}px)`;
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGalleryPosition();
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < totalProducts - visibleProducts) {
    currentIndex++;
    updateGalleryPosition();
  }
});


  

document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.getElementById('cart-icon');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');

  cartIcon.addEventListener('click', function() {
      sidebar.classList.toggle('open'); 
  });

  closeBtn.addEventListener('click', function() {
      sidebar.classList.remove('open'); 
  });
});