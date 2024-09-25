gsap.registerPlugin(ScrollTrigger);

// Scroll to the top on page load
// Scroll to the top on page load and reset ScrollTrigger
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0); // Scroll to top before unloading the page
});

window.addEventListener('load', () => {
  // Scroll to top immediately on page load
  window.scrollTo(0, 0);

  // Start the animation after ensuring everything is ready
  setTimeout(() => {
    gsap.to('.header', {
      opacity: 1,
      duration: 0.3,
      scale: 1,
    });
    // Make the image visible and animate its opacity
    gsap.to('.img-holder', {
      visibility: 'visible',
      opacity: 1,             // Smooth fade-in
      duration: 0.3,          // Duration of the fade-in
      scale: 1,               // Reset the scale
      onStart: () => {
        // Ensure ScrollTrigger is refreshed so everything is synced
        ScrollTrigger.refresh();
      }
    });
  }, 50); // Slight delay to ensure everything is loaded before showing the image
});



// Adjust the body height to accommodate scrolling
document.addEventListener("DOMContentLoaded", function() {
  const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;
  const imgHolderHeight = window.innerHeight;
  const additionalScrollHeight = window.innerHeight;
  const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
  document.body.style.height = `${totalBodyHeight}px`;
});

// Fixed positioning of the .website-content
ScrollTrigger.create({
  trigger: ".website-content",
  start: "-0.1% top",
  end: "bottom bottom",
  onEnter: () => {
    gsap.set(".website-content", {position: 'absolute', top: '195%'});
  },
  onLeaveBack: () => {
    gsap.set(".website-content", {position: 'fixed', top: '0'});
  }
});

// Header animations
gsap.to(".header .letters:first-child", {
  x: () => -innerWidth * 3,
  scale: 10,
  ease: "power2.inOut", 
  scrollTrigger: {
    start: "top top",
    end: `+=200%`,
    scrub: 1
  }
});

gsap.to(".header .letters:last-child", {
  x: () => innerWidth * 3,
  scale: 10,
  ease: "power2.inOut", 
  scrollTrigger: {
    start: "top top",
    end: `+=200%`,
    scrub: 1
  }
});

// Image holder animations
gsap.to(".img-holder", {
  rotation: 0,
  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  ease: "power2.inOut",
  scrollTrigger: {
    start: "top top",
    end: `+=200%`,
    scrub: 1
  }
});

gsap.to(".img-holder img", {
  scale: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    start: "top top",
    end: `+=200%`,
    scrub: 1
  }
});

// Desktop content and photo animations
const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
const allPhotos = gsap.utils.toArray(".desktopPhoto");

gsap.set(photos, {yPercent:101});
let mm = gsap.matchMedia();
mm.add("(min-width: 600px)", () => {
  ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right"
  });

  details.forEach((detail, index) => {
    let headline = detail.querySelector("h1");
    let animation = gsap.timeline()
      .to(photos[index], {yPercent:0})
      .set(allPhotos[index], {autoAlpha:0});
    ScrollTrigger.create({
      trigger: headline,
      start: "top 80%",
      end: "top 50%",
      animation: animation,
      scrub: true,
      markers: false
    });
  });
});

details.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      contentHolder.style.backgroundColor = sectionColors[section.querySelector("h1").textContent.toLowerCase()];
    },
    onLeave: () => {
      if (index === 0) contentHolder.style.backgroundColor = 'black'; // Set default color if the first section leaves
    }
  });
});

//////////////////////////////////////////////////////////////

const $cursorBall = document.querySelector('.cursor__ball');
const $hoverables = document.querySelectorAll('.hoverable');

// Use gsap.quickSetter for smooth updates
const cursorX = gsap.quickSetter($cursorBall, "x", "px");
const cursorY = gsap.quickSetter($cursorBall, "y", "px");

// Mouse move function to track cursor
function onMouseMove(e) {
  cursorX(e.clientX - 12); // Position relative to viewport
  cursorY(e.clientY - 12); // Position relative to viewport
}

// Attach mousemove event listener
document.body.addEventListener('mousemove', onMouseMove);

// Hover effects for cursor scaling
$hoverables.forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to($cursorBall, {
      duration: 0.3,
      scale: 2,
      ease: "power2.out"
    });
  });
  
  el.addEventListener('mouseleave', () => {
    gsap.to($cursorBall, {
      duration: 0.3,
      scale: 1,
      ease: "power2.out"
    });
  });
});

