export function initScrollUp() {
  const scrollBtn = document.getElementById('scroll-up-btn');
  
  if (!scrollBtn) {
    console.error('Scroll button not found in HTML');
    return;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove('is-hidden');
    } else {
      scrollBtn.classList.add('is-hidden');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}