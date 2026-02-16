import { Navbar } from "@/components/Navbar"
import { About } from "@/components/sections/About"
import { Footer } from "@/components/Footer"


export default function AboutPage() {
    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-[#efebe5]">

            <Navbar />
            <About />
            <Footer />
        </main>
    )
}
