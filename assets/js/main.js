//menu toggle
const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});

gsap.registerPlugin(ScrollTrigger);
//lenis

const lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

lenis.on("scroll", ({ velocity }) => {
    ScrollTrigger.update();

    gsap.to(".glow-ring", {
        rotate: `+=${velocity * 5}`,
        duration: 1,
    });
});

// header
const header = document.querySelector(".header");

ScrollTrigger.create({
    start: "top -100",
    toggleClass: {
        targets: header,
        className: "bg-header",
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
const slider = document.querySelector(".partners-slider");

window.addEventListener("load", () => {
    gsap.set(slider, { x: 0 });

    gsap.to(slider, {
        x: () => -slider.scrollWidth / 2,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % (slider.scrollWidth / 2)),
        },
    });
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

//pricing
gsap.to(".pricing .section-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
});

gsap.from(".pricing-card", {
    opacity: 0,
    y: 80,
    scale: 0.9,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".pricing-container",
        start: "top 75%",
    },
});

gsap.to(".pricing-card-active", {
    scale: 1.1,
    boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
    overwrite: "auto",
    scrollTrigger: {
        trigger: ".pricing-card-active",
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
    },
});

gsap.utils.toArray(".pricing-card").forEach((card, i) => {
    gsap.to(card, {
        y: i % 2 === 0 ? -10 : 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });
});

//calculate
gsap.from(".calculate-content", {
    opacity: 0,
    x: -80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".calculate",
        start: "top 80%",
    },
});

gsap.from(".calculate-image", {
    opacity: 0,
    x: 80,
    scale: 0.9,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".calculate",
        start: "top 80%",
    },
});

gsap.to(".calculate-img", {
    y: -5,
    scale: 1.07,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

document.querySelectorAll(".calculate-input").forEach((input) => {
    input.addEventListener("focus", () => {
        gsap.to(input.parentElement, {
            scale: 1.03,
            borderColor: "#ff5a3c",
            duration: 0.3,
        });
    });

    input.addEventListener("blur", () => {
        gsap.to(input.parentElement, {
            scale: 1,
            borderColor: "rgba(255,255,255,0.2)",
            duration: 0.3,
        });
    });
});

const btn = document.querySelector(".calculate-form .button");

btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.05, duration: 0.5, overwrite: true });
});

btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, overwrite: true });
});

const form = document.getElementById("calculate-form");

const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.getElementById("popup-close");

function showPopup(message, type = "success") {
    popupMessage.textContent = message;

    // color based on type
    if (type === "error") {
        popupMessage.style.color = "#ff4d4d";
    } else if (type === "warn") {
        popupMessage.style.color = "#ffb84d";
    } else {
        popupMessage.style.color = "#00ff99";
    }

    popup.classList.add("active");

    gsap.fromTo(
        ".popup-content",
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" }
    );
}

popupClose.addEventListener("click", () => {
    gsap.to(".popup-content", {
        scale: 0.7,
        opacity: 0,
        duration: 0.2,
        onComplete: () => popup.classList.remove("active"),
    });
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popupClose.click();
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const heightInput = document.getElementById("calculate-cm");
    const weightInput = document.getElementById("calculate-kg");

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight) {
        showPopup("Please enter valid values ⚠️", "error");
        return;
    }

    // BMI formula: weight (kg) / (height in meters)^2
    const heightM = height / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let message = "";
    let type = "success";

    if (bmi < 18.5) {
        message = `Your BMI is ${bmi} — Underweight`;
        type = "warn";
    } else if (bmi < 25) {
        message = `Your BMI is ${bmi} — Healthy 💪`;
        type = "success";
    } else if (bmi < 30) {
        message = `Your BMI is ${bmi} — Overweight`;
        type = "warn";
    } else {
        message = `Your BMI is ${bmi} — Obese`;
        type = "error";
    }

    showPopup(message, type);

    form.reset();
});
