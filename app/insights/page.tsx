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

            <div className="pt-32 pb-20 w-full max-w-[1100px] mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-start text-left space-y-6 mb-12">
                    <div className="bg-[#f7f2ea] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Insights
                    </div>
                    <div className="relative w-full">
                        <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full mb-6">
                            Latest insights
                        </h1>
                    </div>
                    <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-2xl">
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
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
            viewport={{ once: true, margin: "-10%" }}
            className="group relative cursor-pointer bg-[#f7f2ea] rounded-[32px] overflow-hidden flex flex-col h-full"
            data-cursor="hover" // For custom cursor scaling
        >
            <div className="flex flex-col flex-grow">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
                    <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow relative">
                    <div className="space-y-3">
                        <h3 className="text-[20px] font-sans font-medium leading-[30px] text-black">
                            {insight.title}
                        </h3>
                        <p className="text-[16px] text-black/50 font-medium leading-[24px]">
                            {insight.excerpt}
                        </p>
                    </div>

                    {/* Arrow Indicator at bottom right */}
                    <div className="absolute bottom-6 right-6 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight strokeWidth={2} size={20} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
