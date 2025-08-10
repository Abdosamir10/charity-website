
      // Mobile menu toggle
      const navToggle = document.getElementById('nav-toggle');
      const navClose = document.getElementById('nav-close');
      const mobileMenu = document.getElementById('mobile-menu');

      // Toggle mobile menu
      navToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('mobile-menu-enter');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });

      // Close mobile menu
      navClose.addEventListener('click', () => {
        mobileMenu.classList.add('mobile-menu-exit');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('mobile-menu-enter', 'mobile-menu-exit');
        }, 300);
        document.body.style.overflow = 'auto'; // Restore scrolling
      });

      // Close mobile menu when clicking on a link
      const mobileMenuLinks = mobileMenu.querySelectorAll('a');
      mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('mobile-menu-exit');
          setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('mobile-menu-enter', 'mobile-menu-exit');
          }, 300);
          document.body.style.overflow = 'auto';
        });
      });

      // Close mobile menu when clicking outside
      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
          mobileMenu.classList.add('mobile-menu-exit');
          setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('mobile-menu-enter', 'mobile-menu-exit');
          }, 300);
          document.body.style.overflow = 'auto';
        }
      });

      // Navbar scroll effect
      window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 10) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      });

      // Scroll reveal animation
      function revealOnScroll() {
        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
          }
        });
      }

      // Add scroll reveal class to elements
      function addScrollRevealClass() {
        // Add to cards
        const cards = document.querySelectorAll('.bg-white.shadow-xl.rounded-2xl');
        cards.forEach(card => card.classList.add('scroll-reveal'));
        
        // Add to statistics
        const stats = document.querySelectorAll('.flex.flex-col.space-y-2');
        stats.forEach(stat => stat.classList.add('scroll-reveal'));
        
        // Add to gallery items
        const galleryItems = document.querySelectorAll('.grid img');
        galleryItems.forEach(item => item.classList.add('scroll-reveal'));
        
        // Add to footer sections
        const footerSections = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-4 > div');
        footerSections.forEach(section => section.classList.add('scroll-reveal'));
      }

      // Add hover effects
      function addHoverEffects() {
        // Add card hover effects
        const cards = document.querySelectorAll('.bg-white.shadow-xl.rounded-2xl');
        cards.forEach(card => card.classList.add('card-hover'));
        
        // Add button hover effects
        const buttons = document.querySelectorAll('a[href], button');
        buttons.forEach(button => {
          if (button.classList.contains('bg-\\[\\#45A21C\\]') || 
              button.classList.contains('bg-black') ||
              button.classList.contains('bg-\\[\\#ffffff\\]')) {
            button.classList.add('btn-hover');
          }
        });
        
        // Add image hover effects
        const images = document.querySelectorAll('img');
        images.forEach(img => img.classList.add('img-hover'));
      }

      // Progress bar animation
      function animateProgressBars() {
        const progressBars = document.querySelectorAll('.bg-\\[\\#45A21C\\].h-2.rounded');
        progressBars.forEach(bar => {
          const width = bar.style.width || '0%';
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width;
            bar.classList.add('progress-bar-animate');
          }, 500);
        });
      }

      // Counter animation for statistics
      function animateCounters() {
        const counters = document.querySelectorAll('h1.font-bold');
        counters.forEach(counter => {
          const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
          const increment = target / 100;
          let current = 0;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.ceil(current).toLocaleString() + 
                (counter.textContent.includes('+') ? '+' : '') +
                (counter.textContent.includes('k') ? 'k' : '') +
                (counter.textContent.includes('m') ? 'm' : '');
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toLocaleString() + 
                (counter.textContent.includes('+') ? '+' : '') +
                (counter.textContent.includes('k') ? 'k' : '') +
                (counter.textContent.includes('m') ? 'm' : '');
            }
          };
          
          updateCounter();
        });
      }

      // Smooth scrolling for anchor links
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

      // Initialize animations when DOM is loaded
      document.addEventListener('DOMContentLoaded', function() {
        // Add animation classes
        addScrollRevealClass();
        addHoverEffects();
        
        // Initial reveal check
        revealOnScroll();
        
        // Animate progress bars after a delay
        setTimeout(animateProgressBars, 1000);
        
        // Animate counters when they come into view
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCounters();
              observer.unobserve(entry.target);
            }
          });
        });
        
        const statSection = document.querySelector('.mx-auto.px-4.md\\:px-8.lg\\:px-16.xl\\:px-32');
        if (statSection) {
          observer.observe(statSection);
        }
      });

      // Scroll event listener for reveal animations
      window.addEventListener('scroll', revealOnScroll);

      // Add loading animation for page load
      window.addEventListener('load', function() {
        document.body.classList.add('animate-fade-in');
      }); 







      function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isOpen = !content.classList.contains('hidden');
  
  // إغلاق كل العناصر الأخرى
  document.querySelectorAll('section .border div').forEach(div => div.classList.add('hidden'));
  document.querySelectorAll('section button span:last-child').forEach(icon => icon.textContent = '+');

  // إذا لم يكن مفتوح، افتحه
  if (!isOpen) {
    content.classList.remove('hidden');
    button.querySelector('span:last-child').textContent = '×';
    button.querySelector('span:last-child').classList.add('text-green-500');
  }
}













// شريط التقدم
const collected = 8000; 
  const goal = 12000; 
  const percentage = (collected / goal) * 100;

  // أنيميشن
  window.addEventListener('load', () => {
    const progressBar = document.getElementById('progress');
    progressBar.style.width = percentage + '%';
  });




























   const amountButtons = document.querySelectorAll('.amount-btn');
  const donationInput = document.getElementById('donation-input');
  const totalAmount = document.getElementById('total-amount');

  amountButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.textContent;
      donationInput.value = value;
      totalAmount.textContent = value;
    });
  });

  donationInput.addEventListener('input', () => {
    totalAmount.textContent = donationInput.value || 0;
  });

  
  