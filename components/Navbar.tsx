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
                className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-300 ${scrolled ? "bg-[#efebe5]/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                    }`}
            >
                <a href="/" className="text-2xl font-bold tracking-tighter font-serif flex items-center gap-2 relative z-50" data-cursor="hover">
                    {/* Logo Icon */}
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
                        </svg>
                    </div>
                    <span className="font-sans font-bold text-xl">hue</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    <div className="flex gap-6 text-sm font-medium text-foreground/80">
                        {[
                            { name: "Home", href: "/" },
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
                        <Magnetic>
                            <Button className="rounded-full bg-black text-white hover:bg-black/80 px-6 py-3 font-medium transition-all duration-300">
                                Contact Us
                            </Button>
                        </Magnetic>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden relative z-50">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-black focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
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
                            <a href="/" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Home</a>
                            <a href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">About</a>
                            <a href="/services" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Services</a>
                            <a href="/work" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Our Work</a>
                            <a href="/insights" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Insights</a>
                            <a href="/careers" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-medium text-black hover:text-black/60 transition-colors">Careers</a>
                        </div>

                        <a href="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="rounded-full bg-black text-white hover:bg-black/80 px-10 py-6 text-xl font-medium transition-all duration-300 mt-4">
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
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
        </a>
    )
}
