document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const desc = document.getElementById("description");
  const btn = document.getElementById("revealBtn");
  const form = document.getElementById("testForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.hash = "submitted" + Math.floor(Math.random() * 1000);
  });
});
