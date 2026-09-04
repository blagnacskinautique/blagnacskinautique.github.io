const photos = [
    "images/carousel/photo01.jpg",
    "images/carousel/photo02.jpg",
    "images/carousel/photo03.jpg",
    "images/carousel/photo04.jpg",
    "images/carousel/photo05.jpg",
    "images/carousel/photo06.jpg",
    "images/carousel/photo07.jpg",
    "images/carousel/photo08.jpg",
    "images/carousel/photo09.jpg",
    "images/carousel/photo10.jpg",
    "images/carousel/photo11.jpg",
    "images/carousel/photo12.jpg",
    "images/carousel/photo13.jpg",
    "images/carousel/photo14.jpg",
    "images/carousel/photo15.jpg"
];
const carouselTrack = document.querySelector(".carousel-track");

photos.forEach(function(photo) {
    const image = document.createElement("img");

    image.src = photo;
    image.alt = "Photo Blagnac Ski Nautique";

    carouselTrack.appendChild(image);
});

let currentPhoto = 0;

const nextButton = document.querySelector(".carousel-button-next");

nextButton.addEventListener("click", function() {
    if (currentPhoto < photos.length - 1) {
        currentPhoto++;

        carouselTrack.style.transform = `translateX(-${currentPhoto * 100}%)`;
    }
});

const previousButton = document.querySelector(".carousel-button-prev");

previousButton.addEventListener("click", function() {
    if (currentPhoto > 0) {
        currentPhoto--;

        carouselTrack.style.transform = `translateX(-${currentPhoto * 100}%)`;
    }
});