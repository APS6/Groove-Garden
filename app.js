burger = document.querySelector('.burger')
nav = document.querySelector('nav')

burger.addEventListener('click',() =>{
    nav.classList.toggle('active');
    burger.classList.toggle('active');
})


const tl = gsap.timeline();
tl.fromTo('h1', 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 });
tl.fromTo('.navlinks', 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 });
tl.fromTo('.btn-1', 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=.5");
tl.fromTo('.brand', 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=.5");
tl.fromTo('.burger', 0.5, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=.3");
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
