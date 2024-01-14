document.addEventListener('DOMContentLoaded', function () {
    gsap.from(".anim.one", { opacity: 0, scale: 0.5, rotation: 360, duration: 2, ease: "elastic.out(1, 0.5)"});
    gsap.from(".anim.two", { opacity: 0, scale: 0.5, rotation: -360, duration: 2, ease: "elastic.out(1, 0.5)", delay: 1});

    gsap.from(".link", { scale: 0, duration: 5, ease: "elastic.out(1, 0.5)", stagger: 0.2, delay: 1 });
    gsap.from(".header", { x: -100, opacity: 0, duration: 4, ease: "power2.out", delay: 1 });

    gsap.from("#myBtn", { opacity: 0, scale: 0.5, duration: 1, ease: "power4.out", delay: 1.5 });
    gsap.to("#myBtn", {
        backgroundColor: "#FA4659",
        color: "#FFF",
        scale: 1.2,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        repeat: -1,
        yoyo: true,
        delay: 2.5
    });
});

gsap.to([".anim.one", ".anim.two"], { opacity: 0, duration: 1, delay: 3 });





