/* ============================================================
   AMX Luxury — Interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Scroll-triggered reveals ---------- */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

  /* ---------- Vegan stat cards ---------- */
  var statObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('vegan__stat--visible');
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.vegan__stat').forEach(function (el) { statObserver.observe(el); });

  /* ---------- Navigation: scroll state ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu toggle ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('nav__toggle--active');
      links.classList.toggle('nav__links--open');
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('nav__toggle--active');
        links.classList.remove('nav__links--open');
      });
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = nav.offsetHeight + 10;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ---------- Hero parallax (subtle) ---------- */
  var heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = 'translateY(' + (y * 0.3) + 'px)';
      }
    }, { passive: true });
  }

  /* ---------- Product image switcher ---------- */
  window.switchProductImage = function (thumb, src) {
    var mainImg = document.querySelector('.product__main-img');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.product__thumb').forEach(function (t) {
      t.classList.remove('product__thumb--active');
    });
    thumb.classList.add('product__thumb--active');
  };
})();
