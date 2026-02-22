"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion } from "framer-motion"
import Image from "next/image"
import { Home, Palmtree, BedDouble, Key, Building2 } from "lucide-react"
import { useState } from "react"

const services = [
    {
        image: "/assets/icons/service1.png",
        icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "2BHK, 3BHK, 4BHK & luxury home interiors",
        description: "We design homes that feel personal and easy to live in. Every layout is planned around daily routines, comfort, and flow, with careful attention to detail, materials, and long-term usability."
    },
    {
        image: "/assets/icons/service2.png",
        icon: <Palmtree className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "Villas and holiday homes",
        description: "Spaces designed to slow you down. We create relaxed, thoughtful interiors that balance comfort, openness, and detail while creating an environment that feels natural and easy to retreat into."
    },
    {
        image: "/assets/icons/service3.png",
        icon: <BedDouble className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "Resorts & boutique hotels",
        description: "We design interiors that feel warm, inviting, and comfortable. Attention to flow, atmosphere, and materials ensures spaces that are functional, durable, and effortless to experience for both guests and operators."
    },
    {
        image: "/assets/icons/service4.png",
        icon: <Key className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "Airbnb setups",
        description: "We design interiors that are practical and welcoming. Every space is planned to look good, function smoothly, stay within a budget, and stand up to regular use, while still feeling warm and considered for every guest who walks in."
    },
    {
        image: "/assets/icons/service5.png",
        icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "Offices & commercial interiors",
        description: "Workspaces designed for clarity and comfort. We focus on layouts that support productivity, movement, and everyday use, while maintaining a clean, organised, and professional design language."
    }
]

const ServiceCard = ({ service, index, colSpanClass }: { service: typeof services[0], index: number, colSpanClass: string }) => {
    const [imageError, setImageError] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-[#f7f2ea] rounded-[40px] px-8 pb-12 pt-0 md:px-12 md:pb-12 md:pt-0 flex flex-col items-center text-center gap-0 group hover:shadow-xl transition-all duration-500 cursor-pointer overflow-visible relative ${colSpanClass}`}
            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 30 } }}
            data-cursor="hover"
        >
            {/* Icon */}
            <motion.div
                className="relative w-64 h-64 z-10 bg-transparent"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {!imageError ? (
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain"
                        onError={() => setImageError(true)}
                        sizes="(max-width: 768px) 192px, 256px"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground/20">
                        <div className="transform scale-[3.0]">{service.icon}</div>
                    </div>
                )}
            </motion.div>

            <div className="mt-4 md:mt-12">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-foreground mb-4">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 leading-relaxed font-sans text-lg">
                    {service.description}
                </p>
            </div>
        </motion.div>
    )
}

export const Services = () => {
    return (
        <section className="py-24 bg-[#efebe5] relative" id="services"> {/* Global BG color */}

            {/* Top Badge */}
            <div className="flex justify-center mb-8">
                <div className="bg-[#E5E4DE] px-6 py-2 rounded-full text-sm font-medium tracking-wide text-black/80">
                    What we do
                </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-20 px-4">
                <Reveal width="100%">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-foreground">
                        How we can <br className="md:hidden" /> help you <span className="font-serif italic font-normal">grow.</span>
                    </h2>
                </Reveal>
                <div className="text-center mt-8">
                    <p className="font-sans font-medium text-[18px] leading-[36px] text-[#918f8b] max-w-2xl mx-auto">
                        Our services are designed to be flexible, allowing you to engage us for design, execution, décor, or complete end-to-end solutions.
                    </p>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="w-full px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
                    {services.map((service, index) => {
                        // Desktop Layout Logic:
                        // Row 1 (Items 0, 1, 2): 3 columns -> col-span-2 (2/6 = 1/3)
                        // Row 2 (Items 3, 4): 2 columns -> col-span-3 (3/6 = 1/2)
                        const isRow2 = index >= 3;
                        const colSpanClass = isRow2 ? "lg:col-span-3" : "lg:col-span-2";

                        return (
                            <ServiceCard
                                key={index}
                                service={service}
                                index={index}
                                colSpanClass={colSpanClass}
                            />
                        )
                    })}
                </div>
            </div>

            {/* Floating Black Circle (Right Edge) */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden 2xl:block">
                <div className="w-3 h-3 bg-black rounded-full opacity-20" />
            </div>

        </section>
    )
}
