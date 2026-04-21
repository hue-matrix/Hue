"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion } from "framer-motion"
import Image from "next/image"

const pillars = [
    {
        title: "Honest Timelines, Delivered as Promised",
        description: "We believe timelines should be honest and achievable. Every project is planned carefully and delivered when it is promised, without unnecessary extensions.",
        icon: <Image src="/assets/icons/icon1.gif" alt="Timelines" width={80} height={80} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "Focused and Personalised Attention",
        description: "Every space receives focused attention. From design to execution, each project is handled with care, ensuring details are thoughtfully planned and well executed.",
        icon: <Image src="/assets/icons/icon2.gif" alt="Attention" width={80} height={80} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "Flexible, Modular Services",
        description: "You are free to choose only what you need. Whether it is design support, execution, or styling and décor for an existing space, we offer individual services as well as complete solutions.",
        icon: <Image src="/assets/icons/icon3.gif" alt="Services" width={80} height={80} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "Budget-Conscious Approach",
        description: "Good design should be accessible. We offer flexible and cost-effective options, ensuring quality and clarity even when working within a defined budget.",
        icon: <Image src="/assets/icons/icon4.gif" alt="Budget" width={80} height={80} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "Sustainability as a Core Value",
        description: "Environmental responsibility is woven into every decision, guiding both design choices and execution methods.",
        icon: <Image src="/assets/icons/icon5.gif" alt="Sustainability" width={80} height={80} className="mb-6 mix-blend-multiply" unoptimized />
    },
    {
        title: "NRI-Friendly Process",
        description: "If you cannot be present on site, we manage everything for you. Regular updates, clear communication, and remote coordination ensure peace of mind throughout.",
        icon: <Image src="/assets/icons/icon6.gif" alt="NRI Friendly" width={80} height={80} className="mb-6 mix-blend-multiply" unoptimized />
    }
]

export const WhyUs = () => {
    return (
        <section className="pt-24 pb-12 bg-[#efebe5] relative">

            {/* Top Badge */}
            <div className="flex justify-center mb-8">
            <div className="bg-[#e6e2dc] px-6 py-2 font-sans rounded-full font-medium tracking-wide text-[16px] text-[#918f8b]">
                    Why Us
                </div>
            </div>


            {/* Main Headline */}
            <div className="text-center mb-20 px-4">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-foreground">
                       What Makes Hue Matrix 
                        <span className="font-serif italic font-normal"> Different.</span>
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
                                className="flex flex-col items-center text-center p-8 md:p-10 rounded-[2.5rem] bg-[#efebe5] hover:bg-[#f7f2ea] transition-all duration-500 h-full min-h-[26rem] md:min-h-[28rem] border border-black/5 hover:border-black/10 hover:shadow-xl hover:shadow-black/5"
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
