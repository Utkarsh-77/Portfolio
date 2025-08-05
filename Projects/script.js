// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize project cards with animation delay
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.setProperty("--i", index);
    setTimeout(() => {
      card.classList.add("show");
    }, 100 * index);
  });

  // Header scroll effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll indicator
  const scrollIndicator = document.createElement("div");
  scrollIndicator.className = "scroll-indicator";
  document.body.appendChild(scrollIndicator);

  window.addEventListener("scroll", function () {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + "%";
  });

  // Active navigation link
  const navLinks = document.querySelectorAll(".nav-anime");
  const currentPage = window.location.href;

  navLinks.forEach((link) => {
    if (link.href === currentPage) {
      link.classList.add("active");
    }
  });

  // Hover effect for project cards
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Create a simple particle background effect
  const createParticles = () => {
    const particles = document.createElement("div");
    particles.className = "particles";
    document.body.appendChild(particles);

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 3 + 1}px;
          height: ${Math.random() * 3 + 1}px;
          background-color: rgba(0, 238, 255, ${Math.random() * 0.5 + 0.3});
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 10px rgba(0, 238, 255, 0.8);
          animation: float ${Math.random() * 10 + 10}s linear infinite;
          animation-delay: -${Math.random() * 10}s;
        `;

      particles.appendChild(particle);
    }

    // Add keyframes for floating animation
    const style = document.createElement("style");
    style.textContent = `
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${
              Math.random() * 100 - 50
            }px);
            opacity: 0;
          }
        }
      `;
    document.head.appendChild(style);
  };

  createParticles();
});
