let buttons = document.getElementsByTagName("button");

const cart = [];

for (var i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  console.log(button);
  button.addEventListener("click", function (event) {
    console.clear();
    console.log(event.target);
    console.log(event.target.dataset.productSku);
    cart.push(event.target.dataset.productSku);
    console.log(cart);
  });
}

const cartButtons = document.querySelectorAll(".cart-button");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
}

var click = 0;

function numberClick() {
  click += 1;
  document.getElementById("number").innerHTML = click;
}
