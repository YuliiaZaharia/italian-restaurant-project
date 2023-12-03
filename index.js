gsap.to(".one", {delay: 1, duration: 2, x: -400, ease: "power2.inOut", opacity: 0})
gsap.from(".two", {delay: 1.2, duration: 2, x: - 400, ease: "power2.inOut", opacity: 0})
gsap.from(".header", {delay: 3, duration: 2, y: 80, opacity: 0})
gsap.from(".btn", {opacity: 0, delay: 4, duration: 1, rotation: 720})

gsap.from('.mobile', { duration: 2, delay: 2.4, y: '10vw', ease: 'power2.in', opacity: 0 })
gsap.from('h1', { duration: 2, delay: 1.5, x: '-100vw', ease: 'power2.in', opacity: 0 })
gsap.fromTo('.btn', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 4.3, opacity: 1, scale: 1, rotation: 0 })
gsap.from('.links', { duration: 2, delay: 2.4, y: '10vw', ease: 'power2.in', opacity: 0 })

