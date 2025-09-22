const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {
    // Allow only single digits 0-9
    if (e.key >= '0' && e.key <= '9') {
      // Clear the input before the new value is set by the browser
      codes[index].value = ''; 
      // Move focus to the next input if it exists
      if (codes[index + 1]) {
        setTimeout(() => codes[index + 1].focus(), 10);
      }
    } else if (e.key === 'Backspace') {
      // Move focus to the previous input if it exists
      if (codes[index - 1]) {
        setTimeout(() => codes[index - 1].focus(), 10);
      }
    }
  });
});
