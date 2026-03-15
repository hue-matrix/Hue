"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useRef, useState, MouseEvent } from "react"
import Image from "next/image"
import { CTA } from "@/components/sections/CTA"

const insights = [
    {
        title: "Finishes",
        excerpt: "Exploring textures and surfaces that define a room's character.",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop",
        color: "#d4cdc4"
    },
    {
        title: "Hardware",
        excerpt: "The subtle details that elevate functional design and bring spaces to life.",
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

            <div className="pt-32 pb-20 w-full max-w-[1100px] mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-start text-left space-y-6 mb-12">
                    <div className="bg-[#f7f2ea] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Insights
                    </div>
                    <div className="relative w-full">
                        <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full mb-6">
                            Latest Insights
                        </h1>
                    </div>
                    <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-2xl">
                        Actionable tips, design trends, and expert perspectives to help you create a space that feels personal and well-considered.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                    {insights.map((insight, index) => (
                        <InsightCard key={index} insight={insight} index={index} />
                    ))}
                </div>

            </div>

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
                <CTA />
            </div>
            <Footer />
        </main>
    )
}

function InsightCard({ insight, index }: { insight: { title: string, excerpt: string, color: string, image: string }, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
            viewport={{ once: true, margin: "-10%" }}
            className="group flex flex-col gap-6 w-full h-full"
            data-cursor="hover"
        >
            {/* Image Card: Taller aspect ratio as requested */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] shrink-0 border border-black/5">
                <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            {/* Content Card: Uniform height irrespective of content */}
            <div className="bg-[#f7f2ea] rounded-[1.25rem] p-4 flex flex-col relative border border-black/5 w-full min-h-[100px]">
                <div className="space-y-2">
                    <h3 className="text-[20px] leading-[30px] font-sans font-medium text-black max-w-[90%]">
                        {insight.title}
                    </h3>
                    <p className="text-[16px] leading-[24px] font-sans font-medium text-black/48 max-w-[85%] line-clamp-2">
                        {insight.excerpt}
                    </p>
                </div>

                {/* Micro-interaction Button: Positioned precisely */}
                <div className="absolute right-6 md:right-8 bottom-6 md:bottom-8 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                    <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: -45 }}
                        className="flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
