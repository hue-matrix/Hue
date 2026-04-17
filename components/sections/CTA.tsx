"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export const CTA = () => {
    return (
        <section className="py-20 flex flex-col items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Left Card: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#f7f2ea] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center items-center text-center gap-6 border border-black/5"
                >

                    <div className="bg-[#e6e2dc] px-6 py-2 rounded-full text-sm font-medium tracking-wide text-black/80 border border-black/5">
                        Get Started
                    </div>

                    {/* Text Area */}
                    <div className="space-y-4 max-w-md">
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.05]">
                            Your journey <br /> <span className="font-serif italic font-normal">starts right here.</span>
                        </h2>
                        <p className="text-base md:text-lg text-black/40 font-medium px-4">
                            Ready to turn your vision into reality? Let's build something extraordinary together.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <a href="/contact" className="mt-4">
                        <Button className="rounded-full px-12 py-7 text-lg bg-black text-white hover:bg-black/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Contact Us
                        </Button>
                    </a>
                </motion.div>

                {/* Right Card: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#f7f2ea] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center min-h-[500px] border border-black/5"
                >

                    <Image
                        src="/assets/cta/cta.png"
                        alt="CTA Banner"
                        fill
                        className="object-cover drop-shadow-2xl"
                        priority
                    />

                    {/* Subtle Radial Glow */}
                    <div className="absolute inset-0 bg-radial-gradient from-black/[0.03] to-transparent opacity-50" />
                </motion.div>
            </div>
        </section>
    )
}
