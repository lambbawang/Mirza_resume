function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
