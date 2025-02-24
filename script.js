document.addEventListener("DOMContentLoaded", () => {
  const mouseFollower = document.querySelector(".mouse-follower")
  const hero = document.querySelector(".hero")
  let mouseX = 0,
    mouseY = 0
  let followerX = 0,
    followerY = 0

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Tilt effect
    const xPos = (mouseX / window.innerWidth - 0.5) * 20
    const yPos = (mouseY / window.innerHeight - 0.5) * 20
    hero.style.transform = `rotateX(${-yPos}deg) rotateY(${xPos}deg)`
  })

  function updateMouseFollower() {
    const dx = mouseX - followerX
    const dy = mouseY - followerY

    followerX += dx * 0.1
    followerY += dy * 0.1

    mouseFollower.style.transform = `translate(${followerX}px, ${followerY}px)`

    requestAnimationFrame(updateMouseFollower)
  }

  updateMouseFollower()

  // Hover effect for CTA button
  const cta = document.querySelector(".cta")
  cta.addEventListener("mouseenter", () => {
    mouseFollower.style.transform = `translate(${followerX}px, ${followerY}px) scale(3)`
    mouseFollower.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
  })

  cta.addEventListener("mouseleave", () => {
    mouseFollower.style.transform = `translate(${followerX}px, ${followerY}px) scale(1)`
    mouseFollower.style.backgroundColor = "rgba(0, 255, 255, 0.5)"
  })
})

