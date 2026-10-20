// 1. Select the elements
//const menuToggle = document.querySelector('.menu-toggle');
//const navMenu = document.querySelector('.nav-menu');

// 2. Open/close the menu when the button is clicked
//menuToggle.addEventListener('click', () => {
  // toggle the 'open' class on navMenu and store the result in isOpen
  //const isOpen = navMenu.classList.toggle('open');
  // update the button's aria-expanded attribute
  //menuToggle.setAttribute('aria-expanded', isOpen);
  // bonus: swap the icon between fa-bars and fa-xmark
  //const icon = menuToggle.querySelector('i');
  //if (isOpen) {
    //icon.classList.remove('fa-bars');
    //icon.classList.add('fa-xmark');
  //} else {
    //icon.classList.remove('fa-xmark');
    //icon.classList.add('fa-bars');
//  }
//});

// 3. Close the menu when a nav link is clicked
//const navLinks = document.querySelectorAll('.nav-links a')
// select all links inside .nav-links
//navLinks.forEach(link => {
  //link.addEventListener('click', () => {
    //navMenu.classList.remove('open');
    //menuToggle.setAttribute('aria-expanded', false);
 // });
//});

// 1. Select the elements

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