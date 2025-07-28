let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  images = Array.from(document.querySelectorAll('.gallery img'));
  currentIndex = images.indexOf(imgElement);

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  lightboxImg.src = imgElement.src;
  lightbox.classList.add('show');
}

function closeLightbox(event) {
  if (event) event.stopPropagation(); // prevent bubbling from buttons
  document.getElementById('lightbox').classList.remove('show');
}

function nextImage(event) {
  if (event) event.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function prevImage(event) {
  if (event) event.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery .image');
  allImages.forEach((imgDiv) => {
    if (category === 'all' || imgDiv.classList.contains(category)) {
      imgDiv.style.display = 'block';
    } else {
      imgDiv.style.display = 'none';
    }
  });
}
