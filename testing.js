ScrollTrigger.config({ ignoreMobileResize: !0 });
const tl = gsap.timeline({ paused: !0 });
function openNav() {
    animateOpenNav();
    let e = document.getElementById("menu-toggle-btn");
    e.onclick = function (t) {
        e.classList.toggle("active"), tl.reversed(!tl.reversed()), e.classList.contains("active") ? $("body").css("overflow", "hidden") : $("body").css("overflow", "auto");
    };
}
function animateOpenNav() {
    let e = window.innerWidth;
    e >= 991
        ? (tl.to("#nav-container", 0, { autoAlpha: 1 }),
          tl.to("#is-navbar", 0.1, { backgroundColor: "transparent", ease: "ease.Power4.easeOut" }, "0"),
          tl.from(".col-overlay", 0.5, { yPercent: -100, ease: "ease.Power4.easeOut" }, "0"),
          tl.to("[a-z-l]", 0.3, { autoAlpha: 0, ease: "ease.Power4.easeOut" }, "0"),
          tl.from("#slider-is-nav", 0.7, { yPercent: -100, ease: "ease.Power2.easeOut" }, "0"),
          tl.from(".nav-link > a, .footer-email-menu", 0.5, { yPercent: 100, ease: "ease.Power4.easeOut", stagger: { amount: 0.2 } }, ".3"),
          tl.to("[nav--logo--z]", 0.3, { autoAlpha: 1, yPercent: 0, ease: "ease.Power4.easeOut" }, ".3").reverse())
        : (tl.to("#nav-container", 0, { autoAlpha: 1 }),
          tl.to("#is-navbar", 0.2, { backgroundColor: "white", color: "black", ease: "ease.Power4.easeOut" }, "0"),
          tl.from(".col-overlay", 0.5, { yPercent: -100, ease: "ease.Power4.easeOut" }, "0"),
          tl.to("[a-z-l]", 0.3, { color: "black", ease: "ease.Power4.easeOut" }, "0"),
          tl.from("#slider-is-nav", 0.7, { yPercent: -100, ease: "ease.Power2.easeOut" }, "0"),
          tl.from(".nav-link > a, .footer-email-menu", 0.5, { yPercent: 100, ease: "ease.Power4.easeOut", stagger: { amount: 0.2 } }, ".3").reverse());
}
if (
    (openNav(),
    Webflow.push(function () {
        let e = document.getElementById("menu-toggle-btn");
        e.onclick = function (t) {
            e.classList.toggle("active"), tl.reversed(!tl.reversed()), e.classList.contains("active") ? $("body").css("overflow", "hidden") : $("body").css("overflow", "auto");
        };
    }),
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
    new SplitType(".is-split", { types: "lines", tagName: "span" }),
        $(".fade-in").each(function (e) {
            let a = gsap.timeline({ paused: !0 });
            a.from($(this).find(".line"), { opacity: 0, yPercent: 100, duration: 1, ease: "power4.out", stagger: { amount: 0.3 } }), t($(this), a);
        }),
        $(".cta-text").each(function (e) {
            let a = gsap.timeline({ paused: !0 });
            a.from($(this).find(".is-line"), { scaleX: 0, duration: 1.2, ease: "power1.out" }), t($(this), a);
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
    Webflow.push(function () {
        $("#play").click(function (e) {
            e.preventDefault(), $("body").css("overflow", "hidden");
        }),
            $("#pause").click(function (e) {
                e.preventDefault(), $("body").css("overflow", "auto");
            });
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
        gsap.to(e, { duration: 0.8, yPercent: 0, ease: "power4.easeInOut", stagger: { amount: 0.3 } });
    }),
    $("[fade-work-in]").mouseleave(function () {
        let e = $(this).find("[stat],[video-cta], [video-disc]");
        gsap.to(e, { duration: 0.5, yPercent: 100, ease: "power1.easeInOut", stagger: { amount: 0.1 } });
    }),
    (window.onload = function () {
        let e = document.getElementById("player"),
            t = document.getElementById("play"),
            a = document.getElementById("pause");
        t.addEventListener("click", function () {
            e.play();
        }),
            a.addEventListener("click", function () {
                e.pause(), (e.currentTime = 0);
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
    flktyM = new Flickity(mCarousel, { contain: !0, freeScroll: !0, percentPosition: !0, cellSelector: mSlider, resize: !0, wrapAround: !0, lazyLoad: 4, selectedAttraction: 0.01, dragThreshold: 1, freeScrollFriction: 0.05 });
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

    gsap.set("[work-video-contain], [y-1], [y-2], [y-3], [y-4], [pin-hero], [pin-under-hero], [view-cta-end]", {autoAlpha: 1});
    
    gsap.set("[pq-1]", {autoAlpha: 0});
    
    gsap.set('work2Video', {autoAlpha: 0});

const work1Video = $('[work-video]').eq(0);
const underHero = $('[we-are-the]');
const videoWrap = $('[vid-wrapper]');
const work1Header = $('[y-v-in]').eq(0);
const work1Sub = $('[y-v-in]').eq(1);
const work1Para = $('[y-v-in]').eq(2);
const work1VideoContain = $('[work-video-contain]').eq(0);
const work2Video = $('[work-video]').eq(1);
const work2Header = $('[y-v-in]').eq(3);
const work2Sub = $('[y-v-in]').eq(4);
const work2Para = $('[y-v-in]').eq(5);
const work2VideoContain = $('[work-video-contain]').eq(1);
const work3Video = $('[work-video]').eq(2);
const work3Header = $('[y-v-in]').eq(6);
const work3Sub = $('[y-v-in]').eq(7);
const work3Para = $('[y-v-in]').eq(8);
const endCta = $('[view-cta-end]');
const work3VideoContain = $('[work-video-contain]').eq(2);


if (window.innerWidth >= 991) {

    const workTl =  gsap.timeline({
        scrollTrigger: {
            trigger: "[h-p-pin]",
            start: "top top",
            end: "top top-=5200rem",
            scrub: 1,
            pinSpacing: true, 
            pin: true,
        }
    });
    
    
    workTl.to(underHero, {
        autoAlpha: 0,
        delay: .4,
        duration: 1,
    })
    
    
    .to(videoWrap, {
        top: "0%",
        duration: 1,
    }, "<")
    
    .to(work1Header, {
        y: "-200px",
        autoAlpha: 0,
        duration: .5,
    }, ">")
    
    .to(work1Sub, {
        y: "-200px",
        autoAlpha: 0,
        duration: .5,
    }, "<")
    
    .to(work1Para, {
        y: "-200px",
        autoAlpha: 0,
        duration: .5,
    }, "<")
    
    
    
    .to(work1Video, {
        scale: 0.7,
        autoAlpha: 0,
        duration: 1,
    }, "<")

    .addLabel("endFirst",)
    
    
    .from(work2VideoContain, {
        top: "100%",
        duration: 1,
    }, "<")
    


    .from(work2Header, {
        y: "400px",
        autoAlpha: 0,
        duration: 1,
    }, "endFirst-=1")

    .from(work2Sub, {
        y: "400px",
        autoAlpha: 0,
        duration: 1,
    }, "endFirst-=1")

    .from(work2Para, {
        y: "400px",
        autoAlpha: 0,
        duration: 1,
    }, "endFirst-=1")


    
    
    // second text out 
    .to(work2Header, {
        y: "-200px",
        duration: .5,
        autoAlpha: 0,
    }, "endSecond")
    
    
    .to(work2Sub, {
        y: "-200px",
        autoAlpha: 0,
        duration: .5,
    }, "endSecond")
    
    .to(work2Para, {
        y: "-200px",
        autoAlpha: 0,
        duration: .5,
    }, "endSecond")

    .to(work2Video, {
        scale: 0.7,
        autoAlpha: 0,
        duration: 1,
    }, "<")
    
    .addLabel("endSecond",)
    
    // text out is above
    
    .from(work3VideoContain, {
        top: "100%",
        duration: 1,
    }, "<")
    
    
     
    
    .from(work3Header, {
        y: "400px",
        autoAlpha: 0,
        duration: 1,
    }, "endSecond-=1")

    .from(work3Sub, {
        y: "400px",
        autoAlpha: 0,
        duration: 1,
    }, "endSecond-=1")

    .from(work3Para, {
        y: "400px",
        autoAlpha: 0,
        duration: 1,
    }, "endSecond-=1")
		
    .from(endCta, {
        y: "30px",
        autoAlpha: 0,
        scrub: 0,
        duration: .2,
    }, "endSecond-=.3")

    
    .to("[test-end]",  {
    		top: "0%",
        scale: 1,
        delay: .3,
        duration: 1,   
    })
    
    .to(videoWrap,  {
    		autoAlpha: 0,
        duration: 1,   
    }, "<")  
    ;
    
} 

// our story code

const vhCalculate = (coef) => window.innerHeight * (coef/100);
const vwCalculate = (coef) => window.innerWidth * (coef/100);



const videoFirst = $("[video-is-first]"),
        videoSecond = $("[video-is-second]"),
        blackFade = $("[v-b]"),
        whyUs = $("[why-us]"),
        ourValues = $("[our-values]"),
        ourPartners = $("[our-p]"),
        firstParaSplit = $("[h-in-2]").find(".line"),
        heroTextContain = $("[v-i]");

if (window.innerWidth >= 991) {
    const composeTl =  gsap.timeline({
        scrollTrigger: {
            trigger: "[approach]",
            start: "top top",
            end: vhCalculate(1000) + ' top',
            scrub: 2,
            pinSpacing: true, 
            pin: true,
        }
    });
        
    composeTl.to(".lp-text-1", {
        autoAlpha: 1,
        scrub: 1,
        stagger: { amount: 2},
        duration: 1,
    })
    
    .to(heroTextContain, {
        left: "10%",
         scale: 0.3,
        duration: 2,
    }, ">")
    .to(".exit-text", {
        autoAlpha: 1,
        stagger: { amount: .7},
        duration: 1,
    }, ">-1")
    
    .to(videoFirst, {
        autoAlpha: 1,
        duration: .2,
    }, "<")
    .to(blackFade, {
				autoAlpha: 0,
        duration: 1,
    })
    .to(".cta-is-button", {
        width: "auto",
        duration: .8,
    }, ">-.8")
    .to(videoFirst, {
        scale: .7,
        autoAlpha: 0,
        duration: 3,
    }, ">1")
    .to(videoSecond, {
        y: 0,
        duration: 3,
    }, "<")
    .to(".exit-text-b", {
        autoAlpha: 1,
        stagger: { amount: .7},
        duration: 1,
    }, ">-1.5")
    .to(".cta-is-button-b", {
        width: "auto",
        duration: .8,
    },">-.8")
    
    .to("[scroll-nudge-in]", {
    	autoAlpha: 0,
      duration:.4,
         
    })
     .to(whyUs, {
        y: 0,
        delay: 1,
        duration: 3,
    })
    
    
    
    .fromTo("#is-navbar", {
  		color: "white",
        backgroundColor: "transparent",
			},
      {
      color: "black",
      backgroundColor: "white",
      duration: .1,
      }, ">-.5")
      
    .to("[img-contain-1]", {
        autoAlpha: 1,
        duration: 3,
    }, "<")
    .to("[img-bg-1]", {
        scale: 1,
        duration: 3,
    }, "<")

    
    .from("[h-in]", {
        top: "30%",
        autoAlpha: 0,
        duration: 2,
    }, "<.05 ")
    .from("[h-in-1], [side-in-1]", {
        top: "50%",
        autoAlpha: 0,
        opacity: 1,
        duration: 2,
    }, "<.81")
    .from("[h-in-2], [side-in-2]", {
        top: "57%",
        autoAlpha: 0,
        duration: 2,
    }, "<.1")
    .from("[side-in-3]", {
        top: "64%",
        autoAlpha: 0,
        duration: 2,
    }, "<.1")
     .from("[side-in-4]", {
        top: "71%",
        autoAlpha: 0,
        duration: 2,
    }, "<.1")
    .from("[side-in-5]", {
        top: "78%",
        autoAlpha: 0,
        duration: 2,
    }, "<.1")
    .to("[img-bg-1]", {
        scale: .7,
        duration: 3,
        delay: .2,
    })
    .to("[img-contain-1]", {
        autoAlpha: 0,
        duration: 2,
    }, "<")
    .to("[side-in-1]", {
        opacity: .22,
        duration: 2,
    }, "<")
     .to("[side-in-2]", {
        opacity: 1,
        duration: 2,
    }, "<")
    .from("[img-contain-2]", {
    		top: "100%",
        duration: 2,
    }, "<")
    .to("[img-bg-2]", {
    		scale: 1,
        duration: 3,
    }, "<")
    .to("[h-in-1]", {
        top: "35%",
        autoAlpha: 0,
        duration: 1,
    }, "<")
    .to("[h-in-2]", {
        top: "42%",
        autoAlpha: 0,
        duration: 1,
    }, "<")
    .from("[j-in-1]", {
        top: "70%",
        autoAlpha: 0,
        duration: 2,
    }, "<.2")
     .from("[j-in-2]", {
        top: "75%",
        autoAlpha: 0,
        duration: 2,
    }, "<.2")
    ///// third slide //
    .to("[img-bg-2]", {
        scale: .7,
        duration: 3,
        delay: .4,
    }, "secondImageScale")
    .to("[img-contain-2]", {
        autoAlpha: 0,
        duration: 2,
    }, "<")
    .to("[side-in-2]", {
        opacity: .22,
        duration: 2,
    }, "<")
     .to("[side-in-3]", {
        opacity: 1,
        duration: 2,
    }, "<")
    .from("[img-contain-3]", {
    		top: "100%",
        duration: 2,
    }, "<")
    .to("[img-bg-3]", {
    		scale: 1,
        duration: 3,
    }, "<")
    .to("[j-in-1]", {
        top: "35%",
        autoAlpha: 0,
        duration: 1,
    }, "<")
    .to("[j-in-2]", {
        top: "42%",
        autoAlpha: 0,
        duration: 1,
    }, "<")
    .from("[k-in-1]", {
        top: "70%",
        autoAlpha: 0,
        duration: 2,
    }, "<.2")
     .from("[k-in-2]", {
        top: "75%",
        autoAlpha: 0,
        duration: 2,
    }, "<.2")
    // Starting Fourth
    .to("[img-bg-3]", {
        scale: .7,
        duration: 3,
        delay: .2,
    })
    .to("[img-contain-3]", {
        autoAlpha: 0,
        duration: 2,
    }, "<")
    .to("[side-in-3]", {
        opacity: .22,
        duration: 2,
    }, "<")
     .to("[side-in-4]", {
        opacity: 1,
        duration: 2,
    }, "<")
    .from("[img-contain-4]", {
    		top: "100%",
        duration: 2,
    }, "<")
    .to("[img-bg-4]", {
    		scale: 1,
        duration: 3,
    }, "<")
    .to("[k-in-1]", {
        top: "35%",
        autoAlpha: 0,
        duration: .6,
    }, "<")
    .to("[k-in-2]", {
        top: "42%",
        autoAlpha: 0,
        duration: .6,
    }, "<")
    .from("[l-in-1]", {
        top: "70%",
        autoAlpha: 0,
        duration: 2,
    }, "<.2")
     .from("[l-in-2]", {
        top: "75%",
        autoAlpha: 0,
        duration: 2,
    }, "<.2")
    // starting fith //
    
    .to("[video-is-second], [video-is-first], [v-i], .exit-text, .exit-text-b, .cta-is-button, .cta-is-button-b", {
        autoAlpha: 0,
        duration: .1,
    }, "<")
    
    
    .fromTo(".aaaaaaa", {
  	color: "white",
  },
  {
    color: "black",
    duration: 1,
  }, "<")

    .to(ourPartners, {
        y: 0,
        duration: 3,
        delay: 1,
    })
    .to(whyUs, {
        autoAlpha: 0,
        duration: 3,
    }, "<")
    .to(whyUs, {
        autoAlpha: 1,
        duration: 1,
    });
    
} else {
	const composeTl =  gsap.timeline({
        scrollTrigger: {
            trigger: "[approach]",
            start: "top top",
            end: vhCalculate(600) + ' top',
          	scrub: .5,
          	ease: "linear",
            pinSpacing: true, 
            pin: true,
        }
    });
    
    composeTl.to(".lp-text-1", {
        autoAlpha: 1,
        scrub: 1,
        stagger: { amount: 2},
        duration: 1,
    }, "<.2")
    .to(heroTextContain, {
        bottom: "73%",
        scale: 0.5,
        duration: 1,
    }, ">")
     .to(".exit-text", {
        autoAlpha: 1,
        stagger: { amount: .7},
        duration: 1,
    }, ">-1")
       .to(blackFade, {
				autoAlpha: 0,
        duration: 1,
    })
    .to(".cta-is-button", {
        width: "auto",
        duration: 1.5,
    }, ">-.8")
    .to(videoFirst, {
        scale: .7,
        autoAlpha: 0,
        duration: 3,
    }, ">1")
    .to(videoSecond, {
        y: 0,
        duration: 3,
    }, "<")
    .to(".exit-text-b", {
        autoAlpha: 1,
        stagger: { amount: .7},
        duration: 1,
    }, ">-1.5")
    .to(".cta-is-button-b", {
        width: "auto",
        duration: 1.5,
    },">-.8")
    
    .to("[scroll-nudge-in]", {
    	autoAlpha: 0,
      duration:.4,
         
    })
    
    .to(whyUs, {
        y: 0,
        duration: 3,
    })
    .fromTo("#is-navbar", {
  		color: "white",
        backgroundColor: "transparent",
			},
      {
      color: "black",
      backgroundColor: "white",
      duration: .5,
      }, ">-.5")
    .to("[video-is-second], [video-is-first], [v-i], .exit-text, .exit-text-b, .cta-is-button, .cta-is-button-b", {
        autoAlpha: 0,
        duration: 1,
    }, "<.3")
    
    .to(whyUs, {
        autoAlpha: 0,
        duration: 3,
    })
    
    .to(ourPartners, {
        y: 0,
        duration: 3,
    }, "<");
}




// approach code 

const vh = (coef) => window.innerHeight * (coef/100);
const approachHeroPin = ScrollTrigger.create({
  start: "top top",
  end: "+=400%",
  scrub: true,
  pin: ".hero-stick",
  
});

if (window.innerWidth >= 911) {
  let panels = gsap.utils.toArray("[will-stick-vh]");

  let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
      pin: true,
      pinSpacing: false,
      pinDuration: false, // Disable automatic duration calculation
      end: vh(300) + ' top',
    });
  });
}

//footer code

if (window.innerWidth >= 991) {
    let t = gsap.timeline({ scrollTrigger: { trigger: ".hs-outro", start: "top bottom", end: "top top", scrub: 0 } });
    t.fromTo(".hs-outro-content", { yPercent: -50 }, { yPercent: 0 });
}
