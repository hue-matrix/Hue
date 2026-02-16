"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, ArrowUpRight } from "lucide-react"
import { Magnetic } from "@/components/ui/Magnetic"
import { Reveal } from "@/components/ui/reveal"

const faqs = [
    {
        question: "What timelines can we expect for a project?",
        answer: "Timelines depend on the scope and size of the project. Before starting, we share a clear and realistic schedule so expectations are aligned from the beginning. Once agreed upon, timelines are planned carefully and followed through with consistency."
    },
    {
        question: "How is the project budget decided?",
        answer: "Budgets are discussed upfront and planned in detail. We work within your comfort range and suggest options that balance design, quality, and cost. Clear estimates are shared before execution begins, ensuring transparency at every stage."
    },
    {
        question: "What kind of finishes do you work with?",
        answer: "We work with a wide range of finishes such as laminates, membrane, PU paints, veneer, acrylics, glass, etc. selected based on durability, functionality, budget, and aesthetics. Material choices are discussed in detail to ensure they suit your space, usage, and long-term requirements."
    },
    {
        question: "How do you select hardware?",
        answer: "We source our hardware from trusted brands such as Hettich, Häfele, and Blum, selected with daily use and long-term durability in mind. We recommend reliable, well-tested options that align with the design while ensuring smooth functionality and ease of maintenance."
    },
    {
        question: "What are the payment terms?",
        answer: "Payments are structured in stages and aligned with project milestones to ensure clarity and transparency throughout the engagement. For design projects, payment is taken upfront. For execution, payments are split into 50% before production and 50% before delivery, ensuring a smooth and comfortable process for both sides."
    },
    {
        question: "Do you have an in-house factory or manufacturing setup?",
        answer: "We work with a select group of trusted manufacturing partners and vendors to ensure consistent quality and reliability. Having collaborated with them across multiple projects, we value their timely execution, dependable after-sales support, and adherence to our design and quality standards. Every element is produced under close supervision to ensure it meets our expectations."
    },
    {
        question: "How is execution managed on-site?",
        answer: "Execution is closely monitored at every stage by our team. We actively coordinate between design, vendors, and on-site execution to ensure quality, timelines, and finer details are handled with care. Our core team, along with the founder’s personal involvement on most projects, ensures accountability, consistency, and high standards throughout the process."
    },
    {
        question: "Is Hue Matrix NRI-friendly?",
        answer: "Yes. We regularly work with NRI clients and manage projects remotely on their behalf. Through regular updates, clear communication, and documentation, we ensure you stay informed and confident even if you are not physically present."
    }
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 bg-[#F3F2ED] relative pb-32">
            {/* Container */}
            <div className="container px-4 md:px-6 mx-auto">

                {/* Main Card - White for distinct 'box' look */}
                <div className="relative bg-[#f7f2ea] rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden max-w-4xl mx-auto shadow-sm">

                    {/* Header Row: Badge + Dot */}
                    <div className="flex justify-between items-start mb-12">
                        {/* Badge */}
                        <div className="bg-[#F3F2ED] px-5 py-2 rounded-full text-sm font-medium tracking-wide text-black/80">
                            Questions
                        </div>
                    </div>

                    {/* Heading - Left Aligned */}
                    <div className="text-left mb-12">
                        <Reveal width="100%">
                            <div className="flex flex-col items-start gap-4">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-sans font-bold tracking-tight leading-[1.1]">
                                    Frequently <br /> Asked <span className="font-serif italic font-normal">Questions</span>
                                </h2>
                            </div>
                        </Reveal>
                    </div>

                    {/* Accordion List */}
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <Magnetic key={index}>
                                <motion.div
                                    initial={false}
                                    className={`rounded-[2rem] px-8 py-6 cursor-pointer transition-colors duration-300 ${openIndex === index
                                        ? "bg-[#E5E4DE]" // Active State
                                        : "bg-[#ede9e1]" // Inactive State (Darker beige)
                                        }`}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    data-cursor="hover"
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                >
                                    <div className="flex justify-between items-center gap-4">
                                        <h3 className="text-lg md:text-xl font-medium text-foreground tracking-tight">
                                            {faq.question}
                                        </h3>
                                        {/* Icon Wrapper: Black circle */}
                                        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                                            <AnimatePresence mode="wait" initial={false}>
                                                {openIndex === index ? (
                                                    <motion.div
                                                        key="minus"
                                                        initial={{ rotate: -90, opacity: 0 }}
                                                        animate={{ rotate: 0, opacity: 1 }}
                                                        exit={{ rotate: 90, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {/* Small X or Minus */}
                                                        <Plus className="w-5 h-5 rotate-45" />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="plus"
                                                        initial={{ rotate: 90, opacity: 0 }}
                                                        animate={{ rotate: 0, opacity: 1 }}
                                                        exit={{ rotate: -90, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <Plus className="w-5 h-5" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pt-4 text-foreground/70 leading-relaxed text-base md:text-lg font-sans max-w-2xl">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
