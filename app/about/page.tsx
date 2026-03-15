import { Navbar } from "@/components/Navbar"
import { About } from "@/components/sections/About"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"


export default function AboutPage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-[#efebe5]">

            <Navbar />
            <About />
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
                <CTA />
            </div>
            <Footer />
        </main>
    )
}
