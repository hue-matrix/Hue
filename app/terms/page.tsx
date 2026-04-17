
"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import { motion } from "framer-motion"

export default function TermsPage() {
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
                        <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] relative z-10 w-full">Terms of Service</h1>
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
                        Please read these Terms of Service carefully before using the Hue Matrix website (huematrix.in) or engaging our services.
                    </p>
                    
                    <p className="text-lg text-[#918f8b] leading-relaxed">
                        By accessing our website or engaging Hue Matrix for interior design services, you agree to be bound by these terms.
                    </p>

                    {/* Section 1 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">1. About Hue Matrix</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Hue Matrix is an interior design studio offering residential and commercial interior design and execution services across India. These Terms govern your use of our website and general enquiries. Specific project terms will be outlined in a separate Client Agreement signed at the commencement of any project.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">2. Use of This Website</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            You agree to use this website for lawful purposes only. You must not:
                        </p>
                        <ul className="space-y-2 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li>• Use the site in any way that is unlawful or harmful</li>
                            <li>• Attempt to gain unauthorised access to any part of the site</li>
                            <li>• Submit false or misleading information via any form on the site</li>
                            <li>• Reproduce or distribute any content from this site without our written permission</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">3. Intellectual Property</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            All content on this website including text, images, graphics, design concepts, and portfolio work is the intellectual property of Hue Matrix or the respective rights holders. No content may be reproduced, distributed, or used without prior written permission.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Design drawings, 3D renders, moodboards, and all other deliverables created by Hue Matrix for client projects remain the intellectual property of Hue Matrix until full payment has been received, at which point ownership transfers to the client as specified in the Client Agreement.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">4. Project Engagement and Agreements</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Engaging Hue Matrix for a design project is subject to a separate Client Agreement that will detail:
                        </p>
                        <ul className="space-y-2 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li>• Scope of services</li>
                            <li>• Timeline and milestones</li>
                            <li>• Payment terms and schedule</li>
                            <li>• Revision and change request process</li>
                            <li>• Termination and cancellation terms</li>
                        </ul>
                        <p className="text-lg text-[#918f8b] leading-relaxed pt-2">
                            These Terms of Service do not constitute a service agreement. No design work commences without a signed Client Agreement and agreed deposit.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">5. Limitation of Liability</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            To the fullest extent permitted by law, Hue Matrix shall not be liable for:
                        </p>
                        <ul className="space-y-2 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li>• Any indirect, incidental, or consequential loss arising from use of this website</li>
                            <li>• Any loss or damage arising from reliance on information published on this website</li>
                            <li>• Any third party content or services linked from this website</li>
                        </ul>
                        <p className="text-lg text-[#918f8b] leading-relaxed pt-2">
                            Our liability in connection with any project shall be limited to the fees paid for that specific project, as detailed in the Client Agreement.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">6. Third-Party Links</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Our website may contain links to third party websites including scheduling tools, social media platforms, and partner sites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">7. Changes to These Terms</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            We may update these Terms of Service from time to time. The most current version will always be published on this page. Continued use of the website after any changes constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-2xl font-bold font-serif">8. Governing Law</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the website shall be subject to the jurisdiction of the courts of Delhi, India.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section className="space-y-3 pt-4 bg-[#f7f2ea] rounded-2xl p-8 border border-black/5">
                        <h2 className="text-2xl font-bold font-serif">9. Contact</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            For any questions about these Terms, please contact:
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
