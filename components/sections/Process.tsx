"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { MapPin, Ruler, Palette, MessageCircle, Box, CheckCircle2, Layers, FileOutput } from "lucide-react"
import { useRef } from "react"
import { Magnetic } from "@/components/ui/Magnetic"

const steps = [
    {
        icon: <MapPin className="w-6 h-6 text-black" strokeWidth={1.5} />,
        title: "Site visit & client brief",
        description: "We begin by understanding your space, lifestyle, and how you want the home to feel."
    },
    {
        icon: <Ruler className="w-6 h-6 text-black" strokeWidth={1.5} />,
        title: "2D space planning",
        description: "Layouts are planned to ensure comfort, balance, and smooth movement within the space."
    },
    {
        icon: <Palette className="w-6 h-6 text-black" strokeWidth={1.5} />,
        title: "Concept & moodboard",
        description: "A visual direction is created to reflect the mood, colours, and materials that resonate with you."
    },
    {
        icon: <MessageCircle className="w-6 h-6 text-black" strokeWidth={1.5} />,
        title: "Design discussions",
        description: "We refine the design through discussions to ensure it aligns perfectly with your vision."
    },
    {
        icon: <Box className="w-6 h-6 text-black" strokeWidth={1.5} />,
        title: "3D visualisation",
        description: "Realistic views help you experience the space before execution begins."
    },
    {
        icon: <CheckCircle2 className="w-6 h-6 text-black" strokeWidth={1.5} />,
        title: "Design freeze",
        description: "Once approved, the design is finalised to move confidently into execution."
    },
    {
        icon: <Layers className="w-6 h-6 text-black" strokeWidth={1.5} />,
        title: "Material finalisation",
        description: "Materials and finishes are selected to enhance warmth, harmony, and everyday living."
    },
    {
        icon: <FileOutput className="w-6 h-6 text-black" strokeWidth={1.5} />,
        title: "Execution drawings",
        description: "Detailed drawings are prepared to ensure accurate and seamless on-site execution."
    }
]

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "center center"]
    })

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section ref={containerRef} className="py-24 bg-[#efebe5] relative">

            {/* Top Badge */}
            <div className="flex justify-center mb-8">
                <div className="bg-[#E5E4DE] px-6 py-2 rounded-full text-sm font-medium tracking-wide text-black/80">
                    How it works
                </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-20 px-4">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-foreground">
                        We like to keep things <span className="font-serif italic font-normal">nice</span> and simple.
                    </h2>
                </Reveal>
            </div>

            {/* Desktop Snake Layout Container (Hidden on Mobile/Tablet) */}
            <div className="hidden lg:block w-full mx-auto px-4 md:px-6 relative min-h-[600px]">

                {/* SVG Path Layer */}
                <div className="absolute inset-0 pointer-events-none z-0 top-[2.5rem]">
                    <svg className="w-full h-full visible" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
                        <motion.path
                            d="M 150 0 L 1050 0 C 1150 0 1150 250 1050 250 L 150 250"
                            stroke="#c8c8c8"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            style={{ pathLength }}
                            strokeLinecap="round"
                        />
                        {/* Glow Gradient Definitions if needed, but simple grey requested */}
                    </svg>
                </div>

                {/* Steps */}
                {/* Row 1: Left to Right */}
                <div className="grid grid-cols-4 gap-4 mb-32 relative z-10 px-12">
                    {steps.slice(0, 4).map((step, index) => (
                        <ProcessCard key={index} step={step} index={index} />
                    ))}
                </div>

                {/* Row 2: Right to Left (Reversed in DOM or Visually?) 
                    Actually, for the snake path (1->2->3->4 \n 8<-7<-6<-5), 
                    Row 2 logic should place them correctly.
                    Grid cols are 1,2,3,4.
                    Index 4 is Step 5 (First in row 2). It should be on FAR RIGHT (Col 4).
                    Index 7 is Step 8. It should be on FAR LEFT (Col 1).
                    So we render Row 2 in REVERSE order: 7, 6, 5, 4? No.
                    Steps array: [4, 5, 6, 7].
                    We want:
                    Col 4: Step 5 (Index 4)
                    Col 3: Step 6 (Index 5)
                    Col 2: Step 7 (Index 6)
                    Col 1: Step 8 (Index 7)
                    
                    So we can map steps.slice(4, 8).reverse()!
                */}
                <div className="grid grid-cols-4 gap-4 relative z-10 px-12 dir-rtl">
                    {steps.slice(4, 8).reverse().map((step, index) => (
                        /* Real index is 4 + (3 - index) because we reversed a slice of 4 */
                        <ProcessCard key={index} step={step} index={4 + (3 - index)} /> // Fix index calculation for delay
                    ))}
                </div>
            </div>

            {/* Mobile/Tablet Vertical Layout (Visible on smaller screens) */}
            <div className="block lg:hidden w-full px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Vertical Line Removed */}

                    {steps.map((step, index) => (
                        <Reveal key={index} delay={index * 0.05}>
                            <div className="relative pl-12 md:pl-0 flex flex-col items-start md:items-center text-left md:text-center gap-4">
                                {/* Mobile Line Segment */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-[23px] top-[13px] bottom-[-40px] w-0.5 bg-black/5 md:hidden" />
                                )}

                                {/* Mobile Dot */}
                                <span className="absolute left-[19px] top-2 w-[9px] h-[9px] rounded-full bg-black md:hidden ring-4 ring-[#efebe5] z-10"></span>

                                <div className="w-16 h-16 bg-[#f7f2ea] rounded-xl flex items-center justify-center">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-sans mb-1">{step.title}</h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

        </section>
    )
}

const ProcessCard = ({ step, index }: { step: any, index: number }) => {
    return (
        <div className="flex flex-col items-center text-center gap-6 group">
            <div
                className="w-20 h-20 bg-[#f7f2ea] rounded-2xl flex items-center justify-center shadow-sm relative z-10 cursor-pointer group-hover:scale-110 transition-transform duration-300"
            >
                {step.icon}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3"
            >
                <h3 className="text-lg font-bold font-sans tracking-tight text-foreground">
                    {step.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-sans max-w-[220px] mx-auto">
                    {step.description}
                </p>
            </motion.div>
        </div>
    )
}
