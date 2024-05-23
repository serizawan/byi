document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const totalImages = 63;
    const imagesPerPage = 20;
    let currentPage = 1;

    function loadImages(page) {
        gallery.innerHTML = '';
        const start = (page - 1) * imagesPerPage + 1;
        const end = Math.min(page * imagesPerPage, totalImages);

        for (let i = start; i <= end; i++) {
            const paddedNumber = String(i).padStart(2, '0');
            const imageName = `CatsDogs_000${paddedNumber}.jpg`;
            const imgElement = document.createElement('img');
            imgElement.src = `pictures/${imageName}`;
            imgElement.alt = `Image ${paddedNumber}`;
            gallery.appendChild(imgElement);
        }

        prevButton.disabled = page === 1;
        nextButton.disabled = end === totalImages;
    }

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            loadImages(currentPage);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage * imagesPerPage < totalImages) {
            currentPage++;
            loadImages(currentPage);
        }
    });

    loadImages(currentPage);
});