"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useRef, useState, MouseEvent } from "react"
import Image from "next/image"

const services = [
    {
        title: "Residential Interiors",
        items: ["Modular kitchen", "Wardrobes", "Study units", "TV consoles", "Crockery units", "Pooja units", "Walk-in closets"],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", // Modern Kitchen/Living
    },
    {
        title: "Commercial Interiors",
        items: ["Modular kitchen", "Workstations", "Seating solutions", "Office storage"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // Modern Office
    },
    {
        title: "Custom & Furniture",
        items: ["Arm chairs", "Sofas", "Dining", "Beds", "Bathroom vanities", "Furnishing", "Complete home furniture"],
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop", // Modern Sofa
    },
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-start text-left space-y-6 mb-20 md:mb-24 relative">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Products
                    </div>
                    <div className="relative w-full max-w-5xl">
                        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-tight relative z-10">
                            Designed for Living & Working
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-black/60 font-sans max-w-2xl leading-relaxed">
                        Tailored solutions for every space, from essentials to complete custom builds.
                    </p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    )
}

function ServiceCard({ service, index }: { service: { title: string, items: string[], image: string }, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const { left, top, width, height } = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) * 0.1 // Low strength for subtle magnetic effect
        const y = (e.clientY - top - height / 2) * 0.1
        setPosition({ x, y })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            className="group bg-[#f7f2ea] rounded-[40px] p-3 shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full cursor-pointer"
            data-cursor="hover"
        >
            {/* Top Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-gray-100 mb-6">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="px-5 pb-8 flex-grow flex flex-col">
                <h3 className="text-3xl font-sans font-bold mb-4 tracking-tight">{service.title}</h3>

                <ul className="space-y-2 mb-8 flex-grow">
                    {service.items.map((item, i) => (
                        <li key={i} className="text-lg text-black/60 font-sans flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Alignment spacer */}
                <div className="mt-auto pt-4 flex justify-end">
                    {/* Arrow Interaction */}
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight size={24} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
