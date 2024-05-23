document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const homeButton = document.getElementById('home');
    const totalImages = 63;
    const imagesPerPage = 20;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    let currentPage = 1;

    // Create audio elements for the sound effects
    const woofSound = new Audio('assets/woof.mp3');
    const meowSound = new Audio('assets/meow.mp3');

    function loadImages(page) {
        gallery.innerHTML = '';
        const start = (page - 1) * imagesPerPage + 1;
        const end = Math.min(page * imagesPerPage, totalImages);

        for (let i = start; i <= end; i++) {
            const paddedNumber = String(i).padStart(2, '0');
            const imageName = `CatsDogs_000${paddedNumber}.jpg`;

            const linkElement = document.createElement('a');
            linkElement.href = `assets/${imageName}`;
            linkElement.dataset.lightbox = 'gallery';
            linkElement.dataset.title = `Image ${paddedNumber}`;

            const imgElement = document.createElement('img');
            imgElement.src = `assets/${imageName}`;
            imgElement.alt = `Image ${paddedNumber}`;
            imgElement.onerror = () => { imgElement.src = 'assets/placeholder.jpg'; };

            linkElement.appendChild(imgElement);
            gallery.appendChild(linkElement);
        }

        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    }

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            loadImages(currentPage);
            meowSound.play();
            prevButton.focus();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            loadImages(currentPage);
            woofSound.play();
            nextButton.focus();
        }
    });

    homeButton.addEventListener('click', function() {
        currentPage = 1;
        loadImages(currentPage);
        homeButton.focus();
    });

    // Initial load
    loadImages(currentPage);
});