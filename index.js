// Loader animation with enhanced timing
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("wrapper");

  // Ensure loader is fully visible initially
  loader.style.opacity = "1";

  // Hide loader after animation completes
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.top = "-100%";
    }, 500);
  }, 2800);
});

// Menu Bar Toggel
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Typed.js initialization
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Typed !== "undefined" && document.getElementById("element")) {
    var typed = new Typed("#element", {
      strings: [
        "Frontend Developer",
        "Problem Solver",
        "Creative Thinker",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
      cursorChar: "|",
      showCursor: true,
    });
  } else {
    console.warn("Typed.js not loaded or element not found");
  }
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  // Create menu toggle button
  const header = document.getElementById("header-item");
  const ulList = document.querySelector(".ullist");

  // Create menu toggle button dynamically
  const menuToggle = document.createElement("div");
  menuToggle.className = "menu-toggle";
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    menuToggle.appendChild(span);
  }

  // Insert menu toggle before the ullist
  header.insertBefore(menuToggle, ulList);

  // Toggle mobile menu
  menuToggle.addEventListener("click", function () {
    ulList.classList.toggle("active");

    // Animate menu icon
    const spans = this.querySelectorAll("span");
    if (ulList.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".ullist li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (ulList.classList.contains("active")) {
        ulList.classList.remove("active");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  });
});

// Add scroll reveal animations
document.addEventListener("DOMContentLoaded", function () {
  // Scroll reveal for sections
  const sections = document.querySelectorAll("main > div");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });

  // Individual skill card animations
  const skillCards = document.querySelectorAll(".skill-card");
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered animation delay
          setTimeout(() => {
            entry.target.classList.add("appear");
          }, index * 150);
        }
      });
    },
    { threshold: 0.1 }
  );

  skillCards.forEach((card) => {
    card.classList.add("fade-in");
    skillObserver.observe(card);
  });
});

// Header scroll effect
document.addEventListener("scroll", function () {
  const header = document.getElementById("header-item");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Create scroll to top button
document.addEventListener("DOMContentLoaded", function () {
  // Create scroll to top button
  const scrollBtn = document.createElement("div");
  scrollBtn.className = "scroll-to-top";
  scrollBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
  document.body.appendChild(scrollBtn);

  // Show/hide scroll button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Add hover effects to skill cards
document.addEventListener("DOMContentLoaded", function () {
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Add random movement to icons on hover
      const icon = this.querySelector(".skill-icon");
      if (icon) {
        icon.style.animation = "glowPulse 1.5s infinite";
      }
    });

    card.addEventListener("mouseleave", function () {
      // Remove animation on mouse leave
      const icon = this.querySelector(".skill-icon");
      if (icon) {
        icon.style.animation = "";
      }
    });
  });
});

// Parallax effect for background elements
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("mousemove", function (e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Subtle parallax effect for hero section
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
      heroSection.style.backgroundPosition = `${x * 20}% ${y * 20}%`;
    }

    // Move image slightly with mouse
    const rightImg = document.getElementById("right-img");
    if (rightImg) {
      rightImg.style.transform = `translateX(${(x - 0.5) * 10}px) translateY(${
        (y - 0.5) * 10
      }px)`;
    }
  });
});

// Enhance social media icons with hover effects
document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".social-icon");

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });
});

// Add particles effect to background (optional - comment out if not needed)
document.addEventListener("DOMContentLoaded", function () {
  // Create canvas for particles
  const canvas = document.createElement("canvas");
  canvas.id = "particles-canvas";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "-1";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  // Set canvas dimensions
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Particle settings
  const particlesArray = [];
  const maxParticles = 50;

  // Create particles
  function createParticles() {
    for (let i = 0; i < maxParticles; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `rgba(8, 227, 235, ${Math.random() * 0.3})`,
      });
    }
  }

  // Draw particles
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
      const p = particlesArray[i];

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Update particle position
      p.x += p.speedX;
      p.y += p.speedY;

      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    }

    connectParticles();
    requestAnimationFrame(drawParticles);
  }

  // Connect particles with lines
  function connectParticles() {
    const maxDistance = 150;

    for (let i = 0; i < particlesArray.length; i++) {
      for (let j = i; j < particlesArray.length; j++) {
        const dx = particlesArray[i].x - particlesArray[j].x;
        const dy = particlesArray[i].y - particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance;
          ctx.strokeStyle = `rgba(8, 227, 235, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
        }
      }
    }
  }

  createParticles();
  drawParticles();
});
