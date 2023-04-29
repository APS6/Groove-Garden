burger = document.querySelector('.burger')
nav = document.querySelector('nav')

burger.addEventListener('click',() =>{
    nav.classList.toggle('active');
    burger.classList.toggle('active');
})


const tl = gsap.timeline();
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo('h1', 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 });
tl.fromTo('.navlinksa', 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 });
tl.fromTo('.btn-1a', 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=.5");
tl.fromTo('.branda', 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=.5");
tl.fromTo('.burgera', 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=.3");
tl.fromTo('#arrow', 0.5, { opacity: 0, y: -30 }, { opacity: 1, y: 0 });


const al = gsap.timeline({defaults: { ease: "power1.out"}, scrollTrigger: "#about" })
al.to(".ani", { opacity: 1, x: 0, duration: .6, stagger:0.2 });
gsap.to(".abimg", { scrollTrigger: ".abimg", opacity: 1, x: 0, duration: .6, delay: .6 },);
al.to(".bigtext-a", { opacity: 0.1, duration: .5 },);

const sl = gsap.timeline({defaults: { ease: "power1.out"}, scrollTrigger: "#songs",})
gsap.to("#disc", { scrollTrigger: ".songimg", opacity: 1, x: 0, duration: 1});
gsap.to("#micro", { scrollTrigger: ".songimg",  opacity: 1, x: 0, rotate:'-10deg', duration: 1, delay: .2});
sl.to(".songtext", { scale: 1, x:0, opacity: 1, duration: 1, delay: .2});
sl.to(".bigtext-s", { opacity: 0.1, duration: .5 });

const tl2 = gsap.timeline();
tl2. fromTo('.img-1', 1, { opacity: 0, x:-40  }, { opacity: 1, x: 0,});
tl2. fromTo('.tgg-ct', .6, { opacity: 0, scaleX: .95, x:30  }, { opacity: 1, x: 0, scaleX: 1}, "-=.6");
tl2.fromTo(".bigtext-b", .5,{ opacity:0 }, { opacity: 0.1 });

const tl3 = gsap.timeline({ scrollTrigger: ".story"})
tl3.fromTo('.img-2', 1, { opacity: 0, x:-40 },{ opacity: 1, x:0 })
tl3.fromTo('.img-3', .5, { opacity: 0, x:40 },{ opacity: 1, x:0 }, "-=.5")
tl3. fromTo('.storyp1 p', .6, { opacity: 0, scaleX: .95, x:30  }, { opacity: 1, x: 0, scaleX: 1}, "-=.6");
tl3.fromTo(".bigtext-os", .5,{ opacity:0 }, { opacity: 0.1 });

const tl4 = gsap.timeline({scrollTrigger: '.team'})
tl4.fromTo('.card', 1, { opacity: 0, x: -100}, { opacity: 1, x: 0, stagger: 0.3})
tl3.fromTo(".bigtext-tb", .5,{ opacity:0 }, { opacity: 0.1 });

gsap.fromTo(".bigtext-so", .5,{ opacity:0 }, { opacity: 0.1, delay: 1 });

gsap.fromTo('.s1', .7, { opacity: 0, x: -40}, { opacity: 1, x: 0, scrollTrigger: '.s1'})
gsap.fromTo('.sc1', .5, { opacity: 0, x: -40}, { opacity: 1, x: 0, delay:.5, scrollTrigger: '.s1'},)

gsap.fromTo('.s2', .7, { opacity: 0, x: -40}, { opacity: 1, x: 0, scrollTrigger: '.s2' })
gsap.fromTo('.sc2', .5, { opacity: 0, x: -40}, { opacity: 1, x: 0, delay:.5, scrollTrigger: '.s2' },)

gsap.fromTo('.s3', .7, { opacity: 0, x: -40}, { opacity: 1, x: 0, scrollTrigger: '.s3' })
gsap.fromTo('.sc3', .5, { opacity: 0, x: -40}, { opacity: 1, x: 0, delay:.5, scrollTrigger: '.s3' },)