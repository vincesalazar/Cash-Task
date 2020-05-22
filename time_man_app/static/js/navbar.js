// ** VARIABLE FOR LOGICALLY CHECKING WINDOW SIZE // E.G. PHONE OR DEKSTOP ***
var max900 = window.matchMedia("(max-width: 900px)");
var max766 = window.matchMedia("(max-width: 766px)");
var min767 = window.matchMedia("(min-width:767px)");
// %%%%%%%%%%%%%%%%%%%%%%
if (max766.matches) {
    // ***** NAVBAR ANIMATION FOR PHONE *******
    const hamburger = document.querySelector(".hamburger img");
    hamburger.addEventListener("click", () => {
        const navtl = gsap.timeline();
        navtl.timeScale()
        navtl.to(".hamburger", { duration: .1, opacity: 0, display: "none" });
        navtl.to("nav", { duration: .3, display: "flex", height: "100vh", ease: "power3", opacity: 1 }, "<+.1");
        navtl.fromTo("nav li", { opacity: 0, y: -100 }, { duration: .4, y: 0, opacity: 1, stagger: .2, ease: "power1" }, '<-.1');
        navtl.to(".phone-x", { display: "block", y: 0, opacity: 1 }, '<+.4')
        console.log(navtl.timeScale());
        const exitButton = document.querySelector(".phone-x");
        exitButton.addEventListener("click", () => {
            navtl.timeScale(-2.25)
            console.log("TIMESCALE UNDERNEATH ME");
            console.log(navtl.timeScale());
            navtl.reverse();
        });
        // setTimeout(() => {
        //     navtl.reverse();
        // }, 7000);
    });
    // ***************

} else {

}
var controller = new ScrollMagic.Controller();
var logoTl = gsap.timeline({ ease: "none" });
if (min767.matches) {
    logoTl.to(".logo", { opacity: 0, rotation: 5, y: 25, duration: .5 });
    logoTl.to(".desktop-nav ul li", { opacity: 0, x: 25, stagger: .1, duration: .4 }, '<');
    logoTl.to(".for-footer", { padding: "0 5.5% 0 20%" }, '<');
    logoTl.fromTo(".side-nav-for-desktop ul li", { opacity: 0, x: -50 }, { x: 0, opacity: 1, duration: .4 }, '<')
} else {
    logoTl.to(".logo", { opacity: 0, rotation: 5, y: 25, duration: .5 });

}

var scene = new ScrollMagic.Scene({
        triggerElement: ".logo-trigger",
        triggerHook: 0,
    })
    .addIndicators({
        colorTrigger: "transparent", //transparent
        colorStart: "transparent",
        colorEnd: "transparent",
        indent: 5
    })
    .setTween(logoTl)
    .addTo(controller);
window.addEventListener("load", () => {

});