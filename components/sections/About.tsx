"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export const About = () => {
    return (
        <section className="max-w-[1100px] mx-auto py-24 bg-[#efebe5] relative overflow-hidden">

            <div className="container px-4 md:px-6 mx-auto mb-12">
                <div className="flex flex-col items-start text-left space-y-6">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        About Us
                    </div>
                    <div className="relative">
                        <Reveal width="100%">
                            <h2 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full">
                                Who We Are
                            </h2>
                        </Reveal>
                    </div>

                </div>
            </div>

            {/* Two-Column Content & Image */}
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
                    
                    {/* Left Column: Story, Mission & Quote */}
                    <div className="flex flex-col h-full justify-between gap-12">
                        <div className="flex flex-col gap-8 text-lg font-sans leading-relaxed text-foreground/80">
                            <Reveal>
                                <p>
                                    Hue Matrix was born from a childhood love for beautiful spaces. As a little girl, Gauri was always drawn to design, colours, and the small details that make a place feel special.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p>
                                    That same care and attention can still be seen today in the way she designs, with patience, warmth, and a deep respect for every detail. At its heart, Hue Matrix is guided by a simple philosophy. Design should feel thoughtful, functional, and natural to live in.
                                </p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p>
                                    Hue Matrix was created to change the industry gap regarding timelines and responsible building. The studio stands for clear timelines, quality craftsmanship, and transparent execution.
                                </p>
                            </Reveal>
                        </div>

                        {/* Moved Quote */}
                        <div className="relative pt-6">
                            <Reveal delay={0.2}>
                                <blockquote className="relative" data-cursor="hover">
                                    <p className="text-2xl md:text-3xl font-serif italic leading-tight text-foreground mb-6">
                                        The space you live in should feel like it belongs to you, and bring you a sense of peace.
                                    </p>
                                    <footer className="text-sm font-bold font-sans tracking-wide uppercase text-black/40">
                                        — Gauri Badoni, Founder, Hue Matrix
                                    </footer>
                                </blockquote>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Column: High-Quality Portrait */}
                    <div className="relative h-full min-h-[400px]">
                        <Reveal delay={0.3} width="100%" height="100%">
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl">
                                <Image
                                    src="/assets/about/founder.png"
                                    alt="Gauri Badoni, Founder of Hue Matrix"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Soft overlay for premium feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>

        </section>
    )
}
