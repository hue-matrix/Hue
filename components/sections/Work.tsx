"use client"

import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

const works = [
    {
        title: "Bloom",
        category: "Scaling a beauty brand",
        stats: "2.4M Views",
        color: "bg-purple-900",
    },
    {
        title: "Apex",
        category: "Growing a clothing brand",
        stats: "150% Engagement",
        color: "bg-emerald-900",
    },
    {
        title: "Luma",
        category: "Tech startup launch",
        stats: "10k Signups",
        color: "bg-blue-900",
    },
]

export const Work = () => {
    return (
        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
            <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold mb-16">
                    Recent <span className="font-serif italic font-normal text-white/70">Work</span>
                </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-12">
                {works.map((work, index) => (
                    <Reveal key={index} width="100%">
                        <div className="group relative aspect-video overflow-hidden rounded-3xl bg-neutral-900 border border-white/10">
                            <div className={`absolute inset-0 ${work.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-white/60 mb-2 block">{work.category}</span>
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-4xl md:text-6xl font-bold">{work.title}</h3>
                                        <Button variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View Case Study
                                        </Button>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-white/10 flex gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <div>
                                            <span className="text-sm text-white/40 uppercase tracking-widest block mb-1">Result</span>
                                            <span className="text-xl font-medium">{work.stats}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
