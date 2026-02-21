(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-right');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var expanded = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    toggle.textContent = expanded ? '\u2715' : '\u2630';
  });
})();
