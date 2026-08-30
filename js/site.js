const page = document.body.dataset.page;

const header = `
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="brand">
        <img src="assets/logo.png" alt="empowered bridge foundation" class="wordmark" />
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-label="Toggle menu">
        <span></span><span></span>
      </button>
      <nav>
        <a href="index.html" ${page === "home" ? 'class="active"' : ""}>Home</a>
        <a href="about.html" ${page === "about" ? 'class="active"' : ""}>About</a>
        <a href="programs.html" ${page === "programs" ? 'class="active"' : ""}>Programs</a>
        <a href="get-involved.html" ${page === "involved" ? 'class="active"' : ""}>Get involved</a>
        <a href="contact.html" ${page === "contact" ? 'class="active"' : ""}>Contact</a>
        <a href="get-involved.html" class="btn btn-gold">Give support</a>
      </nav>
    </div>
  </header>
`;

const year = new Date().getFullYear();

const footer = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="brand footer-brand">
          <img src="assets/logo.png" alt="empowered bridge foundation" class="wordmark" />
        </div>
        <p>Empowering Community and Socio-Economic Resilience — Bridge to GiveBack.</p>
        <p>A youth-led NGO in Rwanda turning ideas into solutions for education, peace, capacity building, and inclusion.</p>
      </div>
      <div>
        <h3>Visit</h3>
        <p>Huye, Southern Province (HQ)</p>
        <p>Kigali · Kirehe District</p>
        <p>Founded 2023 · Formerly Youth Impact Hub</p>
      </div>
      <div>
        <h3>Connect</h3>
        <p><a href="mailto:empoweredbridgefoundation@gmail.com">empoweredbridgefoundation@gmail.com</a></p>
        <p><a href="tel:+250789980853">+250 789 980 853</a></p>
        <p><a href="tel:+250787800310">+250 787 800 310</a></p>
        <p><a href="https://www.instagram.com/empoweredbridgefoundation" target="_blank" rel="noreferrer">@empoweredbridgefoundation</a></p>
        <p><a href="https://www.linkedin.com/company/empoweredbridgefoundation" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
      <div>
        <h3>Act</h3>
        <p><a href="get-involved.html">Give support</a></p>
        <p><a href="get-involved.html">Volunteer with us</a></p>
        <p><a href="contact.html">Partner or inquire</a></p>
      </div>
    </div>
    <div class="container footer-base">
      <p>© ${year} Empowered Bridge Foundation. All rights reserved.</p>
      <p>Bridge to GiveBack</p>
    </div>
  </footer>
`;

document.body.insertAdjacentHTML("afterbegin", header);
document.body.insertAdjacentHTML("beforeend", footer);

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-header nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = original;
      }, 2000);
    } catch {
      button.textContent = "Copy failed";
    }
  });
});

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`EBF inquiry from ${data.get("name")} (${data.get("role")})`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}\nInterest: ${data.get("role")}`
    );
    window.location.href = `mailto:empoweredbridgefoundation@gmail.com?subject=${subject}&body=${body}`;
    const note = form.querySelector(".note");
    if (note) note.hidden = false;
    form.reset();
  });
}
