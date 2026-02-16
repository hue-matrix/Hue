"use client"

import { useEffect } from "react" // useState is no longer needed if isHovering is removed and no other state is used
import { motion, useMotionValue, useSpring } from "framer-motion"

export const CustomCursor = () => {
    // Mouse position
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring physics for cursor movement
    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const arrowX = useSpring(mouseX, smoothOptions)
    const arrowY = useSpring(mouseY, smoothOptions)

    useEffect(() => {
        const manageMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener("mousemove", manageMouseMove)

        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
            style={{
                x: arrowX,
                y: arrowY,
                translateX: "-50%",
                translateY: "-50%"
            }}
        >
            <div className="w-5 h-5 bg-white rounded-full mix-blend-difference" />
        </motion.div>
    )
}
