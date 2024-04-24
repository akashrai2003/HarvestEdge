// script.js

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", toggleTheme);
    
    // Dropdown functionality for Services menu
    const servicesDropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    servicesDropdown.addEventListener('mouseenter', function() {
      dropdownContent.classList.add('show');
    });
    
    servicesDropdown.addEventListener('mouseleave', function() {
      dropdownContent.classList.remove('show');
    });
  });
  
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  