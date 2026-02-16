"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"


export default function WorkPage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-[#efebe5]">

            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start text-left space-y-6 mb-12 md:mb-20">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Our Work
                    </div>
                    <div className="relative">
                        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-tight relative z-10">
                            Selected projects
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-black/60 font-sans max-w-2xl leading-relaxed">
                        A showcase of our finest projects and design excellence, tailored to reflect individual personalities.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
