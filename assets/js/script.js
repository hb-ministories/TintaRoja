document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".pagina");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((p, i) => {
      if (i === index) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
  }

  // Mostrar la primera página al iniciar
  showPage(currentPage);

  let startX = 0;

  document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", (e) => {
    const deltaX = e.changedTouches[0].clientX - startX;
    if (deltaX < -50 && currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    } else if (deltaX > 50 && currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });
});
