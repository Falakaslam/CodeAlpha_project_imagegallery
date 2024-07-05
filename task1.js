document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById('image-modal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById('modal-img');
    var captionText = document.getElementById('caption');

    // Get all images with class 'gallery-image'
    var images = document.getElementsByClassName('gallery-image');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Lightbox functionality on click
        images[i].addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Get the next and previous buttons for lightbox navigation
    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next');

    // Lightbox navigation
    prevBtn.onclick = function() {
        var currentImgIndex = Array.from(images).findIndex(img => img.src === modalImg.src);
        var prevImgIndex = (currentImgIndex - 1 + images.length) % images.length;
        modalImg.src = images[prevImgIndex].src;
        captionText.innerHTML = images[prevImgIndex].alt;
    };

    nextBtn.onclick = function() {
        var currentImgIndex = Array.from(images).findIndex(img => img.src === modalImg.src);
        var nextImgIndex = (currentImgIndex + 1) % images.length;
        modalImg.src = images[nextImgIndex].src;
        captionText.innerHTML = images[nextImgIndex].alt;
    };
});
