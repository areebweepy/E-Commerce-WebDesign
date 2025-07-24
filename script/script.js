
// Get the necessary DOM elements
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0; // Track the current slide index
let autoScrollInterval; // Variable to store the interval ID

// Function to move to the previous slide
function showSlide(index) {
  // Handle index overflow for smooth transition
  if (index >= items.length) {
    currentIndex = 0; // Go directly to the first image (loop forward)
  } else if (index < 0) {
    currentIndex = items.length - 1; // Go directly to the last image (loop backward)
  } else {
    currentIndex = index; // Set to the requested index
  }

  // Move the carousel by the current index
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to start the automatic scrolling
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    showSlide(currentIndex + 1); // Move to the next slide
  }, 5000); // Change slide every 3 seconds
}

// Function to stop the automatic scrolling
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Event listeners for the prev and next buttons
prevBtn.addEventListener("click", () => {
  stopAutoScroll(); // Stop automatic scrolling when manually navigating
  showSlide(currentIndex - 1); // Show the previous slide
  startAutoScroll(); // Restart automatic scrolling
});

nextBtn.addEventListener("click", () => {
  stopAutoScroll(); // Stop automatic scrolling when manually navigating
  showSlide(currentIndex + 1); // Show the next slide
  startAutoScroll(); // Restart automatic scrolling
});

// Start the automatic scrolling when the page loads
startAutoScroll();

const navbar = document.getElementById('navbar');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add the 'scrolled' class when scrolling down
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
    }
});


  

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
      sidebar.classList.remove('open'); 
  });
});

