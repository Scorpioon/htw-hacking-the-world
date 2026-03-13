async function injectIncludes(){
  const targets = document.querySelectorAll('[data-include]');
  await Promise.all([...targets].map(async target => {
    const path = target.getAttribute('data-include');
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(path);
      target.innerHTML = await res.text();
    } catch (err) {
      console.warn('Include failed:', path, err);
    }
  }));
}

function markCurrentNav(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('is-current');
    }
  });
}

function setYear(){
  const yearNode = document.querySelector('[data-year]');
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

function initGeneratorCard(){
  const button = document.querySelector('[data-open-generator]');
  if (!button) return;
  button.addEventListener('click', () => window.location.href = 'generator/index.html');
}

async function boot(){
  await injectIncludes();
  markCurrentNav();
  setYear();
  initGeneratorCard();
}

document.addEventListener('DOMContentLoaded', boot);
