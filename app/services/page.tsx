"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Magnetic } from "@/components/ui/Magnetic"
import {
    ChefHat, Shirt, BookOpen, Tv, Bath, Wine, Flame, DoorOpen,
    Briefcase, Armchair, Archive, Sofa, Utensils, Bed, Layers, Home, Coffee
} from "lucide-react"

const categories = [
    {
        title: "Residential Interiors",
        items: [
            { label: "Modular kitchen", icon: ChefHat },
            { label: "Wardrobes", icon: Shirt },
            { label: "Study units", icon: BookOpen },
            { label: "TV consoles", icon: Tv },
            { label: "Vanities", icon: Bath },
            { label: "Crockery units", icon: Coffee },
            { label: "Pooja units", icon: Flame },
            { label: "Walk-in closets", icon: DoorOpen },
        ]
    },
    {
        title: "Commercial Interiors",
        items: [
            { label: "Workstations", icon: Briefcase },
            { label: "Seating solutions", icon: Armchair },
            { label: "Office storage", icon: Archive },
        ]
    },
    {
        title: "Custom & Furniture",
        items: [
            { label: "Arm chairs", icon: Armchair },
            { label: "Sofas", icon: Sofa },
            { label: "Dining", icon: Utensils },
            { label: "Beds", icon: Bed },
            { label: "Bar units", icon: Wine },
            { label: "Bathroom vanities", icon: Bath },
            { label: "Furnishing", icon: Layers },
            { label: "Complete home furniture", icon: Home },
        ]
    }
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 w-full max-w-[1100px] mx-auto px-4 md:px-6 relative">

                {/* Header */}
                <div className="flex flex-col items-start text-left space-y-6 mb-12 relative z-10 max-w-4xl">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Our Services
                    </div>
                    <div className="relative w-full">
                        <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full mb-6">
                            Interior Design Solutions Under One Roof
                        </h1>
                    </div>
                    <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-2xl">
                        From ideation to execution, we offer functional design solutions for your space, from essentials to complete custom builds.
                    </p>
                </div>

                {/* Vertical Category Sections */}
                <div className="space-y-24 pb-16">
                    {categories.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-10">
                            {/* Category Title with Line */}
                            <div className="flex items-center gap-6">
                                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight shrink-0">
                                    {category.title}
                                </h2>
                                <div className="h-[1px] bg-black/10 flex-grow" />
                            </div>

                            {/* Responsive Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                {category.items.map((item, index) => (
                                    <ServiceIconCard key={index} item={item} index={index} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </main>
    )
}

function ServiceIconCard({ item, index }: { item: any; index: number }) {
    const Icon = item.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 30 } }}
            className="bg-[#f7f2ea] rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-5 text-center group cursor-pointer transition-colors duration-500 h-full aspect-square"
            data-cursor="hover"
        >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                <Icon strokeWidth={1.5} size={26} />
            </div>
            <span className="text-sm md:text-base font-sans font-medium leading-snug">
                {item.label}
            </span>
        </motion.div>
    )
}
