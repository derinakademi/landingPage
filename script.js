let lastScrollY = window.scrollY;
let header = document.querySelector("header");
let isHidden = false;
let isScrolledPast = false;


document.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    document.querySelectorAll(".floating-item").forEach((item, index) => {
        let speed = (index + 1) * 0.1; // Her nesneye farklı hız ver
        item.style.transform = `translateY(${scrollPosition * speed}px) rotate(${scrollPosition * 0.2}deg)`;
    });
});

window.addEventListener("scroll", function (){
    if (window.scrollY > 100 && !isHidden){
        header.classList.add("hidden"); // Navbar tamamen kayboluyor
        isHidden = true;
        isScrolledPast = false;
    } else if (window.scrollY < 100){
        header.classList.remove("hidden");
        header.classList.remove("scrolled");
        isHidden = false;
        isScrolledPast = false;
    }

    if (window.scrollY > 250 && !isScrolledPast){
        header.classList.remove("hidden");
        header.classList.add("scrolled"); // Navbar yukarıdan kayarak geri geliyor
        isScrolledPast = true;
    }

    lastScrollY = window.scrollY;
});

(function (){
    let checkIfGsapLoaded = setInterval(function (){
        if (window.gsap && window.ScrollTrigger){
            gsap.registerPlugin(ScrollTrigger);
            slideBackground();
            clearInterval(checkIfGsapLoaded);
        }
    }, 500);

    function slideBackground(){
        gsap.to("#animatedPart", {
            scrollTrigger: {
                trigger: "#info",
                start: "bottom 90%", /* Daha yukarıdan başlat */
                end: "bottom top",
                scrub: 2
            },
            background: "linear-gradient(0deg, rgba(0,157,184,0.8) 0%, rgba(67,171,189,1) 15%, rgba(248,248,248,0) 100%)",
            duration: 1
        });
    }
})();
