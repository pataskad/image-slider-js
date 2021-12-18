import "./styles.css";
import "./assets/images/pexels-garret-schappacher-2115874.jpg";
import "./assets/images/pexels-pixabay-163487.jpg";
import "./assets/images/pexels-rachel-xiao-773063.jpg";
import "./assets/images/pexels-tim-eiden-1374370.jpg";
import "./assets/images/pexels-timo-volz-1757433.jpg";

window.addEventListener("load", function() { 
    const images = document.getElementsByTagName("img");
    const dotNavs = document.getElementsByClassName("nav-dots");
    let currentIndex = 0;

/*     for (let i = 0; i < images.length; i++) {
        let navDot = document.createElement("li");

        navDot.className = "nav-dots";
        navDot.setAttribute("onclick", "dotClick(this.id)");
        navDot.setAttribute("id", parseInt(i));

        let dotContainer = document.querySelector(".carousel-dots");
        dotContainer.appendChild(navDot);
    } */
    function displayImage() {
        // function renders images through the carousel, defaulted at index 0
        for (let y = 0; y < images.length; y++) {
            images[y].style.display = "none";
        }
        images[currentIndex].style.display = "block";
    }
    function displayDot() { 
        for (let y = 0; y < dotNavs.length; y++) {
            dotNavs[y].style.display = "none";
        }
        dotNavs[currentIndex].style.display = "block";
    }
    function moveLeft() {
        if (currentIndex === 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex--;
        }
        displayImage();
        //displayDot();
    }
    function moveRight() {
        if (currentIndex == images.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
      
        displayImage();
        //displayDot();
    }
    function dotClick(i) {
        currentIndex = i;
        displayImage();
        //displayDot();
    }

    displayImage();
    //displayDot();

    const leftArrow = document.querySelector(".left");
    leftArrow.addEventListener("click", moveLeft);
    const rightArrow = document.querySelector(".right");
    rightArrow.addEventListener("click", moveRight);
});
