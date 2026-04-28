/* ============================================
   SCRIPT.JS — BoardBench
   Simple interactivity (vanilla JS only)
   ============================================ */

// ---- First-Visit Gateway ----
// Redirect to login.html on first visit (only if not already on login page).
(function checkFirstVisit() {
  var isLoginPage = window.location.pathname.endsWith('login.html');
  if (!isLoginPage && !localStorage.getItem('boardbench_visited')) {
    window.location.href = 'login.html';
  }
})();

// ---- Mobile Navigation Toggle ----
// Opens and closes the navbar menu on mobile screens.
(function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  // Close menu when a link is clicked (mobile UX)
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
    });
  });
})();


// ---- View Toggle (Comparisons Page) ----
// Switches between table view and card view for comparison data.
(function initViewToggle() {
  const btnTable = document.getElementById('btnTable');
  const btnCards = document.getElementById('btnCards');

  // All table-view and card-view containers
  const tableViews = document.querySelectorAll('.table-view');
  const cardViews = document.querySelectorAll('.card-view');

  if (!btnTable || !btnCards) return;

  // Show table view (default)
  function showTableView() {
    tableViews.forEach(function (el) { el.classList.remove('hidden'); });
    cardViews.forEach(function (el) { el.classList.remove('active'); });
    btnTable.classList.add('active');
    btnCards.classList.remove('active');
  }

  // Show card view
  function showCardView() {
    tableViews.forEach(function (el) { el.classList.add('hidden'); });
    cardViews.forEach(function (el) { el.classList.add('active'); });
    btnCards.classList.add('active');
    btnTable.classList.remove('active');
  }

  btnTable.addEventListener('click', showTableView);
  btnCards.addEventListener('click', showCardView);
})();


// ---- Highlight Better Option on Hover ----
// When hovering over a table row, highlights the better-value cell.
(function initRowHighlight() {
  const rows = document.querySelectorAll('.comparison-table tbody tr');

  rows.forEach(function (row) {
    row.addEventListener('mouseenter', function () {
      const highlighted = row.querySelector('.highlight-col');
      if (highlighted) {
        highlighted.style.background = 'rgba(79, 140, 255, 0.12)';
      }
    });

    row.addEventListener('mouseleave', function () {
      const highlighted = row.querySelector('.highlight-col');
      if (highlighted) {
        highlighted.style.background = 'rgba(79, 140, 255, 0.06)';
      }
    });
  });
})();


// ---- Navbar Background on Scroll ----
// Adds a slightly more opaque background when scrolled down.
(function initScrollNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
      navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }
  });
})();
