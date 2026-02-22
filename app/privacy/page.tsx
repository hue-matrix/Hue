
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 w-full max-w-[1100px] mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full mb-6">Privacy Policy</h1>
                <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-2xl mx-auto">
                    Legal information coming soon.
                </p>
            </div>
            <Footer />
        </main>
    )
}
