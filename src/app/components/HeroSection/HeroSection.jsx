'use client'
import React from 'react'
import { WavyBackground } from './WavyBackground'

const HeroSection = () => {
    return (
        <WavyBackground
            className="flex items-center justify-center text-center"
            containerClassName="relative h-screen"
            colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']}
            waveWidth={50}
            backgroundFill="#111827"
            blur={10}
            speed="fast"
            waveOpacity={0.5}>
            <div className="hero-content max-w-xl relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Welcome to Our Medical Clinic
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    Your health, our priority.
                </p>
                <div className="relative inline-block group">
                    <button className="request-button px-8 py-3 bg-green-700 text-white rounded-md text-lg md:text-xl font-medium hover:bg-green-800 transition-colors duration-300">
                        Request Medical Form
                    </button>
                    <div className="tooltip absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 bg-gray-800 text-white text-sm py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
                        Click to request your medical form
                    </div>
                </div>
            </div>
        </WavyBackground>
    )
}

export default HeroSection
