document.addEventListener("DOMContentLoaded", () => {
  
  // 1. KATEGORİLERİ AÇIP KAPATAN KODUN
  const categories = document.querySelectorAll(".menu-category");

  categories.forEach((category) => {
    const toggleBtn = category.querySelector(".category-toggle");
    const content = category.querySelector(".category-content");

    if (toggleBtn && content) {
      toggleBtn.addEventListener("click", () => {
        const isActive = category.classList.contains("active");

        categories.forEach((c) => {
          c.classList.remove("active");
          const cContent = c.querySelector(".category-content");
          if (cContent) cContent.style.maxHeight = null;
        });

        if (!isActive) {
          category.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          category.classList.remove("active");
          content.style.maxHeight = null;
        }
      });
    }
  });

  // 2. RESİMLERİ KÜÇÜK BİR KAREDE KİLİTLEYEN KESİN ÇÖZÜM KODU
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const menuImages = document.querySelectorAll(".item-img-wrapper img");

  if (modal && modalImg && menuImages.length > 0) {
    menuImages.forEach(img => {
      img.style.cursor = "pointer";

      img.addEventListener("click", (e) => {
        e.stopPropagation(); 
        
        // BOYLAMIŞ OLAN RESMİ BURADA ZORLA KÜÇÜK BİR KAREYE KİLİTLİYORUZ
        modalImg.style.width = "250px";        /* Genişlik 250 piksele düşürüldü */
        modalImg.style.height = "250px";       /* Tam kare olması için yükseklik de 250 piksel */
        modalImg.style.objectFit = "cover";    /* Resim kare kutunun içini bozmadan tam doldurur */
        modalImg.style.borderRadius = "20px";  /* Şık oval köşeler */
        modalImg.style.border = "3px solid #c5a880"; /* Şık gold bir çerçeve */
        modalImg.style.boxShadow = "0 15px 40px rgba(0,0,0,0.6)";

        // ARKA PLANI ORTALAMA AYARLARI
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        modal.style.backdropFilter = "blur(5px)";
        modal.style.zIndex = "9999";

        modalImg.src = img.src;
      });
    });

    // Kapatma işlemi
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

});
