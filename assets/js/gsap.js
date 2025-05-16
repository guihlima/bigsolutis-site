
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#sectionText, #sectionImage", { opacity: 1 });

    gsap.to("#sectionText, #sectionImage", {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
            trigger: "#sectionHome",
            start: "top top",
            end: "bottom top",
            scrub: true,
            // markers: true, // Descomente para depuração
        }
    });

    gsap.from(".header > *", {
        opacity: 0,
        y: -30,
        stagger: 0.2,
        duration: 1,
    });
});