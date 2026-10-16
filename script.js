const books = [
  {
    title: "Book title to be announced",
    description: "[Add the confirmed book description here.]",
    coverLabel: "COVER ARTWORK TO COME",
    purchaseUrl: ""
  },
  {
    title: "Book title to be announced",
    description: "[Add the confirmed book description here.]",
    coverLabel: "COVER ARTWORK TO COME",
    purchaseUrl: ""
  },
  {
    title: "Book title to be announced",
    description: "[Add the confirmed book description here.]",
    coverLabel: "COVER ARTWORK TO COME",
    purchaseUrl: ""
  }
];

const upcomingBooks = [
  {
    title: "Title to be announced",
    note: "Details will be shared when confirmed."
  },
  {
    title: "Title to be announced",
    note: "Details will be shared when confirmed."
  }
];

function createBookCard(book, index) {
  const article = document.createElement("article");
  article.className = "book-card reveal";

  const cover = document.createElement("div");
  cover.className = "book-cover";
  cover.setAttribute("role", "img");
  cover.setAttribute("aria-label", `${book.title}; ${book.coverLabel.toLowerCase()}`);

  const coverMark = document.createElement("span");
  coverMark.className = "cover-mark";
  coverMark.textContent = "HENRY AGHORUNSE";

  const coverTitle = document.createElement("span");
  coverTitle.className = "cover-title";
  coverTitle.textContent = "TITLE TO BE ANNOUNCED";

  const coverSubtitle = document.createElement("span");
  coverSubtitle.className = "cover-subtitle";
  coverSubtitle.textContent = book.coverLabel;
  cover.append(coverMark, coverTitle, coverSubtitle);

  const info = document.createElement("div");
  info.className = "book-info";

  const heading = document.createElement("h3");
  heading.textContent = book.title;

  const description = document.createElement("p");
  description.textContent = book.description;

  const action = book.purchaseUrl ? document.createElement("a") : document.createElement("button");
  action.className = "book-action";
  action.textContent = book.purchaseUrl ? "Purchase book ↗" : "Purchase link to come";
  if (book.purchaseUrl) {
    action.href = book.purchaseUrl;
    action.target = "_blank";
    action.rel = "noopener noreferrer";
  } else {
    action.type = "button";
    action.disabled = true;
  }

  const availability = document.createElement("span");
  availability.className = "book-placeholder-tag";
  availability.textContent = `Book details to be confirmed · 0${index + 1}`;

  info.append(heading, description, action, availability);
  article.append(cover, info);
  return article;
}

function createUpcomingItem(book, index) {
  const item = document.createElement("article");
  item.className = "upcoming-item reveal";

  const number = document.createElement("span");
  number.className = "upcoming-item-number";
  number.textContent = `0${index + 1}`;

  const details = document.createElement("div");
  const title = document.createElement("h3");
  title.className = "upcoming-item-title";
  title.textContent = book.title;
  const note = document.createElement("p");
  note.className = "upcoming-item-note";
  note.textContent = book.note;
  details.append(title, note);

  const status = document.createElement("span");
  status.className = "upcoming-item-status";
  status.textContent = "Coming soon";

  item.append(number, details, status);
  return item;
}

document.querySelector("#book-grid").append(...books.map(createBookCard));
document.querySelector("#upcoming-list").append(...upcomingBooks.map(createUpcomingItem));
document.querySelector("#copyright-year").textContent = String(new Date().getFullYear());

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Node && !navigation.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMenu();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      history.replaceState(null, "", link.getAttribute("href"));
    }
  });
});

document.documentElement.classList.add("has-js");
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
