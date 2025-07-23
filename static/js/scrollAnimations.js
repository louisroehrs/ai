/**
 * Static Scroll Animation System for GitHub Pages
 * Demonstrates innovation through CSS-only animations with JavaScript enhancement
 */

(function() {
  'use strict';

  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers - show all content immediately
    document.addEventListener('DOMContentLoaded', function() {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'none';
      });
    });
    return;
  }

  // Configuration
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Initialize when DOM is ready
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupAnimations);
    } else {
      setupAnimations();
    }
  }

  function setupAnimations() {
    // Add js-ready class to enable animations
    addJsReadyClass();
    
    // Setup intersection observer
    setupIntersectionObserver();
    
    // Setup smooth scroll
    setupSmoothScroll();
    
    // Setup parallax (if supported)
    setupParallax();
  }

  function addJsReadyClass() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      element.classList.add('js-ready');
    });
  }

  function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateElement(entry.target);
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  function animateElement(element) {
    const animationType = element.dataset.animation || 'fade-in-up';
    const staggerDelay = element.dataset.stagger || '';
    
    element.classList.add(`animate-${animationType}`);
    
    if (staggerDelay) {
      element.classList.add(`animate-stagger-${staggerDelay}`);
    }
    
    // Add subtle scale effect for cards
    if (element.classList.contains('card')) {
      setTimeout(() => {
        element.style.transform = 'scale(1.02)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 200);
      }, 100);
    }
  }

  function setupSmoothScroll() {
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

  function setupParallax() {
    // Subtle parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero && window.requestAnimationFrame) {
      let ticking = false;
      
      function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3; // Reduced intensity
        hero.style.transform = `translateY(${rate}px)`;
        ticking = false;
      }
      
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }
      
      window.addEventListener('scroll', requestTick, { passive: true });
    }
  }

  // Initialize
  init();

  // Make functions available globally for debugging (optional)
  window.scrollAnimations = {
    triggerAnimations: function() {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element, index) => {
        setTimeout(() => {
          animateElement(element);
        }, index * 100);
      });
    }
  };

})(); 