import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Partners } from "@/components/sections/Partners"
import { Services } from "@/components/sections/Services"
import { FAQ } from "@/components/sections/FAQ"
import { Footer } from "@/components/Footer"
import { Preloader } from "@/components/Preloader"
import { Process } from "@/components/sections/Process"
import { WhyUs } from "@/components/sections/WhyUs"

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white bg-[#efebe5]">
      <Preloader />
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <WhyUs />
      <Process />
      <FAQ />
      <Footer />
    </main>
  )
}
