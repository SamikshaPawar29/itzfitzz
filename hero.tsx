"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import styles from "./hero.module.css"

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const text = textRef.current
    const cta = ctaRef.current

    // Initial animations
    gsap.from(hero, { opacity: 0, duration: 1 })
    gsap.from(text, { y: 50, opacity: 0, duration: 1, delay: 0.5 })
    gsap.from(cta, { y: 20, opacity: 0, duration: 1, delay: 1 })

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20

      gsap.to(hero, {
        rotationY: xPos,
        rotationX: -yPos,
        ease: "power1.out",
        transformPerspective: 900,
        transformOrigin: "center",
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 ref={textRef} className={styles.heroTitle}>
          We are <span className={styles.highlight}>Pha5e</span>
        </h1>
        <p className={styles.heroSubtitle}>Digital Product Studio</p>
        <a ref={ctaRef} href="#" className={styles.cta}>
          Let's talk
        </a>
      </div>
    </section>
  )
}

