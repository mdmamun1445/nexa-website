// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    menuToggle.textContent = "☰";
  });
});

// Dynamic Footer Year

document.getElementById("year").textContent =
  new Date().getFullYear();

// Scroll Reveal Animation

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          currentObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });

} else {

  revealItems.forEach((item) => {
    item.classList.add("is-visible");
  });

}