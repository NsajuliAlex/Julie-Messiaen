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