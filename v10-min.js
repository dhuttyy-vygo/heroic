ScrollTrigger.config({ ignoreMobileResize: !0 }),
    window.addEventListener("DOMContentLoaded", (e) => {
        gsap.to(".logo", 1, { yPercent: 100, delay: 0.2, ease: "Power3.easeInOut" }),
            gsap.to(".logo-testing", 1, { yPercent: -100, delay: 0.2, ease: "Power3.easeInOut" }),
            gsap.to(".is-video-overlay-left, .is-video-overlay-right", 1.5, { scaleX: 0, delay: 1, ease: "Power4.easeInOut" }),
            gsap.to("#nav-is-z", 2, { opacity: 1, delay: 1, ease: "Power4.easeInOut" });
    });
const tl = gsap.timeline({ paused: !0 });
function openNav() {
    animateOpenNav();
    let e = document.getElementById("menu-toggle-btn");
    e.onclick = function (t) {
        e.classList.toggle("active"), tl.reversed(!tl.reversed()), e.classList.contains("active") ? $("body").css("overflow", "hidden") : $("body").css("overflow", "auto");
    };
}
function animateOpenNav() {
    window.innerWidth >= 991
        ? (tl.to("#nav-container", 0, { autoAlpha: 1 }),
          tl.to("#is-navbar", 0.1, { backgroundColor: "transparent", ease: "ease.Power4.easeOut" }, "0"),
          tl.from(".col-overlay", 0.5, { yPercent: -100, ease: "ease.Power4.easeOut" }, "0"),
          tl.to("[logo--in--nav]", 0.3, { opacity: 0, ease: "ease.Power4.easeOut" }, "0"),
          tl.from("#slider-is-nav", 0.7, { yPercent: -100, ease: "ease.Power2.easeOut" }, "0"),
          tl.from(".nav-link > a, .footer-email-menu", 0.5, { yPercent: 100, ease: "ease.Power4.easeOut", stagger: { amount: 0.2 } }, ".3"),
          tl.to("[nav--logo--z]", 0.3, { opacity: 1, yPercent: 0, ease: "ease.Power4.easeOut" }, ".3").reverse())
        : (tl.to("#nav-container", 0, { autoAlpha: 1 }),
          tl.to("#is-navbar", 0.2, { backgroundColor: "white", color: "black", ease: "ease.Power4.easeOut" }, "0"),
          tl.from(".col-overlay", 0.5, { yPercent: -100, ease: "ease.Power4.easeOut" }, "0"),
          tl.to("[a-z-l]", 0.3, { color: "black", ease: "ease.Power4.easeOut" }, "0"),
          tl.from("#slider-is-nav", 0.7, { yPercent: -100, ease: "ease.Power2.easeOut" }, "0"),
          tl.from(".nav-link > a, .footer-email-menu", 0.5, { yPercent: 100, ease: "ease.Power4.easeOut", stagger: { amount: 0.2 } }, ".3").reverse());
}
openNav(),
    Webflow.push(function () {
        let e = document.getElementById("menu-toggle-btn");
        e.onclick = function (t) {
            e.classList.toggle("active"), tl.reversed(!tl.reversed()), e.classList.contains("active") ? $("body").css("overflow", "hidden") : $("body").css("overflow", "auto");
        };
    }),
    gsap.set("[work-video-contain], [y-1], [y-2], [y-3], [y-4], [pin-hero], [pin-under-hero], [view-cta-end]", { autoAlpha: 1 }),
    gsap.set("[pq-1]", { autoAlpha: 0 }),
    gsap.set("work2Video", { autoAlpha: 0 });
const work1Video = $("[work-video]").eq(0),
    underHero = $("[we-are-the]"),
    videoWrap = $("[vid-wrapper]"),
    work1Header = $("[y-v-in]").eq(0),
    work1Sub = $("[y-v-in]").eq(1),
    work1Para = $("[y-v-in]").eq(2),
    work1VideoContain = $("[work-video-contain]").eq(0),
    work2Video = $("[work-video]").eq(1),
    work2Header = $("[y-v-in]").eq(3),
    work2Sub = $("[y-v-in]").eq(4),
    work2Para = $("[y-v-in]").eq(5),
    work2VideoContain = $("[work-video-contain]").eq(1),
    work3Video = $("[work-video]").eq(2),
    work3Header = $("[y-v-in]").eq(6),
    work3Sub = $("[y-v-in]").eq(7),
    work3Para = $("[y-v-in]").eq(8),
    endCta = $("[view-cta-end]"),
    work3VideoContain = $("[work-video-contain]").eq(2);
if (
    (window.innerWidth >= 991 &&
        gsap
            .timeline({ scrollTrigger: { trigger: "[h-p-pin]", start: "top top", end: "top top-=5200rem", scrub: 1, pinSpacing: !0, pin: !0 } })
            .to(underHero, { autoAlpha: 0, delay: 0.4, duration: 1 })
            .to(videoWrap, { top: "0%", duration: 1 }, "<")
            .to(work1Header, { y: "-200px", autoAlpha: 0, duration: 0.5 }, ">")
            .to(work1Sub, { y: "-200px", autoAlpha: 0, duration: 0.5 }, "<")
            .to(work1Para, { y: "-200px", autoAlpha: 0, duration: 0.5 }, "<")
            .to(work1Video, { scale: 0.7, autoAlpha: 0, duration: 1 }, "<")
            .addLabel("endFirst")
            .from(work2VideoContain, { top: "100%", duration: 1 }, "<")
            .from(work2Header, { y: "400px", autoAlpha: 0, duration: 1 }, "endFirst-=1")
            .from(work2Sub, { y: "400px", autoAlpha: 0, duration: 1 }, "endFirst-=1")
            .from(work2Para, { y: "400px", autoAlpha: 0, duration: 1 }, "endFirst-=1")
            .to(work2Header, { y: "-200px", duration: 0.5, autoAlpha: 0 }, "endSecond")
            .to(work2Sub, { y: "-200px", autoAlpha: 0, duration: 0.5 }, "endSecond")
            .to(work2Para, { y: "-200px", autoAlpha: 0, duration: 0.5 }, "endSecond")
            .to(work2Video, { scale: 0.7, autoAlpha: 0, duration: 1 }, "<")
            .addLabel("endSecond")
            .from(work3VideoContain, { top: "100%", duration: 1 }, "<")
            .from(work3Header, { y: "400px", autoAlpha: 0, duration: 1 }, "endSecond-=1")
            .from(work3Sub, { y: "400px", autoAlpha: 0, duration: 1 }, "endSecond-=1")
            .from(work3Para, { y: "400px", autoAlpha: 0, duration: 1 }, "endSecond-=1")
            .from(endCta, { y: "30px", autoAlpha: 0, scrub: 0, duration: 0.2 }, "endSecond-=.3")
            .to("[test-end]", { top: "0%", scale: 1, delay: 0.3, duration: 1 })
            .to(videoWrap, { autoAlpha: 0, duration: 1 }, "<"),
    $("[is--top--black]").each(function (e) {
        ScrollTrigger.create({
            trigger: $(this),
            start: "top 10%",
            end: "bottom 10%",
            onEnter() {
                $("#is-navbar").removeClass("light--light dark--dark top--white").addClass("top--black");
            },
            onEnterBack() {
                $("#is-navbar").removeClass("light--light dark--dark top--white").addClass("top--black");
            },
        });
    }),
    $("[is--top--white]").each(function (e) {
        ScrollTrigger.create({
            trigger: $(this),
            start: "top 10%",
            end: "bottom 10%",
            onEnter() {
                $("#is-navbar").removeClass("light--light dark--dark top--black").addClass("top--white");
            },
            onEnterBack() {
                $("#is-navbar").removeClass("light--light dark--dark top--black").addClass("top--white");
            },
        });
    }),
    $("[dark--mode]").each(function (e) {
        ScrollTrigger.create({
            trigger: $(this),
            start: "top 10%",
            end: "bottom 10%",
            onEnter() {
                $("#is-navbar").removeClass("light--light top--black top--white").addClass("dark--dark");
            },
            onEnterBack() {
                $("#is-navbar").removeClass("light--light top--black top--white").addClass("dark--dark");
            },
        });
    }),
    $("[light--mode]").each(function (e) {
        ScrollTrigger.create({
            trigger: $(this),
            start: "top 10%",
            end: "bottom 10%",
            onEnter() {
                $("#is-navbar").removeClass("dark--dark top--black top--white").addClass("light--light");
            },
            onEnterBack() {
                $("#is-navbar").removeClass("dark--dark top--black top--white").addClass("light--light");
            },
        });
    }),
    window.matchMedia("(min-width: 991px)").matches)
) {
    let e = gsap.from("#is-navbar", { yPercent: -100, paused: !0, duration: 1, ease: "power2.out" }).progress(1);
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate(t) {
            -1 === t.direction ? e.play() : e.reverse();
        },
    });
}
window.addEventListener("DOMContentLoaded", (e) => {
    function t(e, t) {
        ScrollTrigger.create({ trigger: e, start: "top 70%", onEnter: () => t.play() });
    }
    new SplitType(".is-split", { types: "words", tagName: "span" }),
        $(".fade-in").each(function (e) {
            let o = gsap.timeline({ paused: !0 });
            o.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 1, ease: "power4.out", stagger: { amount: 0.3 } }), t($(this), o);
        }),
        $(".cta-text").each(function (e) {
            let o = gsap.timeline({ paused: !0 });
            o.from($(this).find(".is-line"), { scaleX: 0, duration: 1.2, ease: "power1.out" }), t($(this), o);
        }),
        gsap.set(".is-split", { opacity: 1 });
}),
    $("[cursor-play]").on("mouseenter", function () {
        $(".cursor__dot").addClass("play");
    }),
    $("[cursor-play]").on("mouseleave", function () {
        $(".cursor__dot").removeClass("play");
    }),
    $("#play").on("click", function () {
        $(".cursor__closedot").addClass("close"), $(".cursor__dot").removeClass("play");
    }),
    $("#pause").on("click", function () {
        $(".cursor__closedot").removeClass("close"), $(".cursor__dot").removeClass("play");
    }),
    $("#play").on("click", function () {
        let e = $("[video-modal]");
        gsap.to(e, { autoAlpha: 1, duration: 0.7, ease: "power1.easeInOut" });
    }),
    $("#pause").on("click", function () {
        let e = $("[video-modal]");
        gsap.to(e, { autoAlpha: 0, duration: 0.3, ease: "power1.easeInOut" });
    }),
    gsap.set("[stat],[video-cta],[video-disc]", { yPercent: 100 }),
    $(".light.is-aspect100").mouseenter(function () {
        let e = $(this).find("[stat],[video-cta], [video-disc]");
        gsap.to(e, { duration: 0.8, yPercent: 0, ease: "power4.easeInOut", stagger: { amount: 0.3 } });
    }),
    $(".light.is-aspect100").mouseleave(function () {
        let e = $(this).find("[stat],[video-cta], [video-disc]");
        gsap.to(e, { duration: 0.5, yPercent: 100, ease: "power1.easeInOut", stagger: { amount: 0.1 } });
    }),
    $("[fade-work-in]").mouseenter(function () {
        let e = $(this).find("[stat],[video-cta], [video-disc]");
        gsap.to(e, { duration: 0.4, yPercent: 0, ease: "power4.easeInOut", stagger: { amount: 0.05 } });
    }),
    $("[fade-work-in]").mouseleave(function () {
        let e = $(this).find("[stat],[video-cta], [video-disc]");
        gsap.to(e, { duration: 0.3, yPercent: 100, ease: "power1.easeInOut", stagger: { amount: 0.1 } });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let e = document.getElementById("player"),
            t = document.getElementById("play"),
            o = $("[video-modal]"),
            a = document.getElementById("pause");
        t.addEventListener("click", function () {
            e.play();
        }),
            a.addEventListener("click", function () {
                e.pause(), (e.currentTime = 0);
            }),
            e.addEventListener("webkitendfullscreen", function () {
                e.pause(), (e.currentTime = 0), gsap.to(o, { autoAlpha: 0, duration: 0.3, ease: "power1.easeInOut" });
            });
    }),
    $(".link").hover(function () {
        let e = $(this).find(".link_text").eq(0).text();
        $(this).find(".link_text.is--2").text(e);
    });
let eventCarousel = ".work-flick-p",
    eventSlider = ".work-flick",
    flktyEvents = new Flickity(eventCarousel, {
        contain: !0,
        freeScroll: !0,
        percentPosition: !0,
        cellSelector: eventSlider,
        initialIndex: 0,
        cellAlign: "left",
        resize: !0,
        selectedAttraction: 0.01,
        dragThreshold: 1,
        lazyLoad: 4,
        freeScrollFriction: 0.05,
    });
flktyEvents.on("scroll", function (e) {
    $(".progress_fill").css("width", `${100 * e}%`);
});
let mCarousel = ".mobile--flick",
    mSlider = ".mobile-m",
    flktyM = new Flickity(mCarousel, {
        contain: !0,
        freeScroll: !0,
        percentPosition: !0,
        cellSelector: mSlider,
        cellAlign: "left",
        resize: !0,
        wrapAround: !1,
        lazyLoad: 4,
        selectedAttraction: 0.01,
        dragThreshold: 1,
        freeScrollFriction: 0.05,
    });
flktyM.on("scroll", function (e) {
    $(".progress_fill").css("width", `${100 * e}%`);
}),
    $(function () {
        function e() {
            var e = $('[data-w-tab="' + window.location.hash.substr(1) + '"]');
            e.length && e.click();
        }
        window.location.hash && e(),
            $(window).on("hashchange", e),
            $("[data-w-tab]").on("click", function () {
                history.pushState({}, "", "#" + $(this).data("w-tab"));
            });
    });
const viewHeightCalc = (e) => window.innerHeight * (e / 100),
    approachHeroPin = ScrollTrigger.create({ start: "top top", end: "+=500%", scrub: !0, pin: ".hero-stick" });
if (
    (window.matchMedia("(min-width: 991px)").matches && gsap.timeline({ scrollTrigger: { trigger: ".is--stick--hero", start: "top top", end: "+=300%", scrub: 1, pin: !0 } }).fromTo(".to-track-text", { yPercent: 5 }, { yPercent: -68 }),
    window.innerWidth >= 911)
) {
    let t = gsap.utils.toArray("[will-stick-vh]");
    t.map((e) => ScrollTrigger.create({ trigger: e, start: "top top" })),
        t.forEach((e, t) => {
            ScrollTrigger.create({ trigger: e, start: () => (e.offsetHeight < window.innerHeight ? "top top" : "bottom bottom"), pin: !0, pinSpacing: !1, pinDuration: !1, end: viewHeightCalc(310) + " top" });
        });
}
const vhInner = (e) => window.innerHeight * (e / 100),
    vwInner = (e) => window.innerWidth * (e / 100);
let carbtonPin = gsap.timeline({ scrollTrigger: { trigger: "[pin]", start: "top top", end: 5 * window.innerHeight + " top", scrub: 1, pin: !0 } });
function applyOpacityToBody() {
    document.body.style.opacity = 0;
}
function reloadPage() {
    location.reload(!0);
}
carbtonPin.to(".track", { xPercent: -85, duration: 1 }),
    window.innerWidth >= 991 && gsap.timeline({ scrollTrigger: { trigger: ".hs-outro", start: "top bottom", end: "top top", scrub: 0 } }).fromTo(".hs-outro-content", { yPercent: -50 }, { yPercent: 0 }),
    window.addEventListener("DOMContentLoaded", (e) => {
        setTimeout(() => {
            $("[hs-fade-i]").each(function (e) {
                let t = $(this).find("[hs-line]"),
                    o = t.text(),
                    a;
                function n() {
                    new SplitType(t, { types: "lines", tagName: "span" }),
                        t.find(".line").each(function (e) {
                            let t = $(this).html();
                            $(this).html(""), $(this).append(`<span class="line-inner" style="display: block;">${t}</span>`);
                        }),
                        (a = gsap.timeline({ scrollTrigger: { trigger: t, start: "top bottom", end: "bottom bottom", toggleActions: "none play none reset" } })).fromTo(
                            t.find(".line-inner"),
                            { yPercent: 100, opacity: 0 },
                            { yPercent: 0, opacity: 1, duration: 0.7, stagger: { amount: 0.3, ease: "power4.out" } }
                        );
                }
                gsap.set(t, { autoAlpha: 1 }), n();
                let r = window.innerWidth;
                window.addEventListener("resize", function () {
                    r !== window.innerWidth && ((r = window.innerWidth), a.kill(), t.text(o), n());
                });
            });
        }, 700);
    }),
    (window.onpageshow = function (e) {
        e.persisted && (applyOpacityToBody(), reloadPage());
    });
var coef,
    overlayElement = document.querySelector(".rc-loader_overlay");
overlayElement.classList.remove("visible");
