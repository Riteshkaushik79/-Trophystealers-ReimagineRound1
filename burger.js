gsap.set(".aboutus",{scale: 3})
var tl = gsap.timeline({

        scrollTrigger:{
            trigger: ".home",
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: 2
        }
})

tl.
to(".vedodiv",{
    '--clip': "0%",
    ease: Power2
},'a')

tl.
to(".aboutus",{
    scale:1,
    ease: Power2
},'a')


document.querySelectorAll(".section")
.forEach(function(e){
    
    ScrollTrigger.create({
        trigger:e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter : function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
        onEnterBack: function(){
            document.body.setAttribute("theme",e.dataset.color);
        }    
})
})


gsap.to(".meetourteam", {
    yPercent: -90,
    opacity: 0,
    ease: Power3.easeOut,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".meetourteam",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin: true
    },
  });

  gsap.to(".kabirjeetsingh", {
    yPercent: -90,
    opacity: 0,
    ease: Power3.easeOut,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".kabirjeetsingh",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin: true
    },
  });

  gsap.to(".Nitinrana", {
    yPercent: -90,
    opacity: 0,
    ease: Power3.easeOut,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".Nitinrana",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin: true
    },
  });

  gsap.to(".RAHULSETH", {
    yPercent: -90,
    opacity: 0,
    ease: Power3.easeOut,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".RAHULSETH",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin: true
    },
  });

  gsap.to(".AJAYPAL", {
    yPercent: -90,
    opacity: 0,
    ease: Power3.easeOut,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".AJAYPAL",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin: true
    },
  });

  gsap.to(".AYUSH", {
    yPercent: -90,
    opacity: 0,
    ease: Power3.easeOut,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".AYUSH",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin: true
    },
  });

  gsap.to(".footer-down", {
    yPercent: -90,
    opacity: 0,
    ease: Power3.easeOut,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".footer-down",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin: true
    },
  });

  gsap.to('.slide',{
    scrollTrigger:{
      trigger: ".menusection",
      start: "top top",
      end: "bottom bottom",
      scrub: 2
    },
    xPercent: -200,
    ease: Power4
  })

  gsap.to('.expressmodellaunchslide',{
    scrollTrigger:{
      trigger: ".franchisecrousel",
      start: "top top",
      end: "bottom bottom",
      scrub: 2
    },
    xPercent: 500,
    ease: Power2
  })