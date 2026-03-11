"use client"

import { Reveal } from "@/components/ui/reveal"

export const AboutSection = () => {
    return (
        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <Reveal width="100%">
                    <div className="relative aspect-[3/4] md:aspect-square rounded-3xl overflow-hidden bg-foreground/5">
                        <img
                            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2000&auto=format&fit=crop"
                            alt="Gauri Badoni, Founder"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </Reveal>

                <div>
                    <Reveal>
                        <span className="text-sm font-medium uppercase tracking-widest text-foreground/40 mb-4 block">Meet The Founder</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 leading-tight">
                            Design Should Feel <br />
                            <span className="italic text-foreground/60">Thoughtful & Natural.</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="space-y-6 text-foreground/70 leading-relaxed">
                            <p>
                                Hue Matrix was born from a childhood love for beautiful spaces. As a little girl, Gauri was always drawn to design, colours, and the small details that make a place feel special. That same care and attention can still be seen today in the way she designs, with patience, warmth, and a deep respect for every detail.
                            </p>
                            <p>
                                At its heart, Hue Matrix is guided by a simple philosophy. Design should feel thoughtful, functional, and natural to live in. Every space is carefully planned, focusing on balance, proportion, and everyday usability rather than fleeting trends.
                            </p>
                            <p>
                                After years of working closely with design companies, Gauri noticed a recurring gap in the industry. Timelines that were promised often stretched far beyond what was committed. Hue Matrix was created to change that. The studio stands for clear timelines, quality craftsmanship, and transparent execution.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <blockquote className="mt-12 pl-6 border-l-2 border-accent italic text-xl font-serif text-foreground/90">
                            "The space you live in should feel like it belongs to you, and bring you a sense of peace."
                            <footer className="mt-4 text-sm font-sans font-medium not-italic text-foreground/50">
                                — Gauri Badoni, Founder
                            </footer>
                        </blockquote>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
