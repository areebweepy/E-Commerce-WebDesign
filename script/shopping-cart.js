document.addEventListener("DOMContentLoaded", function() {
    // Retrieve and parse productPrices from localStorage
    let productPrices = JSON.parse(localStorage.getItem("productPrices"));

    // Check if productPrices is valid
    if (productPrices && Array.isArray(productPrices)) {
        let totalPrice = document.getElementById("totalPrice");
        let totalPrice2 = document.getElementById("totalPrice2");
        let total_p = 0;

        // Calculate the total price
        for (let i = 0; i < productPrices.length; i++) {
            total_p += parseFloat(productPrices[i]); // Ensure numbers are treated as floats
        }

        // Update the total price on the page
        totalPrice.innerHTML = "$" + total_p.toFixed(2); // Format to two decimal places
        totalPrice2.innerHTML = "$" + total_p.toFixed(2); // Format to two decimal places

        console.log("Updated prices in localStorage:", productPrices);
    } else {
        console.error("No valid product prices found in localStorage.");
    }
});
