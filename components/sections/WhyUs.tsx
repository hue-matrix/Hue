"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion } from "framer-motion"
import Image from "next/image"

const pillars = [
    {
        title: "Honest Timelines",
        description: "Delivered as promised. We believe timelines should be honest and achievable without unnecessary extensions.",
        icon: <Image src="/assets/icons/icon1.gif" alt="Timelines" width={64} height={64} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "Personalised Attention",
        description: "Focused attention on every space. Each project is handled with care from design to execution.",
        icon: <Image src="/assets/icons/icon2.gif" alt="Attention" width={64} height={64} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "Modular Services",
        description: "Flexible options where you choose only what you need, from styling to complete solutions.",
        icon: <Image src="/assets/icons/icon3.gif" alt="Services" width={64} height={64} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "Budget-Conscious",
        description: "Good design is accessible. We offer cost-effective options with quality and clarity.",
        icon: <Image src="/assets/icons/icon4.gif" alt="Budget" width={64} height={64} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "Sustainability",
        description: "Environmental responsibility is a core value woven into every design and execution choice.",
        icon: <Image src="/assets/icons/icon5.gif" alt="Sustainability" width={64} height={64} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "NRI-Friendly",
        description: "Remote management for those not on-site, ensuring peace of mind through regular updates and clear communication.",
        icon: <Image src="/assets/icons/icon6.gif" alt="NRI Friendly" width={64} height={64} className="mb-6 mix-blend-multiply" unoptimized />
    }
]

export const WhyUs = () => {
    return (
        <section className="pt-24 pb-12 bg-[#efebe5] relative">

            {/* Top Badge */}
            <div className="flex justify-center mb-8">
                <div className="bg-[#e6e2dc] px-6 py-2 rounded-full text-sm font-medium tracking-wide text-black/80 border border-black/5">
                    Why Us
                </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-20 px-4">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-foreground">
                        Why Choose Hue Matrix Over <br className="hidden md:block" />
                        <span className="font-serif italic font-normal">Everyone Else?</span>
                    </h2>
                </Reveal>
            </div>

            {/* Grid */}
            <div className="w-full px-4 md:px-6 mx-auto relative z-10">
                {/* Floating Black Circle (Right Edge) */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden 2xl:block">
                    <div className="w-3 h-3 bg-black rounded-full opacity-20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
                    {pillars.map((pillar, index) => (
                        <Reveal width="100%" delay={index * 0.1} key={index}>
                            <motion.div
                                className="flex flex-col items-center text-center p-8 md:p-10 rounded-[2.5rem] bg-[#efebe5] hover:bg-[#f7f2ea] transition-all duration-500 h-full border border-black/5 hover:border-black/10 hover:shadow-xl hover:shadow-black/5"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                data-cursor="hover"
                            >
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                    }}
                                >
                                    {pillar.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold font-sans text-foreground mb-4">{pillar.title}</h3>
                                <p className="text-[#7d7b77] leading-relaxed font-sans text-lg font-light">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
