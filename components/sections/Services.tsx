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
        title: "2BHK, 3BHK, 4BHK & Luxury Home Interiors",
        description: "We design homes that feel personal and easy to live in. Every layout is planned around daily routines, comfort, and flow, with careful attention to detail, materials, and long-term usability."
    },
    {
        image: "/assets/icons/service2.png",
        icon: <Palmtree className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "Villas & Holiday Homes",
        description: "Spaces designed to slow you down. We create relaxed, thoughtful interiors that balance comfort, openness, and detail while creating an environment that feels natural and easy to retreat into."
    },
    {
        image: "/assets/icons/service3.png",
        icon: <BedDouble className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "Resorts & Boutique Hotels",
        description: "We design interiors that feel warm, inviting, and comfortable. Attention to flow, atmosphere, and materials ensures spaces that are functional, durable, and effortless to experience for both guests and operators."
    },
    {
        image: "/assets/icons/service4.png",
        icon: <Key className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "Airbnb Setups",
        description: "We design interiors that are practical and welcoming. Every space is planned to look good, function smoothly, stay within a budget, and stand up to regular use, while still feeling warm and considered for every guest who walks in."
    },
    {
        image: "/assets/icons/service5.png",
        icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />,
        title: "Offices & Commercial Interiors",
        description: "Workspaces designed for clarity and comfort. We focus on layouts that support productivity, movement, and everyday use, while maintaining a clean, organised, and professional design language."
    }
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const [imageError, setImageError] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#f6f2eb] rounded-[32px] p-5 md:p-6 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative h-full border border-black/5"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            data-cursor="hover"
        >
            {/* Image Container */}
            <div className="relative w-[60%] aspect-square mb-4 rounded-3xl overflow-hidden flex items-center justify-center p-0 mx-auto">
                <motion.div
                    className="relative w-full h-full z-10"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    {!imageError ? (
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain"
                            onError={() => setImageError(true)}
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-foreground/20">
                            <div className="transform scale-[2.5]">{service.icon}</div>
                        </div>
                    )}
                </motion.div>
            </div>

            <div className="flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight text-foreground leading-tight">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#6b6b6b] leading-relaxed font-sans text-[15px]">
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
            <div className="flex justify-center mb-10">
                <div className="bg-[#e6e2dc] px-6 py-2 font-sans rounded-full font-medium tracking-wide text-[16px] text-[#918f8b]">
                    What We Do
                </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-10">
                 
            </h2>

            {/* Main Headline */}
            <div className="text-center mb-24 px-4">
                <Reveal width="100%">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-foreground leading-[1.1]">
                        Thoughtful <br className="md:hidden" /><span className="font-serif italic font-normal">Designs</span>  for Every Space .
                    </h2>
                </Reveal>
                <div className="text-center mt-10">
                    <p className="font-sans font-medium text-[18px] md:text-[20px] leading-[1.6] text-[#918f8b] max-w-2xl mx-auto">
                        Our services are designed to be flexible, allowing you to engage us for design, execution, décor, or complete end-to-end solutions.
                    </p>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="max-w-[1250px] px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
                    {services.map((service, index) => {
                        let wrapperClass = "flex justify-center w-full h-full md:col-span-1 lg:col-span-2";
                        
                        // Desktop 3-2 layout: 4th and 5th items span 3 cols. 
                        // They are pushed left/right to perfectly center together maintaining exact gaps.
                        if (index === 3) {
                            wrapperClass = "flex justify-center lg:justify-end w-full h-full md:col-span-1 lg:col-span-3";
                        }
                        if (index === 4) {
                            wrapperClass = "flex justify-center lg:justify-start w-full h-full md:col-span-2 lg:col-span-3";
                        }

                        return (
                            <div key={index} className={wrapperClass}>
                                <div className="w-full max-w-[380px] h-full">
                                    <ServiceCard
                                        service={service}
                                        index={index}
                                    />
                                </div>
                            </div>
                        );
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
