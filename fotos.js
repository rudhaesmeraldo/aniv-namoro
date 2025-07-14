const totalFotos = 18; // Ajuste conforme suas imagens
const fotosPorBloco = 1;
const gallery = document.getElementById("photoGallery");
let currentIndex = 0;
let images = [];

// Gera blocos
for (let i = 1; i <= totalFotos; i += fotosPorBloco) {
  const bloco = document.createElement('div');
  bloco.className = 'photo-block';

  for (let j = i; j < i + fotosPorBloco && j <= totalFotos; j++) {
    const img = document.createElement('img');
    img.src = `../img/${j}.jpg`;
    img.alt = `Foto ${j}`;

    // Verifica se a imagem carrega corretamente
    img.onload = () => {
        img.addEventListener('click', () => openLightbox(images.length));
        images.push(img);
    };

    img.onerror = () => {
        img.style.display = 'none'; // Oculta se der erro
    };

    bloco.appendChild(img);
  }

  gallery.appendChild(bloco);
}

// Aparecer com scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.photo-block').forEach(block => {
  observer.observe(block);
});

// Lightbox
function openLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  lightbox.classList.add('show');
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('show');
  setTimeout(() => lightbox.classList.add('hidden'), 300);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}
