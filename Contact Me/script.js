const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Hide menu when clicking outside
document.addEventListener("click", (e) => {
  const isNavMenu = e.target.closest("nav ul");
  const isMenuBtn = e.target.closest(".menu-btn");

  if (!isNavMenu && !isMenuBtn && navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
  }
});

// Scroll effect for header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Prepare template parameters
  const templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  try {
    // Send the email using EmailJS
    const response = await emailjs.send(
      "service_h7cn81a",
      "template_uzlw0bh",
      templateParams
    );
    console.log("Email sent successfully:", response.status, response.text);
    alert(`Thank you, ${name}, for your message! I'll get back to you soon.`);
    contactForm.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    // Fallback to mailto if EmailJS fails
    const mailtoLink = `mailto:uv23894@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    alert(
      "Failed to send message via form. Redirecting to your email client..."
    );
    window.location.href = mailtoLink;
  }
});
