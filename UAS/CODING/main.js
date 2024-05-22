let piring = document.getElementById('piring');
let kacang_blkg = document.getElementById('kacangBelakang');
let ayam_blkg = document.getElementById('ayamBelakang');
let sate = document.getElementById('sate');
let nasi = document.getElementById('nasi');
let ayam_dpn = document.getElementById('ayamDepan');
let kacang_dpn = document.getElementById('kacangDepan');
let jeruk = document.getElementById('jeruk');
let textParallax = document.getElementById('textParallax');
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
})

const carousel = document.querySelector(".carousel");

let isDragStart = false;

const dragStart = (e) => {
    isDragStart = true;
}

const dragging = (e) => {
    if (!isDragStart) return;
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);

