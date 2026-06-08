/**
 * Paw Prints Veterinary Clinic - Client-Side App Code
 */

document.addEventListener('DOMContentLoaded', () => {
  // === STICKY HEADER SCROLL EFFECT ===
  const header = document.getElementById('main-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // === MOBILE MENU NAVIGATION ===
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinksMenu = document.getElementById('nav-links-menu');
  const navLinks = navLinksMenu.querySelectorAll('a');

  mobileToggle.addEventListener('click', () => {
    navLinksMenu.classList.toggle('mobile-active');
    mobileToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksMenu.classList.remove('mobile-active');
      mobileToggle.classList.remove('active');
    });
  });

  // === TESTIMONIALS CAROUSEL ===
  const track = document.getElementById('testimonials-track');
  const slides = Array.from(track.children);
  const nextButton = document.getElementById('carousel-next');
  const prevButton = document.getElementById('carousel-prev');
  const dotsContainer = document.getElementById('carousel-dots');
  
  let currentIndex = 0;
  let autoplayTimer = null;

  // Create dot indicators
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Go to testimonial slide ${index + 1}`);
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      moveToSlide(index);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  const updateDots = (index) => {
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) {
      dots[index].classList.add('active');
    }
  };

  const moveToSlide = (index) => {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    
    // Shift track
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots(currentIndex);
  };

  // Nav buttons
  nextButton.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
    resetAutoplay();
  });

  prevButton.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
    resetAutoplay();
  });

  // Autoplay functionality
  const startAutoplay = () => {
    autoplayTimer = setInterval(() => {
      moveToSlide(currentIndex + 1);
    }, 5000); // Auto scroll every 5 seconds
  };

  const resetAutoplay = () => {
    clearInterval(autoplayTimer);
    startAutoplay();
  };

  // Pause autoplay on hover
  const carouselContainer = document.querySelector('.testimonials-carousel-container');
  carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  carouselContainer.addEventListener('mouseleave', startAutoplay);

  // Initialize autoplay
  startAutoplay();

  // === SCROLL REVEAL ANIMATIONS ===
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  const revealOnScrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Stop observing once revealed to maintain state
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Offset slightly to feel more natural
  });

  revealElements.forEach(element => {
    revealOnScrollObserver.observe(element);
  });

  // === APPOINTMENT FORM SUBMISSION & CLIENT-SIDE VALIDATION ===
  const form = document.getElementById('appointment-form');
  const alertBox = document.getElementById('form-alert-box');
  const submitBtn = document.getElementById('submit-appointment-btn');

  // Set minimum date-time selection to 'now' so users cannot book in the past
  const dateTimeInput = document.getElementById('preferred-datetime');
  if (dateTimeInput) {
    const now = new Date();
    // Format to YYYY-MM-DDTHH:MM
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    dateTimeInput.min = `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous alerts
    alertBox.style.display = 'none';
    alertBox.className = 'form-notification';
    alertBox.textContent = '';
    
    // Get form values
    const ownerName = document.getElementById('owner-name').value.trim();
    const petName = document.getElementById('pet-name').value.trim();
    const petType = document.getElementById('pet-type').value;
    const serviceNeeded = document.getElementById('service-needed').value;
    const preferredDateTime = dateTimeInput.value;
    const ownerPhone = document.getElementById('owner-phone').value.trim();
    const ownerMessage = document.getElementById('owner-message').value.trim();
    
    // 1. Client-Side Validation
    if (!ownerName || !petName || !petType || !serviceNeeded || !preferredDateTime || !ownerPhone) {
      showAlert('Please fill in all required fields marked with *.', 'error');
      return;
    }

    // Phone number validation (simple length & digit check)
    const cleanPhone = ownerPhone.replace(/\D/g, '');
    if (cleanPhone.length < 7) {
      showAlert('Please enter a valid contact phone number (at least 7 digits).', 'error');
      return;
    }

    // Ensure preferred booking time is in the future
    const selectedDate = new Date(preferredDateTime);
    if (selectedDate < new Date()) {
      showAlert('The preferred appointment date and time must be in the future.', 'error');
      return;
    }

    // Prepare Request Body
    const requestData = {
      name: ownerName,
      petName: petName,
      petType: petType,
      service: serviceNeeded,
      dateTime: preferredDateTime,
      phone: ownerPhone,
      message: ownerMessage
    };

    // UI Loading State
    submitBtn.disabled = true;
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="spinner-icon" style="animation: spin 1s linear infinite; vertical-align: middle; margin-right: 4px; display: inline-block;">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
      Submitting Request...
    `;

    try {
      // Send Request
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        showAlert(result.message, 'success');
        form.reset(); // Clear form values
      } else {
        showAlert(result.message || 'An error occurred during submission. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      showAlert('Could not connect to the booking server. Please check your internet connection or call 054 433 7908 directly.', 'error');
    } finally {
      // Restore Button State
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }
  });

  // Helper function to show alerts
  const showAlert = (message, type) => {
    alertBox.textContent = message;
    alertBox.className = `form-notification ${type}`;
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
});

// CSS Injection for spinner animation
const styleEl = document.createElement('style');
styleEl.textContent = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleEl);
