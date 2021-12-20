import "./styles.css";
import "./assets/images/pexels-garret-schappacher-2115874.jpg";
import "./assets/images/pexels-pixabay-163487.jpg";
import "./assets/images/pexels-rachel-xiao-773063.jpg";
import "./assets/images/pexels-tim-eiden-1374370.jpg";
import "./assets/images/pexels-timo-volz-1757433.jpg";

window.addEventListener("load", function() { 
    const images = document.getElementsByTagName("img");
    const dotNavs = document.getElementsByClassName("nav-dots");
    const labels = document.querySelectorAll("label");
    const leftArrow = document.querySelector(".left");
    const rightArrow = document.querySelector(".right");
    let currentIndex = 0;

    for (let i = 0; i < images.length; i++) {
        labels[i].setAttribute("id", parseInt(i));
        labels[i].addEventListener("click", dotClick);
    }
    function displayImage() {
        // function renders images through the carousel, defaulted at index 0
        for (let y = 0; y < images.length; y++) {
            images[y].style.display = "none";
        }
        images[currentIndex].style.display = "block";
    }
    function displayDot() { 
        dotNavs[currentIndex].checked = true;
    }
    function moveLeft() {
        if (currentIndex === 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex--;
        }
        displayImage();
        displayDot();
    }
    function moveRight() {
        if (currentIndex == images.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
        displayImage();
        displayDot();
    }
    function dotClick(e) {
        currentIndex = parseInt(e.target.id);
        displayImage();
        displayDot();
    }
    displayImage();
    displayDot();

    leftArrow.addEventListener("click", moveLeft);
    rightArrow.addEventListener("click", moveRight);
});
