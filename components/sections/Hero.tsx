"use client"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { HeroSlideshow } from "@/components/HeroSlideshow"
import { Magnetic } from "@/components/ui/Magnetic"

export const Hero = () => {
    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center px-6 md:px-12 max-w-screen-2xl mx-auto pt-32 pb-20 overflow-hidden">
            {/* Left Content */}
            <div className="flex flex-col items-start justify-center z-10 pt-8 lg:pt-0">
                <Reveal>
                    {/* 
                        Typography Update:
                        - Fonts: 'font-sans' (Inter) for main, 'font-serif italic' (Instrument Serif) for accent.
                        - lg:text-6xl for laptops (ensures 2 lines in 50% col)
                        - xl:text-7xl for desktops
                        - 2xl:text-[5.5rem] for large screens
                        - max-w increased to 20ch so line 2 fits.
                    */}
                    <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem] font-bold tracking-tighter leading-[1] lg:leading-[0.95] text-foreground mb-8 font-sans max-w-none lg:max-w-[20ch]">
                        Creating spaces <br className="hidden lg:block" />
                        <span className="font-serif italic font-normal text-foreground relative inline-block">
                            you truly <span className="whitespace-nowrap">belong in.</span>
                        </span>
                    </h1>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-lg md:text-xl text-foreground/60 max-w-lg mb-8 leading-relaxed font-normal">
                        Thoughtfully designed interiors and careful execution for homes, workspaces, and everything in between.
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    {/* Mobile: flex-row for side-by-side buttons. gap-3 for tighter spacing on small screens. */}
                    <div className="flex flex-row flex-wrap gap-3">
                        <Magnetic>
                            {/* Reduced px/py slightly for mobile fit if needed, but side-by-side should fit 2 buttons. */}
                            <Button className="rounded-full text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 bg-black text-white hover:bg-black/80 transition-all duration-300 transform hover:scale-105 whitespace-nowrap" data-cursor="hover">
                                Get in Touch
                            </Button>
                        </Magnetic>
                        <Magnetic>
                            <Button variant="outline" className="rounded-full text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 border-foreground/20 text-foreground hover:bg-foreground/5 backdrop-blur-sm whitespace-nowrap" data-cursor="hover">
                                Explore Services
                            </Button>
                        </Magnetic>
                    </div>
                </Reveal>
            </div>

            {/* Right Slideshow */}
            <div className="relative w-full flex justify-center lg:justify-end h-full items-center mt-8 lg:mt-0">
                <Reveal delay={0.3} width="100%">
                    <HeroSlideshow />
                </Reveal>
            </div>
        </section>
    )
}
