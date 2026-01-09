function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}

// Affiche automatiquement le scénario 1 au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  if (typeof showSection === 'function') {
    showSection('section1');
  }

  const menuItems = document.querySelectorAll('.sidebar li');
  if (menuItems.length) {
    // Add click handlers to update active class
    menuItems.forEach(li => {
      const onclick = li.getAttribute('onclick');
      const match = onclick && onclick.match(/showSection\(['"]([^'\"]+)['"]\)/);
      const target = match ? match[1] : null;
      li.addEventListener('click', function(e) {
        menuItems.forEach(i => i.classList.remove('active'));
        li.classList.add('active');
        if (target && typeof showSection === 'function') {
          showSection(target);
        }
      });
    });

    // Set initial active item based on section1
    const initial = Array.from(menuItems).find(li => {
      const onclick = li.getAttribute('onclick');
      const match = onclick && onclick.match(/showSection\(['"]([^'\"]+)['"]\)/);
      return match && match[1] === 'section1';
    });
    if (initial) {
      menuItems.forEach(i => i.classList.remove('active'));
      initial.classList.add('active');
    }
  }
});