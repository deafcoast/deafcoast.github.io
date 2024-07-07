// deafcoast.js
//
// UI management for deafcoast.com.

function getAll(identifier) {
  return document.querySelectorAll(identifier);
}

function get(identifier) {
  return document.querySelector(identifier);
}

function setupClicky(clicky) {
  const p = clicky.parentElement.nextElementSibling;
  clicky.onclick = function() {
    if (p.style.display === 'block') {
      clicky.innerHTML = "&larr;";
      clicky.parentElement.nextElementSibling.style.display = 'none';
    } else {
      clicky.innerHTML = "&darr;";
      clicky.parentElement.nextElementSibling.style.display = 'block';
    }
  };
}

function setupClickies() {
  const clickies = getAll("div.clicky");
  for (const clicky of clickies) {
    // To separate scope.
    setupClicky(clicky);
  }
}

function setupCarousel(divs) {
}

function setupCarousels() {
  const carousels = getAll(".carousel');
  for (const carousel of carousels) {
    setupCarousel(carousel);
  }
}

function getStarted() {
  setupClickies();
}
