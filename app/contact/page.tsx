"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowUpRight, Star, Loader2 } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const services = [
    "Design ",
    "Design + Execution",
    "Execution",
    "Decoration"
]

const projectTypes = [
    "Apartment",
    "Villa",
    "Commercial Space",
    "Cafe / Restaurant",
    "Other"
]

export default function ContactPage() {
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
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
            location: formData.get("location"),
            services: selectedServices.join(", "),
            project_types: selectedTypes.join(", "),
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
        setSelectedServices([])
        setSelectedTypes([])
        setTimeout(() => setStatus("idle"), 5000)
    }

    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-24 lg:pt-32 pb-20 w-full max-w-[1100px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 min-h-[80vh]">

                    {/* Left Column: Branding */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center gap-8 lg:sticky lg:top-32 h-fit"
                    >
                        {/* Badge */}
                        <div className="w-fit">
                        <div className="bg-[#e6e2dc] px-6 py-2 rounded-full text-[16px] font-medium tracking-wide text-[#918f8b] ">
                        Book A Call
                    </div>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full">
                                Let’s get <br /> started
                            </h1>
                            <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[36px] text-[#918f8b] max-w-md">
                                Ready to bring your vision to life? Get in touch and let’s discuss how we can transform your space into something truly personal and peace-filled.
                            </p>
                        </div>
                        {/* Contact Information */}
                        <div className="space-y-6 pt-8">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-black/60 uppercase tracking-wide">Email</p>
                                <p className="text-lg font-medium text-black">hello@huematrix.in</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-black/60 uppercase tracking-wide">Phone</p>
                                <p className="text-lg font-medium text-black">+91 88009 34652</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-black/60 uppercase tracking-wide">Location</p>
                                <p className="text-lg font-medium text-black">New Delhi, India</p>
                            </div>
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
                                <FormInput label="Name" name="user_name" type="text" placeholder="Name" required />
                                <FormInput label="Email" name="user_email" type="email" placeholder="Email" required />
                                <FormInput label="Phone" name="phone" type="tel" placeholder="Phone" required />
                                <FormInput label="Location" name="location" type="text" placeholder="Location" />
                            </div>

                            {/* Services - Pill Selectors */}
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-black/40 uppercase tracking-widest">What services are you interested in?</label>
                                <div className="flex flex-wrap gap-3">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleSelection(service, selectedServices, setSelectedServices)}
                                            className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${selectedServices.includes(service)
                                                ? "bg-black text-white border-black"
                                                : "bg-transparent border-black/10 text-black hover:border-black/30"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Project Type - Pill Selectors */}
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-black/40 uppercase tracking-widest">What is your project type?</label>
                                <div className="flex flex-wrap gap-3">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => toggleSelection(type, selectedTypes, setSelectedTypes)}
                                            className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${selectedTypes.includes(type)
                                                ? "bg-black text-white border-black"
                                                : "bg-transparent border-black/10 text-black hover:border-black/30"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-black/40 uppercase tracking-widest">Tell us about your project...</label>
                                <textarea
                                    name="message"
                                    className="w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-4 min-h-[100px] resize-none text-xl transition-colors placeholder:text-black/20"
                                    placeholder="We have a 3BHK in..."
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
                                        {isSubmitting ? "Sending..." : "Submit Request"}
                                    </span>
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
                                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <ArrowUpRight size={18} />}
                                    </div>
                                </button>

                                {status === "success" && (
                                    <p className="text-green-600 font-medium">Thank you! We'll be in touch shortly.</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
                                )}
                            </div>

                        </form>
                    </motion.div>
                </div>
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

