"use client"

import { Reveal } from "@/components/ui/reveal"
import { motion } from "framer-motion"
import Image from "next/image"

// User will place images client1.png, client2.png, ... client6.png in public/assets/
const partners = [
    { name: "Client 1", logo: "/assets/client1.png" },
    { name: "Client 2", logo: "/assets/client2.png" },
    { name: "Client 3", logo: "/assets/client3.png" },
    { name: "Client 4", logo: "/assets/client4.png" },
    { name: "Client 5", logo: "/assets/client5.png" },
    { name: "Client 6", logo: "/assets/client6.png" },
]

export const Partners = () => {
    return (
        <section className="py-20 bg-background overflow-hidden px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
            {/* Left Static Text */}
            <div className="w-full md:w-1/4 shrink-0">
                <Reveal width="100%">
                    <p className="text-sm font-medium text-foreground/40 uppercase tracking-widest leading-relaxed font-sans">
                        Brands we've helped <br className="hidden md:block" /> grow on social.
                    </p>
                </Reveal>
            </div>

            {/* Right Infinite Marquee */}
            <div className="w-full md:w-3/4 relative flex overflow-hidden mask-gradient-x">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Duplicating 4 times to ensure enough width for large screens and seamless loop at -50% */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center shrink-0">
                            {/* Using standard img for simplicity if Next Image is tricky with unknown sizing, 
                                but Next Image is safer. Using fill + object-contain. 
                            */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
