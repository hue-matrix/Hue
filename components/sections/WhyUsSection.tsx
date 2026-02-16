"use client"

import { Reveal } from "@/components/ui/reveal"
import { Clock, Heart, Sliders, Wallet, Leaf, Globe } from "lucide-react"

const features = [
    {
        title: "Honest Timelines",
        description: "We believe timelines should be honest and achievable. Every project is delivered when promised.",
        icon: Clock
    },
    {
        title: "Personalised Attention",
        description: "Every space receives focused attention. From design to execution, each project is handled with care.",
        icon: Heart
    },
    {
        title: "Flexible Services",
        description: "Choose only what you need. From design support to execution or styling, we offer modular solutions.",
        icon: Sliders
    },
    {
        title: "Budget-Conscious",
        description: "Good design should be accessible. We offer flexible options ensuring quality within your budget.",
        icon: Wallet
    },
    {
        title: "Sustainability Core",
        description: "Environmental responsibility is woven into every decision, guiding design and execution.",
        icon: Leaf
    },
    {
        title: "NRI-Friendly",
        description: "Manage everything remotely. Regular updates and clear communication ensure peace of mind.",
        icon: Globe
    }
]

export const WhyUsSection = () => {
    return (
        <section className="py-24 px-4 md:px-6 bg-white/50 border-y border-foreground/5">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-sm font-medium uppercase tracking-widest text-foreground/40 mb-4 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                            Design with <span className="italic text-foreground/60">intention.</span>
                        </h2>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {features.map((feature, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-background border border-foreground/10 flex items-center justify-center shrink-0 text-foreground/80">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-serif mb-3">{feature.title}</h3>
                                    <p className="text-foreground/60 leading-relaxed text-sm">
                                        {feature.description}
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
