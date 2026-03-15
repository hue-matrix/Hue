import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Partners } from "@/components/sections/Partners"
import { Services } from "@/components/sections/Services"
import { FAQ } from "@/components/sections/FAQ"
import { Footer } from "@/components/Footer"
import { Preloader } from "@/components/Preloader"
import { Process } from "@/components/sections/Process"
import { WhyUs } from "@/components/sections/WhyUs"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white bg-[#efebe5]">
      <Preloader />
      <Navbar />
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <Hero />
        <Partners />
        <Services />
        <WhyUs />
        <Process />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
