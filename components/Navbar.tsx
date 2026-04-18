"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Magnetic } from "@/components/ui/Magnetic"
import { Menu, X } from "lucide-react"

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${scrolled ? "bg-[#efebe5]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
                    }`}
            >
                <div className="w-full max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-4 md:py-6 flex justify-between items-center">
                    <a href="/" className="flex items-center gap-2 relative z-50" data-cursor="hover">
                        {/* Logo Image */}
                        <img 
                            src="/assets/Hue Matrix Logo.webp" 
                            alt="Hue Matrix" 
                            className="w-16 h-12 md:w-32 object-contain pt-4"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        <div className="flex gap-6 text-sm font-medium text-foreground/80">
                            {[
                                { name: "About", href: "/about" },
                                { name: "Services", href: "/services" },
                                { name: "Our Work", href: "/work" },
                                { name: "Insights", href: "/insights" },
                                { name: "Careers", href: "/careers" },
                            ].map((link) => (
                                <NavLink key={link.name} href={link.href}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        <a href="/contact" data-cursor="hover">
                            <Button className="rounded-full text-[13px] md:text-base px-8 py-2 bg-black text-white hover:bg-black/80 transition-transform duration-300 transform hover:scale-105 whitespace-nowrap">
                                Contact Us
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden relative z-50">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-black focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#efebe5] z-40 flex flex-col items-center justify-center gap-10 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            <a href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">About</a>
                            <a href="/services" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Services</a>
                            <a href="/work" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Our Work</a>
                            <a href="/insights" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Insights</a>
                            <a href="/careers" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Careers</a>
                        </div>

                        <a href="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="rounded-full text-[13px] md:text-[15px] px-6 md:px-8 py-4 md:py-6 bg-black text-white hover:bg-black/80 font-medium transition-all duration-300 mt-4">
                                Contact Us
                            </Button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a href={href} className="relative group overflow-hidden inline-block hover:text-black/60 transition-colors duration-300" data-cursor="hover">
            <span className="relative z-10">{children}</span>
        </a>
    )
}
