function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
// JavaScript to toggle visibility 

  document.getElementById('continue-reading').addEventListener('click', function () {
    const hiddenParagraphs = document.querySelector('.hidden-paragraphs');
    if (hiddenParagraphs.classList.contains('collapse')) {
      hiddenParagraphs.classList.remove('collapse');
      this.textContent = 'minder weergeven'; // Change button text to "Show Less"
    } else {
      hiddenParagraphs.classList.add('collapse');
      this.textContent = 'lees verder'; // Change button text back to "Continue Reading"
    }
  });

//More Homepage Javascript
  // Automatically collapse the paragraphs when "Close" button is clicked
  document.getElementById('close-button').addEventListener('click', function () {
    const hiddenParagraphs = document.querySelector('.hidden-paragraphs');

    // Collapse paragraphs on close
    hiddenParagraphs.classList.add('collapse');

    // Reset the "Continue Reading" button text back to default
    document.getElementById('continue-reading').textContent = 'Continue Reading';
  });

  //JavaScript to close navbar on item click
     // Get the navbar toggler and collapse elements
     const navbarCollapse = document.getElementById('navbarNavDropdown');
     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
   
     // Loop through all nav links and add a click event to collapse the navbar
     navLinks.forEach(link => {
       link.addEventListener('click', () => {
         // Use Bootstrap's Collapse method to close the navbar
         const collapse = new bootstrap.Collapse(navbarCollapse, {
           toggle: false // Don't toggle, just collapse it
         });
         collapse.hide(); // Hide the navbar collapse
       });
     });