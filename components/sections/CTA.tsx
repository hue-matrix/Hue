"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export const CTA = () => {
    return (
        <section className="py-20 flex flex-col items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Card: Content - Portrait Aspect */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-5 aspect-[4/5] bg-[#f7f2ea] rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-center items-center text-center gap-6 border border-black/5"
                >

                    <div className="bg-[#e6e2dc] px-6 py-2 font-sans rounded-full font-medium tracking-wide text-[16px] text-[#918f8b]">
                    Get Started
                </div>

                    {/* Text Area */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.05]">
                            Your Design Journey <br /> Starts <span className="font-serif italic font-normal">Here.</span>
                        </h2>
                        <p className="text-sm md:text-base text-black/40 font-medium px-2">
                             Ready to turn your vision into reality? Let's create something truly uplifting. 
                        </p>
                    </div>

                    {/* CTA Button */}
                    <a href="/contact" className="mt-2">
                        <Button className="rounded-full px-10 py-6 text-base bg-black text-white hover:bg-black/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Contact Us
                        </Button>
                    </a>
                </motion.div>

                {/* Right Card: Image - Landscape Aspect */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-7 aspect-[28/25] bg-[#f7f2ea] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center border border-black/5"
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
