"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import Image from "next/image"

export default function SpacePlanningBlog() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 w-full max-w-[900px] mx-auto px-6">
                {/* Blog Header */}
                <div className="mb-12">
                    <p className="text-sm font-medium text-[#918f8b] mb-6">May 10, 2026</p>
                    <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] mb-8">
                        The Plan Beneath the Design: Why Space Planning Decides Everything
                    </h1>
                    <p className="text-lg md:text-xl text-[#918f8b] leading-relaxed font-medium max-w-3xl">
                        Sustainability & why it is important; Designing energy-based spaces.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-black/5">
                    <Image
                        src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop"
                        alt="Space Planning"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Blog Content */}
                <div className="max-w-none space-y-8">
                    <section className="space-y-4">
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Most people, when they think about interior design, think about what a space will look like. The colours, the furniture, the lights. The things that show up in photographs.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            But before any of that can work, there's a question that matters more: how will this space be used?
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Space planning is the discipline of answering that question before any money is spent, any materials are chosen, or any wall is touched. It's the most unsexy part of interior design, and the most consequential. Get the plan right and everything downstream becomes easier. Get it wrong and no amount of beautiful furniture will save you.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">What Space Planning Actually Is</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Space planning is the arrangement of functional zones within a given footprint. It decides where the dining table will sit relative to the kitchen. Whether the bedroom can comfortably hold a king bed and two side tables with adequate circulation. Whether the living room sofa faces a view, a wall, or, most commonly in apartments, a television that was bolted up without much thought.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            It's simultaneously a practical discipline and an empathetic one. The best space planners spend a good deal of time simply listening. How does this family move through their home on a weekday morning? Where does work from home happen? How often do they host, and what kind of hosting? Is there a senior person whose mobility needs to be accommodated? Children? Pets?
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            These questions aren't secondary. They are the brief. A plan that ignores them will look fine on a drawing and feel wrong to live in.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Indian Home: Specific Challenges</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Homes in this country come with a set of planning realities that differ from what you'll see in European or American design references.
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Multi-generational living</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Joint families and multi-generational households are still common, even in urban apartment settings. This creates planning requirements that a single-family design approach doesn't address. Privacy for older family members, supervised spaces for children, a prayer or puja corner that's placed with intention rather than fitted into leftover space.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Domestic support</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Most urban households of a certain scale have domestic help. The service entry, the staff bathroom, the kitchen passage, the placement of the washing area: these need to be planned with the real daily reality in mind rather than erased from the drawing as inconvenient.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Storage volume</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Indian households accumulate more than most design magazines would like to admit. Festival items, seasonal clothing, utensils for the large dinner you host twice a year, children's things, things belonging to parents who don't live there anymore. Storage, done properly, requires far more planned square footage than most clients initially assume.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Cross-ventilation</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Our climate means cross-ventilation isn't a nice-to-have. It's a fundamental requirement for comfort in the months before and after air conditioning season. A plan that seals off potential ventilation paths in pursuit of a more open living arrangement will be genuinely uncomfortable for several months of the year.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Circulation Question</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Circulation is the path a person takes through a space. It sounds obvious until you realise how many layouts ignore it completely.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The standard rule is that a primary circulation path, meaning the main movement corridor through a room, needs to be at least 90cm wide. Comfortable circulation, particularly in homes with senior residents or if you want the space to feel generous, is 1.05 to 1.2 metres.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Secondary circulation, the space around a dining chair after someone has pushed it back from the table, needs to be at least 75cm. Less than that and the person at the end of the table is performing a minor gymnastic manoeuvre every time they sit down.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            These numbers feel abstract until you tape them out on a floor. When you do, many layouts that looked fine on paper suddenly reveal their friction. The sofa that's too close to the coffee table. The wardrobe door that opens into the bathroom door. The kitchen drawer that can't fully open because a fridge was placed 5 inches too close.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Space planning catches all of this before it becomes permanent.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Zones: The Intelligence of the Undefined</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Open-plan living is increasingly common in Indian urban apartments, and with good reason. Removing internal walls dramatically increases the perceived volume of a space and allows light to travel further. It works well for nuclear families, for homes where the kitchen is a social space, and for anyone who values a sense of openness over compartmentalisation.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The challenge with open plans is that removing walls doesn't remove the need for definition. A living room still needs to feel like a living room. A dining area needs to feel distinct enough that you know you're there to eat.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This is done through zoning: the use of furniture arrangement, rugs, light levels, ceiling treatment, and sometimes partial architectural elements (a half-wall, a change in flooring material) to define areas within an open space.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A large rug anchors a seating group and signals "this is the conversation zone." A pendant light hung low over the dining table says "this is where we eat." Furniture arranged facing a direction, rather than pushed against walls, creates a zone without enclosing it.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Good zoning is invisible. You move through an open plan and feel the spaces changing without being able to identify the mechanism. That invisibility is the goal.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Kitchen: India's Most Complex Planning Problem</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The kitchen is where the gap between lifestyle and design aspiration is most visible in Indian homes.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The aspirational reference for many homeowners is a European or Scandinavian kitchen: minimal, open, a seamless part of the living space. The practical reality is an Indian kitchen that handles multiple cooking cycles a day, uses high-heat methods that produce significant smoke and aroma, hosts a helper during meal prep, and doubles as a storage zone for everything from a pressure cooker collection to the spare pickle jars from the last visit to the family home.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            These two realities are not incompatible, but they require honest planning rather than aesthetic fantasy. An open kitchen in an Indian home needs either an industrial-grade extraction system or some form of visual or spatial separation during cooking. A parallel kitchen, where a smaller second kitchen or utility space handles the heavy cooking and the main kitchen remains clean and open, is one of the more elegant solutions that has emerged from this problem.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            In smaller apartments where this isn't possible, a glass partition between kitchen and living, or a well-placed island that provides separation without closing off the space, can work well.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Measuring What You Have, Not What You Think You Have</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Site measurements matter, and they're wrong more often than anyone is comfortable admitting.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Drawings provided by builders are frequently inaccurate. They show ideal dimensions rather than as-built ones. Columns are slightly wider than marked. Beams drop lower than indicated. The window opening isn't centred where it appears on the plan.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Before any space planning can be treated as final, someone needs to measure the actual space: all four walls, the floor-to-ceiling height at multiple points, every column and beam, every opening. This takes time and it occasionally ruins a plan that was working beautifully on paper. It saves a great deal more time and money during execution.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Invisible Infrastructure</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Space planning includes the placement of invisible elements: electrical points, plumbing lines, AC units and their drainage routes, data and TV points.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            These decisions are permanent in a way that furniture placement is not. An electrical socket positioned 30cm too low means an awkwardly placed table lamp. A TV point on the wrong wall means either running cable across the room or compromising the furniture arrangement.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The conversation about infrastructure placement should happen during the planning phase, not during execution. It's a short conversation that prevents a long list of future inconveniences.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Why This All Matters Before the Aesthetics</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Space planning is the foundation of the design. It is, in the most literal sense, the plan.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Beautiful rooms can be designed for any well-planned space. A poorly planned space will resist every attempt at beauty. The furniture won't quite work. The traffic patterns will feel awkward. Something will always be slightly wrong, and neither the designer nor the homeowner will be able to put their finger exactly on what it is.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The diagnosis is almost always spatial. The solution was always the plan.
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
