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
        <section className="py-12 lg:py-20 bg-background overflow-hidden flex flex-col md:flex-row items-center gap-10 lg:gap-12 mx-auto px-6 md:px-12">
            {/* Left Static Text */}
            <div className="w-full md:w-auto shrink-0">
                <Reveal width="100%">
                    <p className="font-sans font-medium text-[14px] leading-[21px] text-[#918f8b]">
                        Brands We've  <br className="hidden md:block" /> Partnered with.
                    </p>
                </Reveal>
            </div>

            {/* Right Infinite Marquee */}
            <div className="w-full md:flex-1 relative flex overflow-hidden mask-gradient-x">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-8 md:gap-16 pl-36 md:pl-44 pr-8 md:pr-16 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Duplicating 4 times to ensure enough width for large screens and seamless loop at -50% */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="relative w-24 h-12 md:w-32 md:h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center shrink-0">
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
