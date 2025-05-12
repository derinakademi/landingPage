// GSAP 
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Kurs kartları
    const cards = document.querySelectorAll('.course-wrapper');
    
    gsap.set(cards, { opacity: 0, y: 30 });
    gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Kurst kartlarının hover animasyonu
    cards.forEach(wrapper => {
        const course = wrapper.querySelector('.course');
        
        if (course) {
            wrapper.addEventListener('mouseenter', () => {
                gsap.to(course, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            wrapper.addEventListener('mouseleave', () => {
                gsap.to(course, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }
    });

    // Neural network arkaplan rengi animasyonu
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

// Header animasyonu (aşağıya doğru giderken "Hemen Başla" butonu ile gidiyor)
let lastScrollY = window.scrollY;
let header = document.querySelector("header");
let isHidden = false;
let isScrolledPast = false;

const handleScroll = () => {
    requestAnimationFrame(() => {
        if (window.scrollY > 100 && !isHidden) {
            header?.classList.add("hidden");
            isHidden = true;
            isScrolledPast = false;
        } else if (window.scrollY < 100) {
            header?.classList.remove("hidden", "scrolled");
            isHidden = false;
            isScrolledPast = false;
        }

        if (window.scrollY > 250 && !isScrolledPast) {
            header?.classList.remove("hidden");
            header?.classList.add("scrolled");
            isScrolledPast = true;
        }

        lastScrollY = window.scrollY;
    });
};

window.addEventListener("scroll", handleScroll, { passive: true });

// Sayfa komple yüklendikten sonra particles.js ve neural-network section'ının animasyonlarını çalıştırıyor
window.addEventListener("load", () => {
    // Particles.js kurulumu
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.6,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: {
                    grab: { distance: 180, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Neural section animasyonu
    if (window.gsap && document.querySelector('.neural-text')) {
        // neural-text animasyonu
        gsap.to(".neural-text", {
            scrollTrigger: {
                trigger: "#neural-network",
                start: "top 30%",
                end: "top 10%",
                scrub: 1,
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power1.out",
            stagger: 0.2
        });

        // startBig buton animasyonu
        gsap.to("#startBig", {
            scrollTrigger: {
                trigger: "#neural-network",
                start: "top 40%",
                end: "top 10%",
                scrub: 1,
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power1.out",
            stagger: 0.2
        });
    }
});