var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    /* News  Box Section  */
    
  const swiper1 = new Swiper ('.news-swiper-horizontal', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


  /*------------------------------------------------------------ */ 
  
  
  // === JS for switching between News, Sports, Health, and Travel ===

// Select all section divs (inside container1 and container2)
const sections = document.querySelectorAll(
  '.head-news, .head-sport, .head-health, .head-travel'
);

// Select all category links in container2 headers
const links = document.querySelectorAll('.header a');

// Function to show the selected section
function showSection(category) {
  sections.forEach((section) => {
    if (section.id === `head-${category.toLowerCase()}`) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Add click event to each link
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.textContent.trim(); // Get text like "News", "Health", etc.
    showSection(category);
  });
});

// Default: show Sports section first
showSection('sport');


