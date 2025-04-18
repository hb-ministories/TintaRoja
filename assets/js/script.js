document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".flipbook");
  const pages = document.querySelectorAll(".pagina");
  const totalPages = pages.length;
  let currentPage = 0;
  let startX = 0;

  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = startX - endX;

    if (delta > 50 && currentPage < totalPages - 1) {
      currentPage++;
    } else if (delta < -50 && currentPage > 0) {
      currentPage--;
    }

    pages[currentPage].scrollIntoView({ behavior: "smooth" });
  });
});
