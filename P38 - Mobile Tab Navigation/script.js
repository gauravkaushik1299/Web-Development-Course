const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

if (contents.length > 0 && listItems.length > 0) {
  listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      hideAllContents();
      hideAllItems();

      item.classList.add('active');
      contents[index].classList.add('show');
    });
  });
}

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach(item => item.classList.remove('active'));
}

// Smooth scrolling
document.querySelectorAll('nav ul li').forEach((item, index) => {
  item.addEventListener('click', () => {
    window.scrollTo({
      top: document.body.scrollHeight / contents.length * index,
      behavior: 'smooth'
    });
  });
});

// Lazy loading images
const images = document.querySelectorAll('img');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src || entry.target.src;
      observer.unobserve(entry.target);
    }
  });
});

images.forEach(image => observer.observe(image));

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for stored preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Store preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
