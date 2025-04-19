
export const initScrollAnimations = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      } else if (entry.target.classList.contains('reset-on-leave')) {
        entry.target.classList.remove('revealed');
      }
    });
  }, options);

  // Observe all elements that need to be animated on scroll
  const elements = document.querySelectorAll('.reveal-on-scroll, .wave-container');
  elements.forEach(el => {
    observer.observe(el);
  });

  // Add parallax effect
  const parallaxElements = document.querySelectorAll('.parallax-scroll');
  let scrollY = window.scrollY;
  
  if (parallaxElements.length > 0) {
    const updateParallax = () => {
      scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll', String(scrollY));
    };
    
    window.addEventListener('scroll', updateParallax);
    updateParallax();
  }

  return observer;
};
