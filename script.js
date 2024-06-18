// JavaScript for navigation and setting selected state
document.getElementById('gamecenter').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'contact.html';
  });

document.getElementById('donate').addEventListener('click', function() {
    window.location.href = 'index.html#donate';
  });

  // Function to set selected state
function setSelectedState() {
    const navItems = document.querySelectorAll('.nav ul li');
    navItems.forEach(item => item.classList.remove('selected'));

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    if (currentPath.includes('contact.html')) {
      document.getElementById('contact').classList.add('selected');
    } 
    
    else if (currentHash === '#donate') {
      document.getElementById('donate').classList.add('selected');
    } 
    
    else {
      document.getElementById('gamecenter').classList.add('selected');
    }
  }
  // Call function on page load
window.onload = setSelectedState;
