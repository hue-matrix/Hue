"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowUpRight, Upload } from "lucide-react"
import { useState } from "react"

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">

                {/* Header */}
                {/* Header */}
                <div className="flex flex-col items-start text-left space-y-6 mb-20 md:mb-24">
                    <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase">
                        Work with us
                    </div>
                    <div className="relative">
                        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-tight relative z-10">
                            Work with us
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-black/60 font-sans max-w-2xl leading-relaxed">
                        We’re always open to working with people and partners who value quality, clarity, and excellent work.
                    </p>
                </div>

                {/* Dual Forms */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Careers Form */}
                    <FormContainer title="Join Our Team" delay={0}>
                        <form className="space-y-8">
                            <FormInput label="Full Name*" name="fullName" type="text" placeholder="Full Name*" required />
                            <FormInput label="Email Address*" name="email" type="email" placeholder="Email Address*" required />
                            <FormInput label="Contact Number*" name="phone" type="tel" placeholder="Contact Number*" required />
                            <FormInput label="Current Location" name="location" type="text" placeholder="Current Location" />
                            <FormInput label="Role You’re Applying For" name="role" type="text" placeholder="Role You’re Applying For" />
                            <FormInput label="Years of Experience" name="experience" type="number" placeholder="Years of Experience" />

                            {/* Resume Upload */}
                            <div className="space-y-2">
                                <label className="sr-only">Upload Resume</label>
                                <div className="border border-dashed border-black/20 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black/5 transition-colors group">
                                    <Upload size={24} className="text-black/40 group-hover:text-black transition-colors" />
                                    <span className="text-sm text-black/60">Click to upload or drag and drop Resume</span>
                                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                                </div>
                            </div>

                            <FormInput label="Portfolio Link" name="portfolio" type="url" placeholder="Portfolio Link" />

                            <SubmitButton label="Submit Application" />
                        </form>
                    </FormContainer>

                    {/* Vendors Form */}
                    <FormContainer title="Partner With Us" delay={0.2}>
                        <div className="h-full flex flex-col">
                            <form className="space-y-8 flex-grow">
                                <FormInput label="Company / Individual Name*" name="companyName" type="text" placeholder="Company / Individual Name*" required />
                                <FormInput label="Contact Person Name*" name="contactPerson" type="text" placeholder="Contact Person Name*" required />
                                <FormInput label="Email Address*" name="vendorEmail" type="email" placeholder="Email Address*" required />
                                <FormInput label="Contact Number*" name="vendorPhone" type="tel" placeholder="Contact Number*" required />
                                <FormInput label="Location / City" name="vendorLocation" type="text" placeholder="Location / City" />
                                <FormInput label="Type of Service" name="serviceType" type="text" placeholder="Type of Service" />
                                <FormInput label="Previous Work / Website / Portfolio Link" name="vendorPortfolio" type="url" placeholder="Previous Work / Website / Portfolio Link" />

                                <div className="pt-4">
                                    <SubmitButton label="Submit Details" />
                                </div>
                            </form>
                        </div>
                    </FormContainer>

                </div>
            </div>

            <Footer />
        </main>
    )
}

function FormContainer({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="bg-[#f7f2ea] rounded-[32px] p-8 md:p-12 shadow-sm"
        >
            <h2 className="text-3xl font-sans font-bold mb-8 tracking-tight">{title}</h2>
            {children}
        </motion.div>
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

const SubmitButton = ({ label }: { label: string }) => (
    <button type="submit" className="group w-full bg-black text-white px-8 py-5 rounded-full flex items-center justify-between hover:scale-[1.02] transition-transform duration-300" data-cursor="hover">
        <span className="text-lg font-medium">{label}</span>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight size={18} />
        </div>
    </button>
)
