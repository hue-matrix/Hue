"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import { motion } from "framer-motion"
import { ArrowUpRight, Loader2 } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const interests = [
    "Social Media Management",
    "Content Creation",
    "Strategy & Planning",
    "Design & Branding",
    "Analytics & Reporting",
    "Community Management"
]

export default function WorkPage() {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

    const toggleSelection = (item: string, list: string[], setList: (wrapper: string[]) => void) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item))
        } else {
            setList([...list, item])
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus("idle")

        const form = e.currentTarget
        const formData = new FormData(form)

        const templateParams = {
            user_name: formData.get("user_name"),
            user_email: formData.get("user_email"),
            phone: formData.get("phone"),
            company: formData.get("company"),
            interests: selectedInterests.join(", "),
            experience: formData.get("experience"),
            portfolio: formData.get("portfolio"),
            message: formData.get("message")
        }

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            )
            setStatus("success")
            resetForm(form)
        } catch (error) {
            console.error("EmailJS Error:", error)
            setStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = (form: HTMLFormElement) => {
        form.reset()
        setSelectedInterests([])
        setTimeout(() => setStatus("idle"), 5000)
    }

    return (
        <main className="min-h-screen selection:bg-black selection:text-white bg-[#efebe5]">

            <Navbar />
            <div className="pt-32 pb-20 w-full max-w-[1100px] mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start text-left space-y-6 mb-12">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Our Work
                    </div>
                    <div className="relative w-full">
                        <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full mb-6">
                            Selected Projects
                        </h1>
                    </div>
                    <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-2xl">
                        A showcase of our finest projects and design excellence, tailored to reflect individual personalities.
                    </p>
                </div>
            </div>

            {/* Work With Us Form Section */}
            <div className="pt-20 pb-20 w-full max-w-[1100px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Branding */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center gap-8 lg:sticky lg:top-32 h-fit"
                    >
                        {/* Badge */}
                        <div className="w-fit">
                            <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                                Join us
                            </div>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h2 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full">
                                Work <br /> with us
                            </h2>
                            <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-md">
                                Are you passionate about creating beautiful spaces? Join our team and help us transform interiors across India. We're always looking for talented individuals to join Hue Matrix.
                            </p>
                        </div>

                    </motion.div>

                    {/* Right Column: Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#efebe5] flex flex-col justify-center"
                    >
                        <form onSubmit={handleSubmit} className="space-y-12">
                            {/* Basic Info */}
                            <div className="space-y-8">
                                <FormInput label="Name" name="user_name" type="text" placeholder="Full name" required />
                                <FormInput label="Email" name="user_email" type="email" placeholder="Email" required />
                                <FormInput label="Phone" name="phone" type="tel" placeholder="Phone" required />
                                <FormInput label="Company" name="company" type="text" placeholder="Company (if any)" />
                            </div>

                            {/* Interest Areas */}
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-black/40 uppercase tracking-widest">Areas of interest</label>
                                <div className="flex flex-wrap gap-3">
                                    {interests.map((interest) => (
                                        <button
                                            key={interest}
                                            type="button"
                                            onClick={() => toggleSelection(interest, selectedInterests, setSelectedInterests)}
                                            className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${selectedInterests.includes(interest)
                                                ? "bg-black text-white border-black"
                                                : "bg-transparent border-black/10 text-black hover:border-black/30"
                                                }`}
                                        >
                                            {interest}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-black/40 uppercase tracking-widest">Tell us about your experience</label>
                                <textarea
                                    name="experience"
                                    className="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-4 min-h-[100px] resize-none text-xl transition-colors placeholder:text-black/20"
                                    placeholder="Share your background and experience..."
                                />
                            </div>

                            {/* Portfolio */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-black/40 uppercase tracking-widest">Portfolio or website (optional)</label>
                                <input
                                    type="url"
                                    name="portfolio"
                                    className="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-black/20"
                                    placeholder="https://your-portfolio.com"
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-black/40 uppercase tracking-widest">Tell us about your project idea</label>
                                <textarea
                                    name="message"
                                    className="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-4 min-h-[100px] resize-none text-xl transition-colors placeholder:text-black/20"
                                    placeholder="What's your vision..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 flex flex-col gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full bg-black text-white px-10 py-5 rounded-full flex items-center justify-center gap-6 hover:scale-[1.02] transition-transform duration-300 disabled:opacity-70 disabled:hover:scale-100"
                                    data-cursor="hover"
                                >
                                    <span className="text-lg font-medium">
                                        {isSubmitting ? "Sending..." : "Submit Application"}
                                    </span>
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
                                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <ArrowUpRight size={18} />}
                                    </div>
                                </button>

                                {status === "success" && (
                                    <p className="text-green-600 font-medium">Thank you! We'll review your application and get back to you soon.</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-600 font-medium">Something went wrong. Please try again or email us directly at hello@huematrix.in</p>
                                )}
                            </div>

                        </form>
                    </motion.div>
                </div>
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
                <CTA />
            </div>
            <Footer />
        </main>
    )
}

const FormInput = ({
    label,
    type,
    placeholder,
    name,
    required,
    hideLabel = true,
}: {
    label: string
    type: string
    placeholder: string
    name: string
    required?: boolean
    hideLabel?: boolean
}) => (
    <div className="space-y-2">
        <label
            className={
                hideLabel
                    ? "sr-only"
                    : "block text-sm font-medium text-black/40 uppercase tracking-widest"
            }
            htmlFor={name}
        >
            {label}
        </label>

        <input
            id={name}
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-black/20"
        />
    </div>
)
