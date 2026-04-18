"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"


export default function WorkPage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-[#efebe5]">

            <Navbar />
            <div className="pt-32 pb-20 w-full max-w-[1100px] mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start text-left space-y-4 mb-12">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Our Work
                    </div>
                    <div className="relative w-full">
                        <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full mb-4">
                            Work We're Proud Of

                        </h1>
                    </div>
                    <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-2xl">
                        A curated look at the spaces we've worked on, each one tailored to the people and purpose behind it.
                        </p>
                </div>
            </div>
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
                <CTA />
            </div>
            <Footer />
        </main>
    )
}