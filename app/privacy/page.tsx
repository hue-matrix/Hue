
"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import { motion } from "framer-motion"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />
            
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-32 pb-16 px-6 w-full max-w-[1100px] mx-auto"
            >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="bg-black/5 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-black/80 uppercase w-fit">
                            Legal
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full">Privacy Policy</h1>
                    </div>
                    <p className="text-sm font-medium text-[#918f8b]">Last updated: April 2026</p>
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pb-20 px-6 w-full max-w-[900px] mx-auto"
            >
                <div className="max-w-none space-y-6">
                    <p className="text-lg text-[#918f8b] leading-relaxed">
                        At Hue Matrix ("we", "our", "us"), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
                    </p>
                    
                    <p className="text-lg text-[#918f8b] leading-relaxed">
                        Please read this policy carefully. If you disagree with its terms, please discontinue use of our website.
                    </p>

                    {/* Section 1 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">1. What Information We Collect</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            We collect information that you voluntarily provide to us when you:
                        </p>
                        <ul className="space-y-2 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li>• Fill out a contact form or enquiry form on our website</li>
                            <li>• Book a consultation via our scheduling link</li>
                            <li>• Submit a job application or partnership enquiry</li>
                            <li>• Contact us directly via email or phone</li>
                        </ul>
                        <p className="text-lg text-[#918f8b] leading-relaxed pt-2">
                            The personal information we may collect includes:
                        </p>
                        <ul className="space-y-2 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li>• Name</li>
                            <li>• Email address</li>
                            <li>• Phone number</li>
                            <li>• Location / city</li>
                            <li>• Details about your project or enquiry</li>
                            <li>• Resume or portfolio information (for job applicants)</li>
                        </ul>
                        <p className="text-lg text-[#918f8b] leading-relaxed pt-2">
                            We do not collect sensitive personal data such as financial account information, government identification numbers, or health data.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">2. How We Use Your Information</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            We use the information we collect to:
                        </p>
                        <ul className="space-y-2 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li>• Respond to your enquiries and service requests</li>
                            <li>• Provide our interior design services to you</li>
                            <li>• Schedule consultations and follow up on your project</li>
                            <li>• Send you relevant updates about your project, not marketing emails without your consent</li>
                            <li>• Process job applications and partnership proposals</li>
                            <li>• Improve our website and service offerings</li>
                        </ul>
                        <p className="text-lg text-[#918f8b] leading-relaxed pt-2">
                            We do not sell, rent, or share your personal information with third parties for marketing purposes.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">3. Cookies</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Our website may use basic cookies to ensure it functions correctly and to understand how visitors use our site. These are analytical cookies only. We do not use advertising or tracking cookies.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            You can disable cookies through your browser settings at any time. This may affect certain features of the website.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">4. Third-Party Services</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Our website uses the following third-party tools that may process your data:
                        </p>
                        <ul className="space-y-2 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li>• Google Calendar / Scheduling tool. If you book a consultation, the scheduling platform processes your name and email</li>
                            <li>• Hosting (Vercel). Our website is hosted on Vercel, which may log basic access data</li>
                        </ul>
                        <p className="text-lg text-[#918f8b] leading-relaxed pt-2">
                            We encourage you to review the privacy policies of these third-party services.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">5. Data Retention</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, typically for the duration of your enquiry or project, plus a reasonable period thereafter for administrative purposes.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">6. Your Rights</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            You have the right to:
                        </p>
                        <ul className="space-y-2 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li>• Request access to the personal data we hold about you</li>
                            <li>• Request correction of inaccurate data</li>
                            <li>• Request deletion of your personal data</li>
                            <li>• Withdraw consent for communications at any time</li>
                        </ul>
                        <p className="text-lg text-[#918f8b] leading-relaxed pt-2">
                            To exercise any of these rights, please contact us at hello@huematrix.in.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">7. Security</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            We take reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-3 pt-4 bg-[#f7f2ea] rounded-2xl p-8 border border-black/5">
                        <h2 className="text-2xl font-bold font-serif">8. Contact Us</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            If you have any questions about this Privacy Policy or how we handle your data, please contact:
                        </p>
                        <div className="pt-4 space-y-2">
                            <p className="text-lg text-black font-semibold">Hue Matrix</p>
                            <p className="text-lg text-[#918f8b]">Email: <a href="mailto:hello@huematrix.in" className="font-semibold text-black hover:underline">hello@huematrix.in</a></p>
                            <p className="text-lg text-[#918f8b]">Phone: <a href="tel:+918800934652" className="font-semibold text-black hover:underline">+91 88009 34652</a></p>
                        </div>
                    </section>
                </div>
            </motion.div>

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
                <CTA />
            </div>
            <Footer />
        </main>
    )
}
