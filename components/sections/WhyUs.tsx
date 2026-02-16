"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { X, Check, Equal } from "lucide-react"
import { useRef } from "react"

// Tilt Card Component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXFromCenter = e.clientX - rect.left - width / 2
        const mouseYFromCenter = e.clientY - rect.top - height / 2
        x.set(mouseXFromCenter / width)
        y.set(mouseYFromCenter / height)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            <div style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    )
}

export const WhyUs = () => {
    const others = [
        "Generic designs",
        "Unreliable timelines",
        "Hidden costs",
        "Lack of personal care",
        "Trend-focused only"
    ]

    const hueMatrix = [
        "Honest Timelines, Delivered as Promised",
        "Focused and Personalised Attention",
        "Flexible, Modular Services",
        "Budget-Conscious Approach",
        "Sustainability as a Core Value",
        "NRI-Friendly Process"
    ]

    return (
        <section className="py-24 bg-[#efebe5] relative overflow-hidden">

            {/* Top Badge */}
            <div className="flex justify-center mb-8">
                <div className="bg-[#E5E4DE] px-6 py-2 rounded-full text-sm font-medium tracking-wide text-black/80">
                    Why Us
                </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-20 px-4 flex justify-center items-center gap-6 relative">

                <Reveal width="100%">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-foreground">
                        Why choose Hue Matrix over <span className="font-serif italic font-normal">everyone else?</span>
                    </h2>
                </Reveal>
            </div>

            {/* Comparison Cards */}
            <div className="container px-4 md:px-6 mx-auto relative">

                {/* Floating Equal Icon (Right Edge) */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden 2xl:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-black border border-black/5">
                    <Equal className="w-6 h-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">

                    {/* Left Card: Others */}
                    <Reveal width="100%" delay={0.1} className="h-full">
                        <TiltCard className="bg-[#f7f2ea] border border-black/5 rounded-[2.5rem] p-8 md:p-12 h-full flex flex-col gap-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-2xl font-bold font-sans text-foreground/40 text-center md:text-left mb-8">
                                Other Companies
                            </h3>
                            <ul className="flex flex-col gap-6">
                                {others.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-foreground/60">
                                        <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                            <X className="w-4 h-4 text-black/40" />
                                        </div>
                                        <span className="font-sans text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </TiltCard>
                    </Reveal>

                    {/* Right Card: Hue Matrix */}
                    <Reveal width="100%" delay={0.2} className="h-full">
                        <TiltCard className="bg-[#f7f2ea] rounded-[2.5rem] p-8 md:p-12 h-full flex flex-col gap-8 shadow-xl shadow-black/5 ring-1 ring-black/5 group hover:shadow-2xl hover:shadow-[#f7f2ea]/50 transition-all duration-500 relative overflow-hidden">
                            {/* Detailed Hover Glow - subtle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f7f2ea]/0 to-[#f7f2ea]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <h3 className="text-3xl font-bold font-sans text-foreground text-center md:text-left mb-8" data-cursor="hover">
                                Hue Matrix
                            </h3>
                            <ul className="flex flex-col gap-6">
                                {hueMatrix.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-foreground">
                                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="font-sans text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </TiltCard>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
