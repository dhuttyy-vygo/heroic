
    let smoother = ScrollSmoother.create({
      smooth: 0.6,
      effects: true,
      ignoreMobileResize: true,
      normalizeScroll: true,
      preventDefault: true,
    });


const tl = gsap.timeline({ paused: true });

function openNav() {
  animateOpenNav();
  const navBtn = document.getElementById("menu-toggle-btn");
  navBtn.onclick = function (e) {
    navBtn.classList.toggle("active");
    if ($("#menu-toggle-btn").hasClass("active")) {
      smoother.paused(true);
    } else {
      smoother.paused(false);
    }
    tl.reversed(!tl.reversed());
  };
}

openNav();

function animateOpenNav() {
  const screenWidth = window.innerWidth;
  
  if (screenWidth >= 991) {
    tl.to("#nav-container", 0, {
      autoAlpha: 1,
    });

    tl.to(
      "#is-navbar",
      0.1,
      {
        backgroundColor: "transparent",
        ease: "ease.Power4.easeOut",
      },
      "0"
    );
    tl.from(
      ".col-overlay",
      0.5,
      {
        yPercent: -100,
        ease: "ease.Power4.easeOut",
      },
      "0"
    );

    tl.to(
      "[a-z-l]",
      0.3,
      {
        autoAlpha: 0,
        ease: "ease.Power4.easeOut",
      },
      "0"
    );

    tl.from(
      "#slider-is-nav",
      0.7,
      {
        yPercent: -100,
        ease: "ease.Power2.easeOut",
      },
      "0"
    );


    tl.from(
      ".nav-link > a, .footer-email-menu",
      0.5,
      {
        yPercent: 100,
        ease: "ease.Power4.easeOut",
        stagger: {
          amount: 0.2,
        },
      },
      ".3"
    );

    tl.to(
      "[nav--logo--z]",
      0.3,
      {
        autoAlpha: 1,
        yPercent: 0,
        ease: "ease.Power4.easeOut",
      },
      ".3"
    ).reverse();
  } else {
    tl.to("#nav-container", 0, {
        autoAlpha: 1,
      });
  		tl.to(
      "#is-navbar",
      .2,
      {
        backgroundColor: "white",
        color: "black",
        ease: "ease.Power4.easeOut",
      },
      "0"
    );
      
      tl.from(
        ".col-overlay",
        0.5,
        {
          yPercent: -100,
          ease: "ease.Power4.easeOut",
        },
        "0"
      );
  
      tl.to(
        "[a-z-l]",
        0.3,
        {
          color: "black",
          ease: "ease.Power4.easeOut",
        },
        "0"
      );
  
      tl.from(
        "#slider-is-nav",
        0.7,
        {
          yPercent: -100,
          ease: "ease.Power2.easeOut",
        },
        "0"
      );
  
  
      tl.from(
        ".nav-link > a, .footer-email-menu",
        0.5,
        {
          yPercent: 100,
          ease: "ease.Power4.easeOut",
          stagger: {
            amount: 0.2,
          },
        },
        ".3"
      ).reverse();
  }
}
