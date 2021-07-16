// gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' });

// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });

// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' });

// gsap.from('.left', { duration: 1, delay: 0.5, x: '-100%' });

// gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 });

// gsap.fromTo(
//   '.button',
//   { opacity: 0, scale: 0, rotation: 720 },
//   { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
// );

// const obj = { x: 0 };

// gsap.to(obj, { duration: 2, x: 100, onUpdate: () => console.log(obj.x) });

const timeline = gsap.timeline({ defauts: { duration: 1 } });
timeline
  .from('.header', { y: '-100%', ease: 'bounce' })
  .from('.link', { opacity: 0, delay: 1, stagger: 0.5 })
  .from('.right', { x: '-100vw', delay: 1, ease: 'power2.in' })
  .from('.left', { delay: 0.5, x: '-100%' })
  .to('.footer', { y: 0, ease: 'elastic', delay: 2.5 })
  .fromTo(
    '.button',
    { opacity: 0, scale: 0, rotation: 720 },
    { delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
  );

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  timeline.timeScale(2);
  timeline.reverse();
});
