"use client"

import { Reveal } from "@/components/ui/reveal"

export const Testimonials = () => {
    return (
        <section className="py-32 px-4 md:px-6 max-w-5xl mx-auto text-center">
            <Reveal>
                <blockquote className="text-2xl md:text-4xl font-medium leading-tight mb-8">
                    "They took social media off our plate completely and our audience has never been more engaged. The return on investment has been incredible."
                </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/10 rounded-full mb-2"></div>
                    <cite className="not-italic font-bold text-lg">Sarah Jenkins</cite>
                    <span className="text-white/60 text-sm">CMO, Bloom Beauty</span>
                </div>
            </Reveal>
        </section>
    )
}
