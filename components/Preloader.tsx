"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black pointer-events-none"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 360 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                        className="text-white"
                    >
                        {/* Custom 8-Spoke Asterisk (Geometric, matching image) */}
                        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-32 md:h-32">
                            <rect x="42" y="10" width="16" height="80" rx="4" />
                            <rect x="42" y="10" width="16" height="80" rx="4" transform="rotate(45 50 50)" />
                            <rect x="42" y="10" width="16" height="80" rx="4" transform="rotate(90 50 50)" />
                            <rect x="42" y="10" width="16" height="80" rx="4" transform="rotate(135 50 50)" />
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
