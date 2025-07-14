onload = () => {
    document.body.classList.remove("container");
    document.querySelector('.text').classList.add('show');
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const photosBtn = document.getElementById("photosBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
      photosBtn.style.display = "inline-block";

  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
      photosBtn.style.display = "none";
  });

  photosBtn.addEventListener("click", () => {
    window.location.href = "../fotos.html";
  });
  