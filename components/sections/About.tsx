"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export const About = () => {
    return (
        <section className="py-24 bg-[#efebe5] relative overflow-hidden">

            <div className="container px-4 md:px-6 mx-auto mb-10">
                <div className="flex flex-col items-start text-left space-y-6">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        About us
                    </div>
                    <div className="relative">
                        <Reveal width="100%">
                            <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-tight relative z-10">
                                Who we are
                            </h2>
                        </Reveal>
                    </div>
                    
                </div>
            </div>

            {/* Two-Column Content & Quote */}
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Story & Mission */}
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

                    {/* Right Column: Featured Quote */}
                    <div className="relative pt-6 lg:pt-0">
                        <Reveal delay={0.2}>
                            <blockquote className="relative" data-cursor="hover">
                                <span className="absolute -top-8 -left-4 text-8xl font-serif text-black/5 italic select-none">"</span>
                                <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-tight text-foreground mb-8">
                                    The space you live in should feel like it belongs to you, and bring you a sense of peace.
                                </p>
                                <footer className="text-sm font-bold font-sans tracking-wide uppercase text-black/40">
                                    — Gauri Badoni, Founder, Hue Matrix
                                </footer>
                            </blockquote>
                        </Reveal>
                    </div>

                </div>
            </div>

        </section>
    )
}
