
document.addEventListener("DOMContentLoaded", () => {
  const cart = new Map();
  const buttons = document.querySelectorAll(".product-card .btn-light");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const card = button.closest(".product-card");
      const name = card.querySelector("h3")?.textContent.trim();

      if (!name) return;

      const quantity = (cart.get(name) || 0) + 1;
      cart.set(name, quantity);

      button.textContent = `Added (${quantity})`;
      button.setAttribute("aria-live", "polite");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    let message = form.querySelector(".form-feedback");

    if (!message) {
      message = document.createElement("p");
      message.className = "form-feedback";
      message.setAttribute("role", "status");
      form.appendChild(message);
    }

    message.textContent =
      "Demo only: your message has not been sent.";

    form.reset();
  });
});

