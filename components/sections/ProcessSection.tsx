"use client"

import { Reveal } from "@/components/ui/reveal"

const processSteps = [
    { title: "Site visit & client brief", desc: "Understanding your space, lifestyle, and how you want the home to feel." },
    { title: "2D space planning", desc: "Layouts planned to ensure comfort, balance, and smooth movement." },
    { title: "Concept development", desc: "Visual direction created to reflect the mood, colours, and materials." },
    { title: "Design discussions", desc: "Refining the design through discussions to align perfectly with your vision." },
    { title: "3D visualisation", desc: "Realistic views help you experience the space before execution begins." },
    { title: "Design freeze", desc: "Once approved, the design is finalised to move confidently into execution." },
    { title: "Material finalisation", desc: "Materials and finishes selected to enhance warmth, harmony, and everyday living." },
    { title: "Execution drawings", desc: "Detailed drawings prepared to ensure accurate and seamless on-site execution." },
]

export const ProcessSection = () => {
    return (
        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
            <Reveal>
                <div className="mb-20">
                    <span className="text-sm font-medium uppercase tracking-widest text-foreground/40 mb-4 block">How It Works</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                        From concept to <br />
                        <span className="italic text-foreground/60">completion.</span>
                    </h2>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <Reveal key={index} delay={index * 0.05}>
                        <div className="relative pl-8 border-l border-foreground/20 pb-12 last:pb-0">
                            <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-accent"></span>
                            <span className="text-xs font-bold text-foreground/30 mb-2 block tracking-widest">STEP 0{index + 1}</span>
                            <h3 className="text-lg font-bold font-serif mb-2">{step.title}</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
