
document.addEventListener('DOMContentLoaded', function () {
    const filterButton = document.querySelector('.filter-btn'); // Button that triggers the filter
    const filterDropdown = document.querySelector('.filter-dropdown'); // Filter dropdown
    const productGallery = document.querySelector('.product-gallery'); // Product gallery element
  
    // Add click event listener to the filter button
    filterButton.addEventListener('click', function () {
        // Toggle the 'hidden' class on the filter dropdown to show/hide it
        filterDropdown.classList.toggle('hidden');
  
        // Toggle the 'move-down' class on the product gallery to move it down/up
        if (filterDropdown.classList.contains('hidden')) {
            productGallery.classList.remove('move-down'); // Move gallery up if filter is hidden
        } else {
            productGallery.classList.add('move-down'); // Move gallery down if filter is shown
        }
    });
  });

  

document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
  
    cartIcon.addEventListener('click', function() {
        sidebar.classList.toggle('open'); 
    });
  
    closeBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open'); 
    });
  });

  

const p_all = document.getElementById('p1');
const p_women = document.getElementById('p2');
const p_men = document.getElementById('p3');
const p_bag = document.getElementById('p4');
const p_shoes = document.getElementById('p5');
const p_watches = document.getElementById('p6');

const p_all1 = document.querySelector('.product-gallery');
const p_women2 = document.querySelector('.product-gallery2');
const p_men3 = document.querySelector('.product-gallery3');
const p_bag4 = document.querySelector('.product-gallery4');
const p_shoes5 = document.querySelector('.product-gallery5');
const p_watches6 = document.querySelector('.product-gallery6');

p_all.addEventListener('click', function(){
    p_all1.style.display = 'flex';
    // p_all.style.border-bottom= '2px solid #000';

    p_women2.style.display = 'none';
    p_men3.style.display = 'none';
    p_bag4.style.display = 'none';
    p_shoes5.style.display = 'none';
    p_watches6.style.display = 'none';
})

p_women.addEventListener('click', function(){
    p_all1.style.display = 'none';
    p_women2.style.display = 'flex';
    // p_women.style.border-bottom= '2px solid #000';

    p_men3.style.display = 'none';
    p_bag4.style.display = 'none';
    p_shoes5.style.display = 'none';
    p_watches6.style.display = 'none';
})

p_men.addEventListener('click', function(){
    p_all1.style.display = 'none';
    p_women2.style.display = 'none';
    p_men3.style.display = 'flex';
    // p_men.style.border-bottom = '2px solid #000';

    p_bag4.style.display = 'none';
    p_shoes5.style.display = 'none';
    p_watches6.style.display = 'none';
})

p_bag.addEventListener('click', function(){
    p_all1.style.display = 'none';
    p_women2.style.display = 'none';
    p_men3.style.display = 'none';
    p_bag4.style.display = 'flex';
    p_shoes5.style.display = 'none';
    p_watches6.style.display = 'none';
})

p_shoes.addEventListener('click', function(){
    p_all1.style.display = 'none';
    p_women2.style.display = 'none';
    p_men3.style.display = 'none';
    p_bag4.style.display = 'none';
    p_shoes5.style.display = 'flex';
    p_watches6.style.display = 'none';
})

p_watches.addEventListener('click', function(){
    p_all1.style.display = 'none';
    p_women2.style.display = 'none';
    p_men3.style.display = 'none';
    p_bag4.style.display = 'none';
    p_shoes5.style.display = 'none';
    p_watches6.style.display = 'flex';
})







// let productNames = JSON.parse(localStorage.getItem("productNames")) || [];
// let productPrices = JSON.parse(localStorage.getItem("productPrices")) || [];

// // Get all Add to Cart buttons
// const addToCartButtons = document.querySelectorAll(".add-to-cart");

// // Add event listener to each button
// addToCartButtons.forEach(button => {
//     button.addEventListener("click", function() {
//         // Get the product name and price from the button's data attributes
//         const productName = button.getAttribute("data-product-name");
//         const productPrice = button.getAttribute("data-product-price");

//         // Add product name and price to respective arrays
//         productNames.push(productName);
//         productPrices.push(productPrice);

//         // Store updated arrays in localStorage
//         localStorage.setItem("productNames", JSON.stringify(productNames));
//         localStorage.setItem("productPrices", JSON.stringify(productPrices));

//         // Optional: You can log the updated cart arrays for verification
//         console.log("Product Names:", productNames);
//         console.log("Product Prices:", productPrices);
//     });
// });



// document.addEventListener("DOMContentLoaded", () => {
//     // Add event listener to all "Add to Cart" links
//     document.querySelectorAll(".add-to-cart").forEach((cartButton) => {
//       cartButton.addEventListener("click", (event) => {
//         event.preventDefault(); // Prevent default link behavior
        
//         // Find the product details from the parent element
//         const productItem = cartButton.closest(".product-item");
//         const productName = productItem.querySelector(".product-name").textContent.trim();
//         const productPrice = productItem.querySelector(".product-price").textContent.trim();
        
//         // Store the product name and price in variables
//         console.log("Product added to cart:");
//         console.log("Name:", productName);
//         console.log("Price:", productPrice);
//       });
//     });
//   });
  





document.addEventListener("DOMContentLoaded", () => {
    // Initialize or retrieve arrays from local storage
    let productNames = JSON.parse(localStorage.getItem("productNames")) || [];
    let productPrices = JSON.parse(localStorage.getItem("productPrices")) || [];
  
    // Add event listener to all "Add to Cart" links
    document.querySelectorAll(".add-to-cart").forEach((cartButton) => {
      cartButton.addEventListener("click", (event) => {
        // event.preventDefault(); // Prevent default link behavior
  
        // Find the product details from the parent element
        const productItem = cartButton.closest(".product-item");
        const productName = productItem.querySelector(".product-name").textContent.trim();
        const productPriceText = productItem.querySelector(".product-price").textContent.trim();
        const productPrice = parseFloat(productPriceText.replace('$', ''));
  
        // Add the name and numeric price to the respective arrays
        productNames.push(productName);
        productPrices.push(productPrice);
  
        // Update the arrays in local storage
        localStorage.setItem("productNames", JSON.stringify(productNames));
        localStorage.setItem("productPrices", JSON.stringify(productPrices));
  
        // Log the updated arrays for confirmation
        console.log("Product added to cart:");
        console.log("Product Names:", productNames);
        console.log("Product Prices:", productPrices);
      });
    });
  });
  
  
  