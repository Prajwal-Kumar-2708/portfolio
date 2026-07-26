document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('.footer-content p');
  if (footer) {
    footer.textContent = `© ${year} Prajwal Kumar. All rights reserved.`;
  }
});
