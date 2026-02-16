"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Instagram, Linkedin, X } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-[#F3F2ED] text-black py-20 px-6 md:px-12 border-t border-black/5">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8">

                    {/* Left Column: Branding */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
                                </svg>
                            </div>
                            <span className="font-sans font-bold text-xl tracking-tight">hue</span>
                        </a>

                        {/* Tagline */}
                        <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight leading-tight">
                            Design that drives <br /> <span className="font-serif italic font-normal">real emotion.</span>
                        </h2>

                        <p className="text-black/60 font-medium">
                            Built for homes, workspaces, and brands.
                        </p>

                        {/* Social Buttons */}
                        <div className="flex gap-3 mt-4">
                            <a href="https://www.linkedin.com/in/gauri-badoni-25380971/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/hue_matrix/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">

                        {/* Navigate */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg mb-2">Navigate</h3>
                            <a href="/" className="text-black/60 hover:text-black transition-colors font-medium">Home</a>
                            <a href="/about" className="text-black/60 hover:text-black transition-colors font-medium">About</a>
                            <a href="/services" className="text-black/60 hover:text-black transition-colors font-medium">Services</a>
                            <a href="/work" className="text-black/60 hover:text-black transition-colors font-medium">Our Work</a>
                            <a href="/insights" className="text-black/60 hover:text-black transition-colors font-medium">Insights</a>
                        </div>

                        {/* Connect */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg mb-2">Connect</h3>
                            <a href="https://calendar.app.google/VmXpNXuknU7sDKgW8" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors font-medium">Book a call</a>
                            <a href="https://www.instagram.com/hue_matrix/" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors font-medium">Instagram</a>
                            <a href="https://www.linkedin.com/in/gauri-badoni-25380971/" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors font-medium">LinkedIn</a>
                            <a href="mailto:design@huematrix.in" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors font-medium">Email</a>
                            <a href="tel:+918800934652" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors font-medium">Phone</a>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg mb-2">Legal</h3>
                            <a href="/privacy" className="text-black/60 hover:text-black transition-colors font-medium">Privacy Policy</a>
                            <a href="/terms" className="text-black/60 hover:text-black transition-colors font-medium">Terms of Service</a>
                            <a href="/contact" className="text-black/60 hover:text-black transition-colors font-medium">Contact</a>
                            <span className="text-black/60 font-medium cursor-default">404</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-black/40 font-medium">
                    <p>© {new Date().getFullYear()} Hue Matrix.</p>
                </div>
            </div>
        </footer>
    )
}
