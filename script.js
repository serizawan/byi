document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const homeButton = document.getElementById('home');
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

            const linkElement = document.createElement('a');
            linkElement.href = `pictures/${imageName}`;
            linkElement.dataset.lightbox = 'gallery';
            linkElement.dataset.title = `Image ${paddedNumber}`;

            const imgElement = document.createElement('img');
            imgElement.src = `pictures/${imageName}`;
            imgElement.alt = `Image ${paddedNumber}`;

            linkElement.appendChild(imgElement);
            gallery.appendChild(linkElement);
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

    homeButton.addEventListener('click', function() {
        currentPage = 1;
        loadImages(currentPage);
    });

    loadImages(currentPage);
});
