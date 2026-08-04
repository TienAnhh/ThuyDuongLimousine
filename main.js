(function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('nav.main');
  var dropdown = document.querySelector('.has-dropdown');
  var trigger = document.querySelector('.dropdown-trigger');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('mobile-open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (!isOpen && dropdown) dropdown.classList.remove('open');
    });
  }

  if (trigger && dropdown) {
    trigger.addEventListener('click', function (e) {
      // On touch / narrow screens, clicking toggles the submenu instead of navigating.
      if (window.innerWidth <= 980) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  }

  // Close mobile menu when a normal link is tapped (better UX on navigation)
  if (nav) {
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (link === trigger) return;
        nav.classList.remove('mobile-open');
        if (dropdown) dropdown.classList.remove('open');
      });
    });
  }

  // Close dropdown on outside click (desktop)
  document.addEventListener('click', function (e) {
    if (dropdown && !dropdown.contains(e.target) && window.innerWidth > 980) {
      dropdown.classList.remove('open');
    }
  });
})();
