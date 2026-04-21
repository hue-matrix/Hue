"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import Image from "next/image"

export default function MaterialsBlog() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 w-full max-w-[900px] mx-auto px-6">
                {/* Blog Header */}
                <div className="mb-12">
                    <p className="text-sm font-medium text-[#918f8b] mb-6">May 3, 2026</p>
                    <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] mb-8">
                        Choosing Materials That Last: A Practical Guide for Homes
                    </h1>
                    <p className="text-lg md:text-xl text-[#918f8b] leading-relaxed font-medium max-w-3xl">
                        A guide to choosing sustainable and honest materials for longevity.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-black/5">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Materials"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Blog Content */}
                <div className="max-w-none space-y-8">
                    <section className="space-y-4">
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            There's a question that comes up in almost every design consultation, usually once the layouts are settled and the concept is clear: "What materials are we actually using?"
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            It's the right question to ask at that stage. But it's also where a lot of well-intentioned projects make their most expensive mistakes. Materials chosen for how they look in a showroom, without enough thought about how they'll behave in a home, in this climate, with this family's actual lifestyle.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This piece is about materials. Not an exhaustive catalogue, but an honest look at the ones that matter most in residential interiors, what they offer, what they demand, and how to think about them in the context of homes in this part of the world.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Starting Point: Material Honesty</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            There's a principle in good design called material honesty. It means using materials for what they naturally do well, rather than forcing them into roles they aren't suited for.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A marble floor in a living room is materially honest. Marble is hard, cool, beautiful, and in a low-traffic space it's excellent. Marble in a narrow kitchen corridor that gets heavy daily traffic, water splashes, and dropped utensils is not honest to the material. It will scratch, stain, and chip in ways that never fully polish out.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This isn't a rule so much as a discipline: ask of every material what it does, not just what it looks like. The best material choices in a home are the ones that honour both questions equally.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Stone: What We Have and What It Does</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This region has a remarkable geological inheritance. Some of the world's finest natural stones are quarried within a few hundred kilometres of major cities, which means access, freshness of material, and often cost advantages that aren't available anywhere else.
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Marble</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Makrana marble from Rajasthan is the same stone used in the Taj Mahal. Pure white, fine-grained, with a luminosity that no other marble quite matches. In living rooms with good light, Makrana marble flooring is extraordinary. It's also relatively porous and requires sealing and careful maintenance. Acidic substances, which in an Indian kitchen means practically everything, will etch the surface.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                For countertops in working kitchens, marble is high maintenance. For island tops that are used lightly or as a design statement rather than a primary work surface, it can be justified.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Pink Alwar marble, Rozonet from Rajasthan, Black Marquino from Madhya Pradesh: the domestic marble range is wide and genuinely beautiful. Before looking abroad, it's worth spending time with local suppliers.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Kota Stone</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Kota stone is one of those quietly genius materials. A fine-grained limestone quarried in Kota, Rajasthan, it's non-porous, non-slip, and remarkably cool underfoot, which makes it one of the most climate-appropriate flooring materials in the country. It has been used in public buildings, temples, and homes across the subcontinent for generations, and its durability in those conditions speaks to its character.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Aesthetically, Kota was long associated with institutional or utilitarian spaces, which led to a period of neglect in premium residential design. That's changing. When polished and used in conjunction with the right materials, particularly warm woods and textured walls, Kota stone reads as sophisticated and grounded rather than austere.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                For entrance lobbies, living rooms, and outdoor terraces, it's one of the most intelligent choices available. The cost is a fraction of imported stone, and the material genuinely belongs here.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Granite</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Granite is the workhorse of Indian stone. It's the hardest common stone, extremely resistant to scratching and heat, and requires very little maintenance. Black Galaxy, Tan Brown, and Absolute Black are among the variants quarried domestically. For kitchen countertops, granite remains one of the most honest choices, precisely because it does what the space demands without complaint.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Aesthetically, granite is less forgiving than marble. Its speckling pattern can be difficult to integrate into minimal or restrained design languages. In more eclectic or maximalist spaces, the right granite can be striking.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Wood: The Warm Core of the Home</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Wood has been central to Indian domestic spaces for centuries. From the carved teak doors of Ahmedabad to the rosewood furniture of Kerala, the tradition is deep and the skills still exist. What's changed is the range of engineered wood products now available, which has expanded considerably.
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Teak</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Teak is expensive, beautiful, and has earned every rupee of its premium. Its natural oils make it highly resistant to moisture and insects. It doesn't expand and contract dramatically with humidity changes, which is why it was historically the material of choice for both furniture and flooring in monsoon-heavy environments.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Sustainably sourced teak is available from plantation wood operations in South India and Myanmar. It's worth verifying the source, both for ethical reasons and because plantation teak, while slightly lighter in grain than old-growth, is perfectly good for interior applications.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Sheesham (Indian Rosewood)</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Sheesham is one of the great underutilised materials in contemporary Indian interiors. Its natural grain has a warmth and complexity that imported hardwoods struggle to match. It's robust, available, and works beautifully for both structural furniture and panelling. Dhuri and Hoshiarpur in Punjab have long traditions of sheesham craftsmanship that remain active today.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-2xl font-bold font-sans">Engineered Wood</h3>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                Engineered wood boards made from real wood veneers bonded over a stable core provide the visual quality of solid wood with significantly better dimensional stability. This matters in a climate with extreme humidity swings. Solid wood furniture placed near air conditioning vents can crack. Well-made engineered wood handles the transition better.
                            </p>
                            <p className="text-lg text-[#918f8b] leading-relaxed">
                                The critical distinction is between BWR (Boiling Water Resistant) and BWP (Boiling Water Proof) plywood for carcase construction. In a kitchen or anywhere with potential water exposure, BWP is the minimum. In the rest of the home, BWR at the correct ISI standard is appropriate.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Laminates, Veneers, and When Each Makes Sense</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This is where a lot of conversations get difficult, because there's a persistent hierarchy in how these materials are perceived, with solid wood at the top and laminates at the bottom, that doesn't reflect how intelligently they can be used.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A high-quality veneer on a stable substrate looks and feels like solid wood because the surface layer is real wood. The difference is primarily in cost and dimensional stability, not appearance. For wardrobes, wall panels, and cabinetry, veneers are an intelligent specification.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Laminates have improved dramatically. The best ranges, including high-pressure laminates from quality Indian manufacturers, are scratch-resistant, easy to clean, and come in surface textures that effectively mimic stone, wood grain, and matte paint. For kitchen shutters and high-use furniture, a premium laminate on good substrate often outperforms a solid wood finish in terms of longevity.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The honest answer is that materials should be chosen for what they're asked to do. In a kitchen, durability matters most. In a bedroom, the warmth and visual quality of the surface matters more. Different answers for different spaces.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Fabrics and Soft Materials: The Climate Consideration</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Soft furnishings are frequently chosen for appearance and rarely enough for how they behave in local conditions.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Cotton and linen breathe well in heat. They soften slightly with washing and use, developing a quality of lived-in ease that synthetic fabrics can't replicate. For upholstery in warm climates, natural fibres are physiologically more comfortable to sit on for extended periods.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Velvet, which photographs extraordinarily well, requires more attention. In cities with high particulate air pollution, velvet pile traps dust and needs regular cleaning. It's not an impractical choice, but it's a demanding one.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            For rugs, handwoven dhurries in cotton or wool remain one of the best answers for Indian homes. They're washable, durable, and local craft traditions mean access to outstanding quality. Hand-knotted wool rugs from Bhadohi and Mirzapur in Uttar Pradesh are internationally exported and available domestically at good value relative to import alternatives.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Thinking in Systems, Not Swatches</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The most common material planning mistake is the swatch approach: picking individual materials independently and hoping they'll work together. Sometimes they do. Often they fight.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Better practice is to think of materials as a system with a logic. Start with the largest surface areas: floor, ceiling, and dominant wall. Settle those first, because they establish the tonal and textural register of the space. Then work inward toward furniture, cabinetry, and soft furnishings.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A useful exercise: pull all your material samples together in one place and look at them as a family. Do the tones relate? Do the textures have variety without conflict? Does the warmth-to-coolness balance feel like the space you have in mind?
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            If the answer is no, something in the group is wrong. Better to know at the sample stage than after installation.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">On Provenance</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            There's a last point worth making. Premium design, done well, tends to draw on materials that belong somewhere. Stone that came from the earth nearby. Wood grown in climates the home understands. Craft that comes from traditions connected to the region.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This isn't sentimentality. It's good design logic. Materials chosen from within a coherent geographical and cultural context tend to work together because they're responding to the same climate, the same light, the same sensibility.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            And they age together, too. Which is, ultimately, the whole point.
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
