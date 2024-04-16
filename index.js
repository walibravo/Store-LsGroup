document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const dotsContainer = document.querySelector(".carousel-dots");
  
    let currentIndex = 0;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.style.display = "block";
          } else {
            slide.style.display = "none";
          }
        });
        const dots = Array.from(dotsContainer.children);
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    function createDots() {
      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
          currentIndex = i;
          showSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
      }
      showSlide(currentIndex);
    }
  
    createDots();
  
    setInterval(nextSlide, 5000); 
  });
  