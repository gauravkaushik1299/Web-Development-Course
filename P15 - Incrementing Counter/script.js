const counter = document.querySelectorAll(".counter");

counter.forEach((counter) => {
  counter.innerHTML = 0;
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerHTML;
    const increment_speed = target / 200;
    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment_speed)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerHTML = target;
    }
  };
  updateCounter();
});
