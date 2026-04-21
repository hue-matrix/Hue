"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import Image from "next/image"

export default function HardwareBlog() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 w-full max-w-[900px] mx-auto px-6">
                {/* Blog Header */}
                <div className="mb-12">
                    <p className="text-sm font-medium text-[#918f8b] mb-6">Apr 22, 2026</p>
                    <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] mb-8">
                        The Quiet Detail: Why Hardware Is the Last Thing People Notice and the First Thing They Feel
                    </h1>
                    <p className="text-lg md:text-xl text-[#918f8b] leading-relaxed font-medium max-w-3xl">
                        The subtle details that elevate functional design and bring spaces to life.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-black/5">
                    <Image
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
                        alt="Hardware Details"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Blog Content */}
                <div className="max-w-none space-y-8">
                    <section className="space-y-4">
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            When someone walks into a beautifully designed home, they don't typically stop to look at the door handles. They're too busy absorbing the whole. The proportions, the light, the materials, the sense of openness or warmth.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            But ask them why the home felt premium, and the hardware is almost always part of the answer, even if they don't name it. They'll say things like "everything felt solid" or "nothing felt cheap" or "even opening a door felt considered." What they're describing, without quite articulating it, is the accumulated experience of good hardware choices.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This is a piece about that quiet detail. About the hinges, handles, pulls, knobs, locks, and fixtures that make up the physical interface between a person and their home.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Hardware as a Tactile Experience</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Interior design is primarily discussed in visual terms. But living in a home is largely physical. You push open the bathroom door. You pull the kitchen drawer. You turn the handle on the wardrobe. You press the flush plate in the powder room.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Every one of these actions is mediated by hardware. And the quality of that hardware communicates something immediately and viscerally. A cheap, hollow handle that flexes slightly under your grip says something about the home. A solid brass pull that has real weight and a cool, smooth finish says something entirely different.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This is why experienced designers talk about hardware the way they talk about jewellery. The pieces are small. The cost, relative to the whole project, is not enormous. But their impact on the character of the space is disproportionate to their size. Get the hardware wrong and even a beautifully finished room can feel unresolved. Get it right and it elevates everything around it.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Materials: What's Actually Worth Using</h2>
                        
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-sans">Solid Brass</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Brass is experiencing a sustained return to favour in premium interiors, and for reasons that go beyond trend. As a material, it's genuinely excellent. Dense, rust-resistant, and with a warmth that no other metal quite replicates, solid brass handles age well. Unlike plated or lacquered finishes, unlacquered brass develops a natural patina over time that many designers consider the goal rather than the problem.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                India has one of the world's oldest and richest traditions of brasswork, with manufacturers in Aligarh, Moradabad, and parts of Gujarat producing hardware of exceptional quality. Some of these workshops supply to European markets and are fully capable of executing to very high specifications. Sourcing domestically is both feasible and often advisable.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                The distinction to keep in mind is between solid brass and brass-plated. Plating is a thin coating over a cheaper base metal. It looks the same initially but wears through at points of use, corners, and edges over time. Solid brass costs more upfront but behaves honestly for decades.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Bronze and Antique Finishes</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                For heritage-influenced, maximalist, or Indo-contemporary interiors, antique bronze and dark brass finishes bring a richness that other materials can't match. These work particularly well on main doors, puja room shutters, and study spaces. Many artisanal manufacturers in India can produce custom hardware in these finishes, and the craftsmanship is often outstanding.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Matte Black</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Matte black hardware has become the default choice for contemporary and Japandi-influenced interiors over the past several years. It works well against light surfaces, particularly white and warm grey cabinetry, and photographs beautifully. The practical concern is that matte powder coatings can scratch and chip over time at points of hard contact. High-quality PVD (Physical Vapour Deposition) coatings are significantly more durable and are worth specifying for any hardware that will see regular use.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Stainless Steel</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Stainless steel remains the right answer for high-traffic areas, modern design languages, and exteriors. It doesn't patina in the way brass does, which is either an advantage or a limitation depending on the aesthetic. In bathrooms where rust resistance is critical, SS304 grade steel is the standard minimum. SS316, with its higher nickel and molybdenum content, is better still in humid conditions.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Brushed finishes on steel are more forgiving of fingerprints and scratches than mirror-polished. For door levers, cabinet pulls, and bathroom fittings, brushed or satin steel is usually the more practical choice.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Choosing for the Space, Not Just the Style</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The common mistake is treating hardware as a styling decision. "I want gold hardware because I like the look." This leads to choices that look right in a showroom and work poorly in daily life.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The better approach is to think about the space and its specific requirements first.
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">The Main Door</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                The main entrance handle is the first and last thing you touch when you're at home. It should be substantial. A good solid brass or steel pull handle with a mortice lock cylinder gives a sense of arrival that cheaper options simply cannot. On the main door, investing genuinely is worthwhile.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Kitchen Cabinet Pulls</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Kitchens are high-use, high-stress environments. The hardware opens and closes dozens of times a day, gets wet hands on it, gets bumped by pots and pans. Slim, recessed, or T-bar pulls in brushed steel or matte black tend to be the most practical choices here. Ornate or delicate hardware in kitchens rarely survives well.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Wardrobes</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                For wardrobes, the choice is between bar handles and knobs. Bar handles are easier to grip with a full hand and work well for larger shutter panels. Knobs work better for narrow panels and smaller cabinets. The visual rhythm of handles across a large wardrobe wall matters too. Consistent spacing and alignment, down to the millimetre, is what separates a considered wardrobe from a merely expensive one.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Bathrooms</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                In bathrooms, coordinate everything. Towel bars, toilet roll holders, robe hooks, faucets, and shower fittings should speak the same material language. Mixing chrome with brass, or matte black with brushed steel, reads as unresolved even if each individual piece is good quality. Pick a family of fittings from one range or supplier and commit to it throughout the bathroom.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Coordination Across the Home</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            One of the most effective things you can do with hardware is create a consistent thread across the home. This doesn't mean every single handle must be identical, but it does mean the finishes should be in conversation with each other.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A home where the main door has antique brass hardware, the internal doors have brushed bronze levers, and the kitchen has matte black pulls can work beautifully if those finishes are deliberately chosen to relate. A home where the choices were made room by room without a broader view feels fragmented, regardless of the quality of individual pieces.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The designer's job, in part, is to hold this thread. The conversation about hardware ideally happens early in the design process, not at the tag end when people are fatigued and just want to finish.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">On Cost and Where to Spend</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Hardware budgets are often among the first to get trimmed when project costs need to come down. This is understandable but usually shortsighted.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The reasoning is that hardware can always be upgraded later. Technically this is true. Practically, it almost never happens, because once the project is finished, most people don't return to do partial replacements.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The better strategy is to be strategic about where quality matters most. The main door, the kitchen, and the primary bathroom are the three areas that earn premium hardware investment. Secondary bedrooms and utility spaces can be specified at a lower level without compromising the overall experience of the home.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Even within a tighter budget, the choice of finish coordinates and the commitment to consistency creates a result that looks considered rather than accumulated.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Handle You Don't Notice</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The highest compliment a piece of hardware can receive is not "look at that beautiful handle." It's "everything just felt right." That invisibility is the goal. Hardware that works perfectly disappears into the experience of the home, contributing to a sense of quality without drawing attention to itself.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            That's harder to achieve than it sounds. It requires thought, restraint, and a willingness to treat the small things with the same seriousness as the large ones.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Because in a well-made home, there are no small things.
                        </p>
                    </section>
                </div>
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 mt-20">
                <CTA />
            </div>
            <Footer />
        </main>
    )
}
