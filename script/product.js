// Initialize or retrieve arrays from local storage

// Prevent page reload or refresh on click anywhere on the document
// document.addEventListener('click', function(event) {
//     event.preventDefault();  // Prevent the default action (such as navigating a link or submitting a form)
// }, true);

let productNames = JSON.parse(localStorage.getItem("productNames")) ;
let productPrices = JSON.parse(localStorage.getItem("productPrices")) ;

// Quantity Selector Logic
const productQuantityIn = document.getElementById("productQuantity");
const bt = document.getElementById("bt1");

bt1.addEventListener('click', function() {
    // Get the current quantity from the input
    const quantity = parseInt(productQuantityInput.value, 10);

    // Ensure that quantity is a valid number greater than 0
    if (quantity > 0 && productPrices.length > 0) {
        // Get the last price in the array
        const lastPrice = productPrices[productPrices.length - 1];
        
        // Calculate the new price by multiplying the last price with the quantity
        const newPrice = lastPrice * quantity;

        // Update the last element of the productPrices array with the new price
        productPrices[productPrices.length - 1] = newPrice;
        
        // Store the updated productPrices array back to localStorage
        localStorage.setItem("productPrices", JSON.stringify(productPrices));

      console.log("Updated prices in localStorage:", productPrices);  
    } else {
        console.log("Invalid quantity or no products in localStorage.");
    }
});
