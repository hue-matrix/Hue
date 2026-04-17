"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { MapPin, Ruler, Palette, MessageCircle, Box, CheckCircle2, Layers, FileOutput } from "lucide-react"
import { useRef, useState } from "react"

const steps = [
    {
        icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />,
        title: "Site Visit & Client Brief",
        description: "We begin by understanding your space, lifestyle, and how you want the home to feel."
    },
    {
        icon: <Ruler className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />,
        title: "2D Space Planning",
        description: "Layouts are planned to ensure comfort, balance, and smooth movement within the space."
    },
    {
        icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />,
        title: "Concept & moodboard development",
        description: "A visual direction is created to reflect the mood, colours, and materials that resonate with you."
    },
    {
        icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />,
        title: "Design discussions & refinements",
        description: "We refine the design through discussions to ensure it aligns perfectly with your vision."
    },
    {
        icon: <Box className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />,
        title: "3D Visualisation",
        description: "Realistic views help you experience the space before execution begins."
    },
    {
        icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />,
        title: "Design Freeze",
        description: "Once approved, the design is finalised to move confidently into execution."
    },
    {
        icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />,
        title: "Material & finish finalisation",
        description: "Materials and finishes are selected to enhance warmth, harmony, and everyday living."
    },
    {
        icon: <FileOutput className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />,
        title: "Execution & production drawings",
        description: "Detailed drawings are prepared to ensure accurate and seamless on-site execution."
    }
]

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // We have 8 steps with 300px height. 
    // Container translates -(7/8) * 100% = -87.5% perfectly mapping to exactly the 8th card.
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-87.5%"])

    return (
        <section className="bg-[#efebe5] relative w-full lg:py-0 text-[#1a1a1a]">
            {/* We apply max-w globally but clear out mobile top-spacing safely */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-full">

                {/* ─── DESKTOP (Sticky + Scrub) ─── */}
                <div ref={containerRef} className="hidden lg:flex items-start gap-12 relative w-full h-[200vh]">
                    <div className="sticky top-0 h-screen w-full flex items-center gap-12">

                        {/* LEFT: Heading */}
                        <div className="w-[45%] flex flex-col justify-center items-start h-[100vh]">
                            <div className="bg-[#e6e2dc] px-6 py-2 rounded-full text-sm font-medium tracking-wide text-black/80 border border-black/5 mb-8">
                                Process
                            </div>

                            <h2 className="text-5xl xl:text-[56px] font-sans font-bold tracking-tighter text-[#1a1a1a] leading-[1.1] max-w-lg">
                               An Experience Built Around <span className="font-serif italic font-normal text-black/70"> You.</span> 
                            </h2>
                        </div>

                        {/* RIGHT: Scrollable Steps instantly adjacent */}
                        <div className="w-[55%] h-[100vh] relative overflow-hidden flex items-center pr-4">
                            <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #efebe5 5%, transparent 20%, transparent 80%, #efebe5 95%)' }} />

                            <motion.div
                                style={{ y: yContent }}
                                className="flex flex-col absolute top-1/2 w-full mt-[-120px]"
                            >
                                <div className="w-full flex flex-col pr-4">
                                    {steps.map((step, index) => (
                                        <StepCard key={index} step={step} index={index} progress={scrollYProgress} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* ─── MOBILE / TABLET (Vertical Timeline Fallback) ─── */}
                <div className="lg:hidden">
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#e6e2dc] px-6 py-2 rounded-full text-sm font-medium tracking-wide text-black/80 border border-black/5">
                            Process
                        </div>
                    </div>
                    <div className="text-center mb-16 px-4">
                        <Reveal width="100%">
                            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-[#1a1a1a] leading-tight">
                                We Like To Keep Things <br /> <span className="font-serif italic font-normal text-black/70">Nice</span> And Simple.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="relative">
                        <div className="flex flex-col gap-6">
                            {steps.map((step, index) => (
                                <Reveal key={index} delay={index * 0.05} y={30}>
                                    <div className="relative px-4 flex flex-col gap-2">
                                        <div className="bg-[#f7f3ed] rounded-3xl p-6 md:p-8 flex flex-col gap-5 border border-black/5 hover:bg-[#ffffff] transition-colors duration-500 group shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                                            <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white shrink-0 group-hover:bg-[#2a2a2a] transition-colors">
                                                {step.icon}
                                            </div>
                                            <div>
                                                <div className="text-[11px] font-bold tracking-widest text-black/50 group-hover:text-black/70 mb-2 transition-colors">
                                                    Step 0{index + 1}
                                                </div>
                                                <h3 className="text-xl font-bold font-sans tracking-tight text-[#1a1a1a] mb-2">{step.title}</h3>
                                                <p className="text-[15px] text-[#1a1a1a]/70 group-hover:text-[#1a1a1a]/80 leading-relaxed transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

const StepCard = ({ step, index, progress }: { step: typeof steps[0], index: number, progress: MotionValue<number> }) => {
    // 8 steps total.
    // Center of step i is at i/7.
    const center = index / 7;
    const stepDist = 1 / 7;

    // Abstract the scroll value into a generic relative distance MotionValue.
    // This forces Framer Motion to use stable generic JS interpolation rather than buggy clamped WAAPI keyframes!
    const distance = useTransform(progress, (p) => p - center);

    const activeRange = [
        -2 * stepDist,
        -1 * stepDist,
        0,
        1 * stepDist,
        2 * stepDist
    ];

    const opacity = useTransform(distance, activeRange, [0, 0.4, 1, 0.4, 0]);
    const scale = useTransform(distance, activeRange, [0.85, 0.95, 1, 0.95, 0.85]);
    const backgroundColor = useTransform(distance, activeRange, ["#efebe5", "#efebe5", "#f7f3ed", "#efebe5", "#efebe5"]);
    const iconBgColor = useTransform(distance, activeRange, ["#d4d0ca", "#d4d0ca", "#1a1a1a", "#d4d0ca", "#d4d0ca"]);
    const iconTextColor = useTransform(distance, activeRange, ["#1a1a1a", "#1a1a1a", "#ffffff", "#1a1a1a", "#1a1a1a"]);

    return (
        <div className="w-full flex justify-center py-4" style={{ height: "240px" }}>
            <motion.div
                style={{ opacity, scale, backgroundColor }}
                className="flex items-start gap-6 p-8 lg:p-10 rounded-[2.5rem] relative overflow-hidden border border-black/5 w-full h-full shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
                <div className="shrink-0 pt-0.5">
                    <motion.div
                        style={{ backgroundColor: iconBgColor, color: iconTextColor }}
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                    >
                        {step.icon}
                    </motion.div>
                </div>
                
                <div className="flex flex-col gap-1.5 relative z-10 box-border">
                    <div className="text-[11px] font-bold tracking-widest text-black/50">
                        Step 0{index + 1}
                    </div>
                    <motion.h3 
                        className="text-[22px] font-bold font-sans tracking-tight"
                    >
                        {step.title}
                    </motion.h3>
                    <motion.p 
                        className="text-[15px] leading-relaxed mt-0.5 line-clamp-3 text-black/70"
                    >
                        {step.description}
                    </motion.p>
                </div>
            </motion.div>
        </div>
    )
}
