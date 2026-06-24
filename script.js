document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".menu-category");

  categories.forEach((category) => {
    const toggleBtn = category.querySelector(".category-toggle");
    const content = category.querySelector(".category-content");

    toggleBtn.addEventListener("click", () => {
      const isActive = category.classList.contains("active");

      // Diğer tüm açık kategorileri kapatır
      categories.forEach((c) => {
        c.classList.remove("active");
        c.querySelector(".category-content").style.maxHeight = null;
      });

      // Tıklanan kategoriyi pürüzsüzce açar/kapatır
      if (!isActive) {
        category.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        category.classList.remove("active");
        content.style.maxHeight = null;
      }
    });
  });
});