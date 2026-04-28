/* =========================================================
   STARVE THE DOG — site script
   ========================================================= */

(function () {
  'use strict';

  // ---------- Year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Mobile nav toggle ----------
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    // Close menu when a link is clicked (mobile)
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Subtle scroll reveal ----------
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll(
      '.section__title, .card, .when__block, .about__copy, .about__verse, .rsvp'
    );
    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ---------- RSVP form (AJAX submit to Formspree) ----------
  const form = document.getElementById('rsvpForm');
  const successMsg = document.getElementById('rsvpSuccess');
  const errorMsg = document.getElementById('rsvpError');

  if (form) {
    form.addEventListener('submit', async function (e) {
      // If the action is still the placeholder, let the browser handle
      // it normally so the developer notices it isn't wired up.
      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        return;
      }

      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      successMsg.hidden = true;
      errorMsg.hidden = true;
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;

      try {
        const data = new FormData(form);
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          form.reset();
          successMsg.hidden = false;
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          errorMsg.hidden = false;
        }
      } catch (err) {
        errorMsg.hidden = false;
      } finally {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
      }
    });
  }
})();
