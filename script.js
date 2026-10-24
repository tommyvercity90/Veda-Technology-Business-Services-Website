// Veda Technology demo website interactions
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

// Accessible FAQ accordion: one answer opens at a time.
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const wasExpanded = question.getAttribute("aria-expanded") === "true";

    faqQuestions.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      item.nextElementSibling.hidden = true;
    });

    if (!wasExpanded) {
      question.setAttribute("aria-expanded", "true");
      question.nextElementSibling.hidden = false;
    }
  });
});

// Keep the copyright year current.
document.querySelector("#year").textContent = new Date().getFullYear();

// Demo contact form: validate and open a prefilled email draft.
// Replace this address with a verified official business email before launch.
const VERIFIED_BUSINESS_EMAIL = ""; // Example: "hello@example.com"

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  if (!VERIFIED_BUSINESS_EMAIL.trim()) {
    formStatus.textContent = "Demo mode: add a verified business email in script.js before using this form.";
    return;
  }

  const formData = new FormData(contactForm);
  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim();
  const interest = String(formData.get("interest")).trim();
  const message = String(formData.get("message")).trim();

  const subject = encodeURIComponent(`Website inquiry: ${interest}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`
  );

  formStatus.textContent = "Opening your email application with a draft. Review it before sending.";
  window.location.href = `mailto:${VERIFIED_BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
