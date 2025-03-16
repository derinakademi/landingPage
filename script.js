let lastScrollY = window.scrollY;
let header = document.querySelector("header");
let isHidden = false;
let isScrolledPast = false;

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
        gsap.to("#neural-network", {
            scrollTrigger: {
                trigger: "#info",
                start: "bottom bottom",
                end: "bottom top",
                scrub: 2
            },
            background: "linear-gradient(0deg, rgba(47,93,69,0.8) 0%, rgba(47,93,69,1) 15%, rgba(248,248,248,0) 100%)",
            duration: 1
        });
    }
})();

// Particles.js kütüphanesi
document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 100, // particle sayısı
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
                value: 0.5,
                random: false,
            },
            size: {
                value: 3,
                random: true,
            },
            line_linked: {
                enable: true, // link efektini veriyor
                distance: 150,
                color: "#ffffff",
                opacity: 0.6,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab", // interaktif yapıyor
                },
                onclick: {
                    enable: true,
                    mode: "push", // sol tık ile yeni particle ekleniyor
                },
            },
            modes: {
                grab: {
                    distance: 180,
                    line_linked: {
                        opacity: 1, // linklerin opaklığı
                    },
                },
                push: {
                    particles_nb: 4, // sol tık ile eklenen particle sayısı
                },
            },
        },
        retina_detect: true,
    });
});

// netural-network section'ında yazıya efekt veriyor
document.addEventListener("DOMContentLoaded", function (){
    if (window.gsap && window.ScrollTrigger){
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".neural-text",{
            scrollTrigger:{
                trigger: "#neural-network",
                start: "top 30%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 3,
            ease: "power2.out"
        });
    }
});

document.addEventListener("DOMContentLoaded", function (){
    const canvas = document.getElementById("riveCanvas");

    const container = canvas.parentElement;
    const maxWidth = 1000;
    const maxHeight = 400;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.min(container.clientWidth * dpr, maxWidth * dpr);
    canvas.height = Math.min(container.clientHeight * dpr, maxHeight * dpr);
    canvas.style.width = Math.min(container.clientWidth, maxWidth) + "px";
    canvas.style.height = Math.min(container.clientHeight, maxHeight) + "px";

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const r = new rive.Rive({
        src: "images/yaparak_ogren.riv",
        canvas: canvas,
        autoplay: true,
        stateMachines: "AnimationSequence",
        fit: rive.Fit.Contain,
        onLoad: function () {
            r.resizeDrawingSurfaceToCanvas();
        }
    });
});
