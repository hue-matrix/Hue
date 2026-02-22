"use client"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { HeroSlideshow } from "@/components/HeroSlideshow"
import { Magnetic } from "@/components/ui/Magnetic"

export const Hero = () => {
    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center px-6 md:px-12  mx-auto pt-32 pb-20">
            {/* Left Content */}
            <div className="flex flex-col items-start justify-center z-10 pt-8 lg:pt-0 lg:-mt-20">
                <Reveal>
                    {/* 
                        Typography Update:
                        - Adjusted text sizes to ensure it naturally wraps in 2 lines without clipping: text-6xl, md:text-7xl, lg:text-[64px], xl:text-[72px]
                        - Removed max-w constraints so text can fit the full width of the left column.
                        - Added -mt-[10%] to move the entire text content up slightly.
                    */}
                    <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-medium tracking-tighter leading-[1.05] text-foreground mb-6 font-sans w-full">
                        Creating spaces <br className="hidden lg:block" />
                        <span className="font-serif italic font-normal text-foreground relative inline-block">
                            you truly belong in.
                        </span>
                    </h1>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-lg mb-8">
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
