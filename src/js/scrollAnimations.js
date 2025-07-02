/**
 * Sophisticated Scroll Animation System
 * Demonstrates innovation through smooth, professional animations
 */

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
    } else {
      this.setupAnimations();
    }
    
    // Fallback: ensure animations work even if intersection observer fails
    setTimeout(() => {
      this.observeElements();
    }, 100);
  }

  setupAnimations() {
    // Create intersection observer for scroll animations
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, this.observerOptions);

    // Add js-ready class to enable animations
    this.addJsReadyClass();
    
    // Observe all elements with animation classes
    this.observeElements();
    
    // Add smooth scroll behavior
    this.setupSmoothScroll();
    
    // Add parallax effects
    this.setupParallax();
  }

  addJsReadyClass() {
    // Add js-ready class to enable animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      element.classList.add('js-ready');
    });
  }

  observeElements() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      this.observer.observe(element);
    });
  }

  animateElement(element) {
    // Remove the observer to prevent re-triggering
    this.observer.unobserve(element);
    
    // Add the appropriate animation class based on data attributes
    const animationType = element.dataset.animation || 'fade-in-up';
    const staggerDelay = element.dataset.stagger || '';
    
    element.classList.add(`animate-${animationType}`);
    
    if (staggerDelay) {
      element.classList.add(`animate-stagger-${staggerDelay}`);
    }
    
    // Add a subtle scale effect for cards
    if (element.classList.contains('card')) {
      setTimeout(() => {
        element.style.transform = 'scale(1.02)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 200);
      }, 100);
    }
  }

  setupSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupParallax() {
    // Subtle parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
      });
    }
  }

  // Method to manually trigger animations (for testing)
  triggerAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        this.animateElement(element);
      }, index * 100);
    });
  }
}

// Initialize scroll animations when the script loads
const scrollAnimations = new ScrollAnimations();

// Export for potential use in other modules
export default scrollAnimations; 