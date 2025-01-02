const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.offsetTop; // top position of the button
    const buttonLeft = event.target.offsetLeft; // left position of the button

    const ripple = document.createElement("span");
    ripple.classList.add("circle");
    ripple.style.top = `${y - buttonTop}px`;
    ripple.style.left = `${x - buttonLeft}px`;

    event.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});
