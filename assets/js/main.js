gsap.registerPlugin(ScrollTrigger);

//lenis
const lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

lenis.on("scroll", ({ velocity }) => {
    gsap.to(".glow-ring", {
        rotate: `+=${velocity * 5}`,
        duration: 1,
    });
});

// header
ScrollTrigger.create({
    start: 100,
    onUpdate: (self) => {
        document.querySelector(".header").classList.toggle("bg-header", self.scroll() > 100);
    },
});

ScrollTrigger.create({
    start: "top -80",

    onEnter: () => {
        gsap.to(".header", {
            background: "rgba(9,11,11,.8)",
            backdropFilter: "blur(20px)",
            duration: 0.3,
        });
    },

    onLeaveBack: () => {
        gsap.to(".header", {
            background: "transparent",
            backdropFilter: "blur(0px)",
            duration: 0.3,
        });
    },
});

//scrollup
function scrollupShow() {
    const scrollup = document.getElementById("scrollup");

    this.scrollY >= 50 ? scrollup.classList.add("show-scrollup") : scrollup.classList.remove("show-scrollup");
}

window.addEventListener("scroll", scrollupShow);

//active menu link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        const sectionClass = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);

//home
const tl = gsap.timeline();

tl.from(".header", {
    y: -100,
    opacity: 0,
    duration: 1,
})
    .from(".hero-tag", {
        y: 50,
        opacity: 0,
        duration: 0.6,
    })
    .from(".hero-title span", {
        y: 120,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power4.out",
    })
    .from(".hero-description", {
        y: 40,
        opacity: 0,
        duration: 0.6,
    })
    .from(".hero-buttons > *", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
    })
    .from(".hero-image", {
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
    })
    .from(
        ".floating-card",
        {
            scale: 0,
            opacity: 0,
            stagger: 0.15,
        },
        "-=.8"
    )
    .from(
        ".glow-ring",
        {
            scale: 0,
            duration: 1,
            opacity: 1,
            ease: "power3.inOut",
        },
        "-=.8"
    );

gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section.children, {
        y: 60,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: section,
            start: "top 75%",
        },
    });
});

gsap.to(".hero-image", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".card-1", {
    y: -15,
    repeat: -1,
    yoyo: true,
    duration: 2,
});

gsap.to(".card-2", {
    y: 20,
    repeat: -1,
    yoyo: true,
    duration: 3,
});

gsap.to(".card-3", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
});

gsap.to(".glow-ring", {
    scale: 1.15,
    opacity: 0,
    duration: 5,
    ease: "none",
    repeat: -1,
});

gsap.to(".hero-image", {
    yPercent: 15,
    ease: "none",

    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

gsap.to(".hero-word", {
    xPercent: -10,

    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

//partners
gsap.to(".partners-slider", {
    xPercent: -10,
    ease: "none",
    duration: 20,
    repeat: -1,
});

gsap.from(".partner-item", {
    y: 60,
    opacity: 0,
    stagger: 0.08,

    scrollTrigger: {
        trigger: ".partners",
        start: "top 80%",
    },
});

//choose
gsap.to(".choose-img", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".choose-data-item", {
    y: 0,
    opacity: 1,
    stagger: 0.15,

    scrollTrigger: {
        trigger: ".choose",
        start: "top 70%",
    },
});

gsap.to(".choose-badge", {
    scale: 1,
    opacity: 1,

    scrollTrigger: {
        trigger: ".choose",
        start: "top 70%",
    },
});
