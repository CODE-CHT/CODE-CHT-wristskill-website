// WristSkill — tiny interactive helper
// Mobile nav toggle + scroll-triggered fade-ins

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Fade in elements as they enter the viewport
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });

    // Hero items fade in immediately on load
    setTimeout(function () {
      document.querySelectorAll('.hero .fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
    }, 80);
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
