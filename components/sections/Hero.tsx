"use client"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { HeroSlideshow } from "@/components/HeroSlideshow"
import { Magnetic } from "@/components/ui/Magnetic"

export const Hero = () => {
    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center px-6 md:px-12  mx-auto pt-32 pb-20">
            {/* Left Content */}
            <div className="flex flex-col items-start justify-center z-10 pt-8 lg:pt-0 ">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Instrument+Serif:ital@0;1&display=swap');
                ` }} />
                <Reveal>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-medium tracking-tighter leading-[1.05] mb-6 max-w-[15ch] lg:max-w-none" style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif', fontWeight: 500, color: 'rgb(0, 0, 0)' }}>
                        Creating spaces you <br className="hidden lg:block" /> truly <span className="italic font-normal" style={{ fontFamily: "'Instrument Serif', 'DM Serif Text', serif" }}>belong</span> in.
                    </h1>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-[24px] leading-[36px] max-w-lg mb-8" style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif', fontWeight: 500, color: 'rgba(0, 0, 0, 0.48)' }}>
                        Thoughtfully designed interiors and careful execution for homes, workspaces, and everything in between.
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    {/* Mobile: flex-row for side-by-side buttons. gap-3 for tighter spacing on small screens. */}
                    <div className="flex flex-row flex-wrap gap-3">
                        <Button className="rounded-full text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 bg-black text-white hover:bg-black/80 transition-transform duration-300 transform hover:scale-105 whitespace-nowrap" data-cursor="hover">
                            Get in Touch
                        </Button>
                        <Button variant="outline" className="rounded-full text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 border-foreground/20 text-foreground hover:bg-foreground/5 transition-transform duration-300 transform hover:scale-105 backdrop-blur-sm whitespace-nowrap" data-cursor="hover">
                            Explore Services
                        </Button>
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
