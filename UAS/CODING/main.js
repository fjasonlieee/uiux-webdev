let piring = document.getElementById('piring');
let kacang_blkg = document.getElementById('kacangBelakang');
let ayam_blkg = document.getElementById('ayamBelakang');
let sate = document.getElementById('sate');
let nasi = document.getElementById('nasi');
let ayam_dpn = document.getElementById('ayamDepan');
let kacang_dpn = document.getElementById('kacangDepan');
let jeruk = document.getElementById('jeruk');

let textParallax = document.getElementById('textParallax');

let kamboja1 = document.getElementById('kamboja1');
let kamboja2 = document.getElementById('kamboja2');
let kamboja3 = document.getElementById('kamboja3');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    kacang_blkg.style.right = -100 + 'px';
    kacang_blkg.style.right = -100 + 'px';

    piring.style.top =-50 -(650-value*0.25) + 'px';
    nasi.style.top =-50 -(650-value*0.25) + 'px';
    ayam_blkg.style.top =-150 -300-value*0.22 + 'px';
    sate.style.top =-50 -300-value*0.4 + 'px';
    kacang_blkg.style.top =-150 -400-value*0.12 + 'px';
    ayam_dpn.style.top =-100 -(610-value*0.2) + 'px';
    kacang_dpn.style.top =-100 -(610-value*0.18) + 'px';
    jeruk.style.top =-100 -200-value*0.3 + 'px';
    textParallax.style.right =-100 -200-value*0.5 + 'px';
    kamboja1.style.top = 100 - value*0.2 + 'px';
    kamboja2.style.top = 600 - value*0.4 + 'px';
    kamboja3.style.top = -800 + value*0.2 + 'px';
})

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
      isDown = true;
      carousel.classList.add("active");
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
      isDown = false;
      carousel.classList.remove("active");
    });

    carousel.addEventListener("mouseup", () => {
      isDown = false;
      carousel.classList.remove("active");
    });

    carousel.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1; // The multiplier can be adjusted for sensitivity
      carousel.scrollLeft = scrollLeft - walk;
    });
  });


  const initSlider = () => {
    const imageList = document.querySelector(".card .carousel");
    const slideButtons = document.querySelectorAll(".card .slide-button");
    const sliderScrollbar = document.querySelector(".card .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startsx = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;

      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startsx;
        const newThumbPosition = thumbPosition + deltaX;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      }

      const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      }

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    })
    slideButtons.forEach(button => {
      button.addEventListener("click", () => {
        const direction = button.id === "prevslide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
      });
    });

    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.clientWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener('scroll', ()=> {
      updateScrollThumbPosition();
    })
  }
  
  // Call the function when the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", initSlider);