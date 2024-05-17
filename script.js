document.addEventListener("DOMContentLoaded", function () {
  const certificateText = document.querySelector(".certificate-java-img-text");
  const certificateImage = document.querySelector(".certificate-image");

  certificateImage.style.display = "none";
  certificateText.addEventListener("click", function () {
    if (certificateImage.style.display === "none") {
      certificateImage.style.display = "block";
    } else {
      certificateImage.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target !== certificateImage && event.target !== certificateText) {
      certificateImage.style.display = "none";
    }
  });

  const wordsToZoom = document.querySelectorAll(
    ".with-background p, .with-background h1, .with-background h2, .with-background h3, .with-background h4, .with-background h5, .with-background h6, .with-background li, .with-background a"
  );

  wordsToZoom.forEach((word) => {
    word.classList.add("zoom-on-hover");
  });
});
