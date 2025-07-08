gsap.registerPlugin(ScrollTrigger);

// Page load animations
gsap.from("#preloder", {
    duration: 0.2,
    opacity: 1,
    delay: 0.5,
    onComplete: function() {
        document.getElementById("preloder").style.display = "none";
    }
});

// Header animation
gsap.from(".header__logo", {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from(".header__nav__menu ul li", {
    duration: 0.7,
    y: -20,
    opacity: 0,
    stagger: 0.1,
    delay: 0.6,
    ease: "back.out"
});

gsap.from(".header__nav__social a", {
    duration: 0.6,
    x: 20,
    opacity: 0,
    stagger: 0.1,
    delay: 0.7,
    ease: "power2.out"
});

// Hero section 
gsap.matchMedia().add("(max-width: 767px)", () => {
    // Mobile hero animations - simplified
    gsap.from(".hero__text h3", {
        scrollTrigger: {
            trigger: ".hero__text h3",
            start: "top 90%",
            toggleActions: "play reverse play reverse"
        },
        duration: 0.75,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
    });


    gsap.from(".hero__text a", {
        scrollTrigger: {
            trigger: ".hero__text a",
            start: "top 90%",
            toggleActions: "play reverse play reverse"
        },
        duration: 0.5,
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: "power3.out"
    });
});

gsap.matchMedia().add("(min-width: 768px)", () => {
    // Desktop hero animations - original
    gsap.from(".hero__text h3", {
        scrollTrigger: {
            trigger: ".hero__text h3",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        duration: 0.75,
        y: 50,
        rotationX: 15,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
    });

   

    gsap.from(".hero__text a", {
        scrollTrigger: {
            trigger: ".hero__text a",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        duration: 0.5,
        y: 40,
        skewX: 10,
        opacity: 0,
        delay: 0.3,
        ease: "power3.out"
    });
});



gsap.from(".about__item", {
    scrollTrigger: {
        trigger: ".about__item",
        start: "top 70%",
        toggleActions: "play reverse play reverse"
    },
    duration: 1,
    y: 60,
    scale: 0.9,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
    ease: "power2.out"
});

gsap.from(".about", {
    opacity: 0,
    y: 50,
    duration: 0,
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});

// Services section


gsap.from(".services__item", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 70%",
        toggleActions: "play reverse play reverse"
    },
    duration: 1,
    y: 60,
    scale: 0.9,
    opacity: 0,
    stagger: 0.3,
    delay: 0.3,
    ease: "power2.out"
});


// Hover animations for buttons
const buttons = document.querySelectorAll(".primary-btn");
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1.05,
            ease: "power2.out"
        });
    });
    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// Hover animations for social icons
const socialIcons = document.querySelectorAll(".header__nav__social a, .footer__top__social a");
socialIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
            duration: 0.3,
            y: -5,
            ease: "power2.out"
        });
    });
    icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
            duration: 0.3,
            y: 0,
            ease: "power2.out"
        });
    });
});

