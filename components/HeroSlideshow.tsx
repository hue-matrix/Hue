"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const slides = [
    {
        id: 1,
        // Replaced broken image with a working Unsplash ID for minimalist interior
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
        alt: "Minimalist Interior 1"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
        alt: "Minimalist Interior 2"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
        alt: "Minimalist Interior 3"
    }
]

export const HeroSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const duration = 5000

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, duration)

        const progressTimer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 0
                return prev + (100 / (duration / 50))
            })
        }, 50)

        return () => {
            clearInterval(timer)
            clearInterval(progressTimer)
        }
    }, [currentIndex])

    useEffect(() => {
        setProgress(0)
    }, [currentIndex])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        // Adjusted height/width for story-like aspect ratio (approx 9:16) with a card-like border
        <div className="relative w-full max-w-[340px] md:max-w-[400px] h-[580px] md:h-[680px] bg-white p-2 rounded-[2.5rem] overflow-hidden group shadow-2xl mx-auto lg:ml-auto lg:mr-0 flex items-center justify-center">
            {/* Inner rounded wrapper for the actual image/video content */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                {/* Progress Bars */}
                <div className="absolute top-6 left-6 right-6 z-20 flex gap-2">
                    {slides.map((slide, index) => (
                        <div key={slide.id} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white font-medium"
                                initial={{ width: "0%" }}
                                animate={{
                                    width: index === currentIndex ? `${progress}%` : index < currentIndex ? "100%" : "0%"
                                }}
                                transition={{ ease: "linear", duration: index === currentIndex ? 0.05 : 0.3 }}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <button
                    onClick={(e) => { e.preventDefault(); prevSlide(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                    data-cursor="hover"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={(e) => { e.preventDefault(); nextSlide(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                    data-cursor="hover"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Slides */}
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-black/10 z-10" />
                        <img
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].alt}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute top-10 left-6 z-20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md overflow-hidden border border-white/30">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white text-sm font-medium drop-shadow-md">hue_interiors</span>
                    <span className="text-white/60 text-sm drop-shadow-md">2h</span>
                </div>
            </div>
        </div>
    )
}
