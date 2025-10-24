//bg header

function scrollHeader() {
    const header = document.getElementById("header");

    this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
}

window.addEventListener("scroll", scrollHeader);

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

//calculate bmi
const calculateForm = document.getElementById("calculate-form");
const calculateCm = document.getElementById("calculate-cm");
const calculateKg = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");

function calculateBmi(e) {
    e.preventDefault();

    if (calculateCm.value === "" || calculateKg.value === "") {
        calculateMessage.classList.remove("color-first");
        calculateMessage.classList.add("color-red");

        calculateMessage.textContent = "Please, fill all values Height & Weight";

        setTimeout(() => {
            calculateMessage.textContent = "";
        }, 3000);
    } else {
        const cm = calculateCm.value / 100;
        const kg = calculateKg.value;
        const bmi = Math.round(kg / (cm * cm));

        if (bmi < 18.5) {
            calculateMessage.classList.add("color-first");
            calculateMessage.textContent = `Your BMI is - ${bmi} - you are skinny.`;
        } else if (bmi < 25) {
            calculateMessage.classList.add("color-first");
            calculateMessage.textContent = `Your BMI is - ${bmi} - you are healthy.`;
        } else {
            calculateMessage.classList.add("color-first");
            calculateMessage.textContent = `Your BMI is - ${bmi} - you are little heavy.`;
        }

        setTimeout(() => {
            calculateCm.value = "";
            calculateKg.value = "";
            calculateMessage.textContent = "";
        }, 3000);
    }
}

calculateForm.addEventListener("submit", calculateBmi);

//scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home-data, .footer-container, .footer-group`);
sr.reveal(`.home-img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logo-img, .program-card, .pricing-card`, { interval: 200 });
sr.reveal(`.choose-group, .calculate-content`, { origin: "left" });
sr.reveal(`.choose-content, .calculate-image`, { origin: "right" });
