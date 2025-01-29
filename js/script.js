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

  // Get the navbar elements
  const navbarCollapse = document.getElementById('navbarNavDropdown');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  let isMenuOpen = false; // Track the state of the menu (open or closed)

  // Function to collapse the navbar using Bootstrap's Collapse API
  function collapseNavbar() {
    const collapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    collapse.hide(); // Hide the navbar collapse
    isMenuOpen = false; // Menu is closed
  }

  // Open navbar when the toggle button is clicked
  navbarToggler.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Toggle the menu state
    if (isMenuOpen) {
      // Menu is open, no collapse action yet
    } else {
      collapseNavbar(); // Collapse menu if it's closed
    }
  });

  // Collapse the navbar when a nav item is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        collapseNavbar(); // Collapse the menu after a link is clicked
      }
    });
  });

  // Collapse navbar when clicking anywhere outside of the navbar
  document.addEventListener('click', (event) => {
    if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
      if (isMenuOpen) {
        collapseNavbar(); // Collapse the menu if clicked outside
      }
    }
  });

  // Collapse the navbar when scrolling on the page
  window.addEventListener('scroll', () => {
    if (isMenuOpen) {
      collapseNavbar(); // Collapse the menu if the user starts scrolling
    }
  });

  // Prevent closing the navbar when clicking inside the navbar or toggler
  navbarCollapse.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  function toggleHiddenItems(listId, button) {
    const list = document.getElementById(listId);
    const hiddenItems = list.querySelectorAll('.hidden');
    const container = list.parentElement;

    // Toggle visibility
    hiddenItems.forEach(item => {
      item.classList.toggle('visible');
    });

    // Change button text
    if (button.textContent === '+') {
      button.textContent = '-';
      if (hiddenItems.length > 3) {
        container.classList.add('scrollable-list');
      }
    } else {
      button.textContent = '+';
      container.classList.remove('scrollable-list');
    }
  }

  // Auto-collapse on scroll away from the list
  window.addEventListener('scroll', () => {
    const buttons = document.querySelectorAll('.expand-button');
    buttons.forEach(button => {
      if (button.textContent === '-') {
        const listId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        const list = document.getElementById(listId);
        const listRect = list.getBoundingClientRect();

        if (listRect.bottom < 0 || listRect.top > window.innerHeight) {
          button.textContent = '+';
          const hiddenItems = list.querySelectorAll('.hidden');
          hiddenItems.forEach(item => {
            item.classList.remove('visible');
          });
          list.parentElement.classList.remove('scrollable-list');
        }
      }
    });
  });

  // Collapse list when clicking outside the list
  document.addEventListener('click', (event) => {
    const buttons = document.querySelectorAll('.expand-button');
    buttons.forEach(button => {
      if (button.textContent === '-') {
        const listId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        const list = document.getElementById(listId);
        const container = list.parentElement;

        if (!container.contains(event.target) && event.target !== button) {
          button.textContent = '+';
          const hiddenItems = list.querySelectorAll('.hidden');
          hiddenItems.forEach(item => {
            item.classList.remove('visible');
          });
          container.classList.remove('scrollable-list');
        }
      }
    });
  });