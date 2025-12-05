let cartValue = 0;

const cartDisplay = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-btn");


addButtons.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault(); 

    cartValue++;
    cartDisplay.textContent = `🛒 Cart (${cartValue})`;
  });
});
