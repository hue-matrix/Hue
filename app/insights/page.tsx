"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useRef, useState, MouseEvent } from "react"
import Image from "next/image"

const insights = [
    {
        title: "Finishes",
        excerpt: "Exploring textures and surfaces that define a room's character.",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop",
        color: "#d4cdc4"
    },
    {
        title: "Hardware",
        excerpt: "The subtle details that elevate functional design.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
        color: "#c8c2b9"
    },
    {
        title: "Material",
        excerpt: "A guide to choosing sustainable and honest materials for longevity.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        color: "#e2ded8"
    },
    {
        title: "Space Planning",
        excerpt: "Sustainability & why it is important; Designing energy-based spaces.",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop",
        color: "#d9d4cc"
    },
    {
        title: "Vaastu",
        excerpt: "Integrating traditional wisdom into modern, balanced layouts.",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
        color: "#cdc7be"
    },
    {
        title: "Themes",
        excerpt: "Finding the visual language that resonates with your lifestyle.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        color: "#ded9d3"
    }
]

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-start text-left space-y-6 mb-20 md:mb-32">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Insights
                    </div>
                    <div className="relative">
                        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-tight relative z-10">
                            Latest insights
                        </h1>
                        
                    </div>
                    <p className="text-xl md:text-2xl text-black/60 font-sans max-w-2xl leading-relaxed">
                        Actionable tips, design trends, and expert perspectives to help you create a space that feels personal and well-considered.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {insights.map((insight, index) => (
                        <InsightCard key={index} insight={insight} index={index} />
                    ))}
                </div>

            </div>

            <Footer />
        </main>
    )
}

function InsightCard({ insight, index }: { insight: { title: string, excerpt: string, color: string, image: string }, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const { left, top, width, height } = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) * 0.1 // Magnetic strength
        const y = (e.clientY - top - height / 2) * 0.1
        setPosition({ x, y })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
            viewport={{ once: true, margin: "-10%" }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group relative cursor-pointer"
            data-cursor="hover" // For custom cursor scaling
        >
            <div className="flex flex-col gap-6">
                {/* Image Container */}
                <div
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] md:rounded-[40px] bg-gray-200"
                >
                    <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Arrow Indicator */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center z-10">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                    <h3 className="text-3xl font-sans font-bold leading-tight group-hover:underline decoration-1 underline-offset-4 transition-all">
                        {insight.title}
                    </h3>
                    <p className="text-lg text-black/60 leading-relaxed line-clamp-2">
                        {insight.excerpt}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
