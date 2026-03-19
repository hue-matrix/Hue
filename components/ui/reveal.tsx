"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface Props {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    height?: "fit-content" | "100%" | string
    delay?: number
    className?: string
    y?: number
}

export const Reveal = ({ children, width = "fit-content", height = "fit-content", delay = 0.25, className, y = 75 }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} style={{ position: "relative", width, height, overflow: "visible" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
                className="h-full"
            >
                {children}
            </motion.div>
        </div>
    )
}
