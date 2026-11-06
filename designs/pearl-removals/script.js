/* Pearl Removals — small, dependency-free interactions */
(function () {
  // Sticky header shadow
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Desktop dropdowns (click/tap support; hover handled in CSS)
  document.querySelectorAll('.nav__item > button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const open = !item.classList.contains('is-open');
      document.querySelectorAll('.nav__item.is-open').forEach((i) => { i.classList.remove('is-open'); i.firstElementChild.setAttribute('aria-expanded', 'false'); });
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__item')) document.querySelectorAll('.nav__item.is-open').forEach((i) => i.classList.remove('is-open'));
  });

  // Mobile drawer
  const drawer = document.getElementById('drawer');
  const burger = document.getElementById('burger');
  const setDrawer = (open) => {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setDrawer(!drawer.classList.contains('is-open')));
  drawer.querySelectorAll('[data-close], .drawer__nav a, .drawer__cta a').forEach((el) => el.addEventListener('click', () => setDrawer(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });

  // Hide broken/missing photos so the branded gradient shows instead
  document.querySelectorAll('.photo img').forEach((img) => {
    const mark = () => img.setAttribute('data-missing', '');
    if (img.complete && img.naturalWidth === 0) mark();
    img.addEventListener('error', mark);
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Count-up stats
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, end = parseFloat(el.dataset.count), dec = +el.dataset.decimals || 0, t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1400, 1), v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = v.toLocaleString('en-GB', { minimumFractionDigits: dec, maximumFractionDigits: dec });
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

  // Quote form: min date = today, simple success state (wire to your backend/email here)
  const dateInput = document.querySelector('#quoteForm input[type="date"]');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
  const quoteForm = document.getElementById('quoteForm');
  quoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = quoteForm.querySelector('button[type="submit"]');
    btn.textContent = 'Thanks! We\'ll text your price shortly ✓';
    btn.disabled = true;
  });

  // Postcode checker (edit the list to match your coverage)
  const covered = ['NW', 'HA', 'W', 'WD', 'EN', 'UB', 'N'];
  const pcForm = document.getElementById('postcodeForm');
  const pcResult = document.getElementById('postcodeResult');
  pcForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = pcForm.querySelector('input').value.trim().toUpperCase();
    const area = (val.match(/^[A-Z]{1,2}/) || [''])[0];
    if (!area) { pcResult.style.color = 'var(--muted)'; pcResult.textContent = 'Please enter a postcode.'; return; }
    const ok = covered.includes(area);
    pcResult.style.color = ok ? 'var(--mint)' : 'var(--accent-dark)';
    pcResult.textContent = ok ? `✓ Great news — we cover ${val}. Same-week slots available.` : `We can still help with moves from ${val} — call us for a quote.`;
  });

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
