
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
  const elements = document.querySelectorAll('.reveal-on-scroll, .wave-container, .fade-stagger, .typing-animation');
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
  
  // Add scroll direction detection for directional animations
  let lastScrollTop = 0;
  const scrollDirectionElements = document.querySelectorAll('.scroll-direction-aware');
  
  if (scrollDirectionElements.length > 0) {
    const handleScrollDirection = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      
      scrollDirectionElements.forEach(el => {
        if (st > lastScrollTop) {
          // Downward scroll
          el.classList.add('scrolling-down');
          el.classList.remove('scrolling-up');
        } else if (st < lastScrollTop) {
          // Upward scroll
          el.classList.add('scrolling-up');
          el.classList.remove('scrolling-down');
        }
      });
      
      lastScrollTop = st <= 0 ? 0 : st;
    };
    
    window.addEventListener('scroll', handleScrollDirection);
  }
  
  // Add magnetic effect to elements with the magnetic class
  const magneticElements = document.querySelectorAll('.magnetic');
  
  magneticElements.forEach(el => {
    const strength = 30;
    
    el.addEventListener('mousemove', (e: MouseEvent) => {
      const element = el as HTMLElement;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      element.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      const element = el as HTMLElement;
      element.style.transform = 'translate(0px, 0px)';
    });
  });

  // Initialize typing animations
  initTypingAnimation();

  return observer;
};

// Typing animation for text elements
const initTypingAnimation = () => {
  const typingElements = document.querySelectorAll('.typing-animation');
  
  typingElements.forEach(element => {
    if (element.classList.contains('revealed')) return;
    
    const text = element.textContent || '';
    element.textContent = '';
    
    element.addEventListener('revealed', () => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
    });
    
    // Create custom event for when the element is revealed
    const revealEvent = new CustomEvent('revealed');
    
    // Observer for typing animation elements
    const typingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('typing-completed')) {
          entry.target.classList.add('typing-completed');
          entry.target.dispatchEvent(revealEvent);
        }
      });
    }, { threshold: 0.7 });
    
    typingObserver.observe(element);
  });
};
