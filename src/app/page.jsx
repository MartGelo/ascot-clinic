'use client'
import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'

export default function page() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    React.useEffect(() => {
        const checkLoginStatus = () => {
            setIsLoggedIn(/* true or false based on actual check */)
        }

        checkLoginStatus()

        const handleScrollAnimation = () => {
            const elements = document.querySelectorAll('.scroll-animation')
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect()
                const isVisible =
                    rect.top < window.innerHeight && rect.bottom >= 0
                if (isVisible) {
                    element.classList.add('visible')
                } else {
                    element.classList.remove('visible')
                }
            })
        }

        window.addEventListener('scroll', handleScrollAnimation)
        handleScrollAnimation() // Trigger on mount to handle initial state

        return () => window.removeEventListener('scroll', handleScrollAnimation)
    }, [])
    return (
        <div>
            <section
                id="home"
                className="scroll-animation opacity-0 transform scale-90 transition-opacity duration-600 ease-out">
                <HeroSection />
            </section>
            <section
                id="features"
                className="scroll-animation opacity-0 transform scale-90 transition-opacity duration-600 ease-out">
                <Features />
            </section>
            <section
                id="contact"
                className="scroll-animation opacity-0 transform scale-90 transition-opacity duration-600 ease-out">
                <Contact />
            </section>
        </div>
    )
}
