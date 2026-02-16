
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 container mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl md:text-7xl font-serif mb-6">Terms of Service</h1>
                <p className="text-xl md:text-2xl font-sans max-w-2xl mx-auto leading-relaxed opacity-60">
                    Legal information coming soon.
                </p>
            </div>
            <Footer />
        </main>
    )
}
