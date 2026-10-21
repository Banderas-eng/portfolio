
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const icon = menuToggle.querySelector('i');
const navLinks = document.querySelectorAll('.nav-links a');

// Close the menu and reset the button
function closeMenu() {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', false);
  icon.classList.remove('fa-xmark');
  icon.classList.add('fa-bars');
}

// 2. Open/close the menu when the button is clicked
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    closeMenu();
  }
});

// 3. Close the menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// 4. Highlight the active nav link while scrolling
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // get the id of the section that's now visible
      const id = entry.target.id;
      // remove 'active' from all nav links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      // add 'active' to the link whose href matches '#' + id
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, {
  rootMargin: '-50% 0px -50% 0px'
});

// tell the observer to watch each section
sections.forEach(section => {
  observer.observe(section);
});