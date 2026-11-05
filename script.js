/* Plain JavaScript: content rendering, mobile menu, coursework and image details. */
(() => {
  "use strict";
  const data = window.PORTFOLIO || {};
  const $ = (selector) => document.querySelector(selector);
  const escape = (value = "") => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const text = (value, fallback = "Not provided") => escape(value || fallback);
  const safeUrl = (value) => {
    if (typeof value !== "string") return "";
    const url = value.trim();
    return /^(https?:\/\/|mailto:|\.\/assets\/)/i.test(url) && !/[\u0000-\u0020<>"'\\]/.test(url) ? url : "";
  };
  const imageUrl = (value) => /^mailto:/i.test(value || "") ? "" : safeUrl(value);
  const link = (url, label, className = "") => {
    const clean = safeUrl(url);
    return clean ? `<a class="${className}" href="${escape(clean)}">${escape(label)}</a>` : "";
  };
  const source = (item, label = "Source") => item.url ? `<p class="source-link">${link(item.url, label)}</p>` : "";
  const placeholder = (label, hint = "") => `<div class="media-placeholder"><span>${escape(label)}</span>${hint ? `<small>${escape(hint)}</small>` : ""}</div>`;
  const media = (item, label, hint = "") => {
    const url = imageUrl(item.image);
    return url ? `<img src="${escape(url)}" alt="${text(item.alt, item.title || "Gallery image")}" loading="lazy">` : placeholder(label, hint);
  };

  // Navigation remains fully visible if JavaScript is unavailable.
  const menu = $("#menuToggle");
  const nav = $("#primaryNav");
  const mobile = window.matchMedia("(max-width: 800px)");
  menu.hidden = false;
  document.documentElement.classList.add("nav-ready");
  const closeMenu = (restoreFocus = false) => {
    const wasOpen = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    if (restoreFocus && wasOpen) menu.focus();
  };
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", (event) => {
    const anchor = event.target.closest("a");
    if (!anchor) return;
    closeMenu();
    if (mobile.matches) {
      const section = $(anchor.getAttribute("href"));
      section?.setAttribute("tabindex", "-1");
      section?.focus({ preventScroll: true });
    }
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(true); });
  document.addEventListener("click", (event) => { if (!event.target.closest(".masthead")) closeMenu(); });
  mobile.addEventListener("change", () => closeMenu());
  const markCurrent = () => nav.querySelectorAll("a").forEach((anchor) => {
    if (anchor.hash === location.hash) anchor.setAttribute("aria-current", "location");
    else anchor.removeAttribute("aria-current");
  });
  window.addEventListener("hashchange", markCurrent);
  markCurrent();

  const profile = data.profile || {};
  if (profile.name) document.querySelectorAll("[data-profile-name]").forEach((node) => { node.textContent = profile.name; });
  if (profile.role) $("#profileRole").textContent = profile.role;
  if (profile.affiliation) $("#profileAffiliation").textContent = profile.affiliation;
  if (profile.location) $("#profileLocation").textContent = profile.location;
  if (profile.initials) $("#profileAvatar").textContent = profile.initials;
  if (imageUrl(profile.portrait)) {
    $("#profileAvatar").removeAttribute("aria-hidden");
    $("#profileAvatar").innerHTML = `<img src="${escape(imageUrl(profile.portrait))}" alt="${text(profile.portraitAlt, "Portrait")}">`;
  }
  if (profile.about?.length) $("#aboutCopy").innerHTML = profile.about.map((p) => `<p>${escape(p)}</p>`).join("");
  const contactOptions = [
    ["Email", profile.email ? `mailto:${profile.email}` : ""],
    ["LinkedIn", profile.linkedin], ["GitHub", profile.github],
    ["Google Scholar", profile.scholar], ["CV (PDF)", profile.cv]
  ].filter(([, url]) => safeUrl(url));
  const contactHtml = contactOptions.map(([label, url]) => `<li>${link(url, label)}</li>`).join("");
  $("#profileLinks").innerHTML = contactHtml;
  $("#contactLinks").innerHTML = contactHtml;
  $("#contactNote").hidden = Boolean(profile.email);

  const publications = data.publications || [];
  if (publications.length) $("#publicationList").innerHTML = publications.map((item) => `
    <article class="entry"><h3>${link(item.url, item.title) || text(item.title)}</h3>
    <p>${text(item.authors)}</p><p class="muted small">${[item.venue, item.year].filter(Boolean).map(escape).join(" · ")}</p>
    ${item.note ? `<p class="small">${escape(item.note)}</p>` : ""}</article>`).join("");

  const chips = data.chips || [];
  $("#chipGallery").innerHTML = chips.length ? chips.map((item, index) => `
    <article class="chip-card"><button class="media-button" type="button" data-chip="${index}" aria-label="View details: ${text(item.title)}">
      ${media(item, item.imagePlaceholder || "Image to be added", "View project details")}</button>
    <h3>${text(item.title)}</h3><p class="chip-meta">${[item.category, item.status].filter(Boolean).map(escape).join(" · ")}</p>
    <p>${text(item.description)}</p>${source(item, item.sourceLabel || "Project website")}</article>`).join("") : '<p class="muted">Chip projects to be added.</p>';

  $("#educationList").innerHTML = (data.education || []).map((item) => `
    <article class="entry"><div class="entry-heading"><h3>${text(item.institution)}</h3><span class="entry-date">${text(item.years, "Dates to be added")}</span></div>
    <p>${text(item.degree)}</p>${item.details ? `<p class="muted small">${escape(item.details)}</p>` : ""}</article>`).join("");

  const courses = data.courses || [];
  const search = $("#courseSearch");
  const filter = $("#courseFilter");
  [...new Set(courses.map((course) => course.category).filter(Boolean))].sort().forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filter.append(option);
  });
  $("#courseControls").hidden = courses.length === 0;
  const renderCourses = () => {
    const query = search.value.trim().toLocaleLowerCase();
    const visible = courses.filter((course) => (filter.value === "all" || course.category === filter.value) &&
      [course.code, course.title, course.institution, course.description, course.instructor, course.term, course.status, course.category].join(" ").toLocaleLowerCase().includes(query));
    $("#courseList").innerHTML = visible.map((course) => `
      <article class="course"><h4>${[course.code, course.title].filter(Boolean).map(escape).join(" · ")}</h4>
      <p class="course-meta">${[course.institution, course.status].filter(Boolean).map(escape).join(" · ")}</p>
      <p>${text(course.description)}</p><dl class="record-details">
      <div><dt>Instructor</dt><dd>${text(course.instructor)}</dd></div><div><dt>Term</dt><dd>${text(course.term)}</dd></div><div><dt>Grade</dt><dd>${text(course.grade)}</dd></div>
      </dl>${source(course, "Course page")}</article>`).join("");
    $("#courseCount").textContent = `Showing ${visible.length} of ${courses.length} listed course${courses.length === 1 ? "" : "s"}`;
    $("#courseEmpty").hidden = visible.length > 0 || courses.length === 0;
  };
  search.addEventListener("input", renderCourses);
  filter.addEventListener("change", renderCourses);
  renderCourses();

  const experience = data.experience || [];
  if (experience.length) $("#experienceList").innerHTML = experience.map((item) => `
    <article class="entry"><div class="entry-heading"><h3>${text(item.title)}</h3><span class="entry-date">${text(item.dates, "")}</span></div>
    <p>${text(item.organization)}</p><p>${text(item.description)}</p>${source(item, "Details")}</article>`).join("");
  $("#projectList").innerHTML = (data.projects || []).map((item) => `
    <article class="entry"><div class="entry-heading"><h3>${text(item.title)}</h3><span class="entry-date">${text(item.dates, "")}</span></div>
    <p>${text(item.description)}</p>${source(item, item.linkLabel || "Project documentation")}</article>`).join("");

  const photos = data.photography || [];
  $("#photoGallery").innerHTML = photos.length ? photos.map((photo, index) => `
    <figure>${imageUrl(photo.image) ? `<button class="media-button" type="button" data-photo="${index}" aria-label="Enlarge photograph: ${text(photo.title)}">${media(photo, "")}</button>` : placeholder(photo.placeholder || "Photograph to be added")}
    <figcaption>${text(photo.title)}</figcaption></figure>`).join("") : '<p class="muted">Photographs to be added.</p>';
  const rides = data.rides || [];
  $("#cyclingStories").innerHTML = rides.length ? rides.map((ride) => `
    <article class="ride"><h3>${text(ride.title)}</h3><p class="muted small">${[ride.date, ride.distance, ride.location].filter(Boolean).map(escape).join(" · ")}</p>
    ${ride.description ? `<p>${escape(ride.description)}</p>` : ""}${imageUrl(ride.image) ? media(ride, "") : ""}</article>`).join("") : '<p class="muted">Ride notes, routes and photographs to be added.</p>';

  const dialog = $("#galleryDialog");
  let galleryTrigger;
  const openGallery = (item, trigger) => {
    galleryTrigger = trigger;
    $("#dialogMedia").innerHTML = media(item, item.imagePlaceholder || "Image to be added");
    $("#dialogTitle").textContent = item.title || "Gallery details";
    $("#dialogDescription").textContent = item.detail || item.description || "";
    $("#dialogSource").innerHTML = link(item.url, item.sourceLabel || "Source");
    dialog.showModal();
  };
  $("#chipGallery").addEventListener("click", (event) => {
    const button = event.target.closest("[data-chip]");
    if (button) openGallery(chips[Number(button.dataset.chip)], button);
  });
  $("#photoGallery").addEventListener("click", (event) => {
    const button = event.target.closest("[data-photo]");
    if (button) openGallery(photos[Number(button.dataset.photo)], button);
  });
  $("#dialogClose").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => galleryTrigger?.focus());
  // A missing user-supplied image becomes an explicit placeholder, not a broken icon.
  document.addEventListener("error", (event) => {
    if (event.target instanceof HTMLImageElement) event.target.outerHTML = placeholder("Image unavailable");
  }, true);
  $("#copyrightYear").textContent = new Date().getFullYear();
})();
