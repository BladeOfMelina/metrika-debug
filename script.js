document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const desc = document.getElementById("description");
  const btn = document.getElementById("revealBtn");

  btn.addEventListener("click", () => {
    title.textContent = "Судьба неизбежна";
    desc.innerHTML = "Ты сделал шаг в мир, где история пишет кровь. <br> И лишь тьма знает конец.";
    btn.style.display = "none";
  });
});
