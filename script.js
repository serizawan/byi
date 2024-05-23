document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const totalImages = 63;
    let imageHtml = '';

    for (let i = 1; i <= totalImages; i++) {
        const paddedNumber = String(i).padStart(2, '0');
        const imageName = `CatsDogs_000${paddedNumber}.jpg`;
        imageHtml += `<img src="pictures/${imageName}" alt="Image ${paddedNumber}">`;
    }

    gallery.innerHTML = imageHtml;
});