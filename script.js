var tl = gsap.timeline();
var tb = gsap.timeline();
tl 
    .from(".nav-logo",{
        scale:0.5,
        opacity:0,
        duartion:.1,
        x:5,
    })
    .from(".nav-address",{
        scale:0.5,
        opacity:0,
        duartion:.1,
        x:5,
    })
    .from(".nav-search",{
        scale:0.5,
        opacity:0,
        duartion:.1,
        x:5,
    })
    .from(".nav-signin",{
        scale:0.5,
        opacity:0,
        duartion:.1,
        x:5,
    })
    .from(".nav-return",{
        scale:0.5,
        opacity:0,
        duartion:.1,
        x:5,
    })
    .from(".nav-cart",{
        scale:0.5,
        opacity:0,
        duartion:.1,
        x:5,
    })
    
// gsap.from("header",{
//     scale:1.2,
//     y:10,
//     opacity:0,
//     duration:1,
// })

gsap.from(".panel",{
    scale:0.8,
    opacity:0,
    duartion:1,
})

gsap.from(".hero-section",{
    scale:.8,
    opacity:0,
    duration:1,
})

tb
    .from(".shop-section .box1",{
        opacity:0,
        duration:.1,
        y:20,
    })
    .from(".shop-section .box2",{
        opacity:0,
        duration:.1,
        y:20,
    })
    .from(".shop-section .box3",{
        opacity:0,
        duration:.1,
        y:20,
    })
    .from(".shop-section .box4",{
        opacity:0,
        duration:.1,
        y:20,
    })
    .from(".shop-section .box5",{
        opacity:0,
        duration:.1,
        y:20,
    })
    .from(".shop-section .box6",{
        opacity:0,
        duration:.1,
        y:20,
    })
    .from(".shop-section .box7",{
        opacity:0,
        duration:.1,
        y:20,
    })
    .from(".shop-section .box8",{
        opacity:0,
        duration:.1,
        y:20,
    })

