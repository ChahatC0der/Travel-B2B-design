var tl=gsap.timeline();

// tl.from("header .logo,header .col-md-7 ul li,header button",{
//     y:-100,
//     duration:0.3,
//     delay:0.1,
//     opacity:0,
//     stagger:0.2
// })

tl.from("header img ",{
    y:-400,
    opacity:0,
    
})

tl.from("header .carousel-caption ",{
    y:100,
    opacity:0,
    color:"red",
    stagger:0.3
});

gsap.from(".Services .col-md-12",{
    x:-400,
    duration:1,
    // delay:2,
    opacity:0,
    scrollTrigger:{
        trigger:".Services .col-md-12",
        scroller:"body",
        // start:"top 20%"
    }
})
gsap.from(".Services .col-md-3",{
    x:400,
    duration:1,
    // delay:2,
    stagger:0.1,
    opacity:0,
    scrollTrigger:{
        trigger:".Services .col-md-3",
        scroller:"body",
        // start:"top 70%"
    }
})

// gsap.to(".featured-destinations",{
//     backgroundColor:"rgb(15, 15, 15)",
//     // backgroundImage:'url(data:image/jpeg;base64,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)',
//     // backgroundSize:"contain", 
//     // duration:1,
//     // delay:1,
//     // opacity:0,
//     color:"white",
//     scrollTrigger:{
//         trigger:".featured-destinations",
//         scroller:"body",
//         scrub:2,
//         start:"top 30%",
//         end:"top -30%",
//         pin:true
//     }
// })

// gsap.set(".featured-destinations",{
//     x:10
// })

gsap.from(".featured-destinations h2",{
    y:-400,
    duration:1,
    delay:1,    
    opacity:0,
    scrollTrigger:{
        trigger:".featured-destinations h2",
        scroller:"body",
        // start:"top 70%"
    }
})

// gsap.set(".featured-destinations .container-fluidd>.row>.row",{
//     x:-1250
// })

// gsap.to(".featured-destinations .container-fluidd>.row>.row",{
//     transform:"translateX(-100%)",
//     // backgroundColor:"black",
//     // duration:4,
//     // delay:1,
//     // opacity:0,
//     scrollTrigger:{
//         trigger:".featured-destinations .container-fluidd>.row",
//         scroller:"body",
//         // markers:true,
//         start:"top -10%",
//         end:"top -10%",
//         scrub:2,
//         pin:true
//     }
// })

gsap.from(".packages",{
    backgroundColor:"black",
    duration:1,
    // delay:1,
    opacity:0,
    // color:"white",
    scrollTrigger:{
        trigger:".packages",
        scroller:"body",
        scrub:2,
        start:"top 70%",
        end:"top 30%"
    }
})

gsap.from(".packages h1",{
    x:-400,
    duration:1,
    // delay:2,
    opacity:0,
    scrollTrigger:{
        trigger:".packages h1",
        scroller:"body",
        // start:"top 20%"
    }
})
gsap.from(".packages .col-md-3",{
    x:400,
    duration:1,
    // delay:2,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".packages .card",
        scroller:"body",
        // start:"top 70%"
    }
})

gsap.from(".packages .banner-package",{
    y:400,
    duration:1,
    // delay:2,
    stagger:0.1,
    opacity:0,
    scrollTrigger:{
        trigger:".packages .banner-package",
        scroller:"body",
    }
})

// gsap.to(".contact-us img",{
//     y:-300,
//     duration:1,
//     scrollTrigger:{
//         trigger:".contact-us img",
//         scroller:"body",
//         start:"top 90%",
//         end:"top 50%",
//         scrub:true,
        
//     }
// })

// gsap.from(".partnerships h2",{
//     y:200,
//     duration:0.01,
//     rotate:360,
//     // delay:2,
//     stagger:0.1,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".partnerships h2",
//         scroller:"body",
//         start:"top bottom",
//         end:"top 90%",
//         scrub:5
//     }
// })


// gsap.from(".partnerships .logo",{
//     y:200,
//     duration:1,
//     rotate:360,
//     // delay:2,
//     stagger:0.1,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".partnerships",
//         scroller:"body",
//         start:"top bottom",
//         end:"top 30%",
//         scrub:5
//     }
// })

gsap.from("footer",{
    y:-10,
    duration:0.1,
    // delay:2,
    // stagger:0.1,
    opacity:10,
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        scrub:1
    }
})


var dest=document.getElementsByClassName("dest0");


document.addEventListener("mouseover",()=>{
    // document.getElementsByClassName("h5")[0].style.color="black";
    console.log("hi");
    console.log(monitorEvents(window));
});