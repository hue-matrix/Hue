"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import Image from "next/image"

export default function FinishesBlog() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 w-full max-w-[900px] mx-auto px-6">
                {/* Blog Header */}
                <div className="mb-12">
                    <p className="text-sm font-medium text-[#918f8b] mb-6">Apr 15, 2026</p>
                    <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] mb-8">
                        Finishes: Why Your Walls Do More Work Than You Think
                    </h1>
                    <p className="text-lg md:text-xl text-[#918f8b] leading-relaxed font-medium max-w-3xl">
                        Exploring textures and surfaces that define a room's character and functionality.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-black/5">
                    <Image
                        src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop"
                        alt="Wall Finishes"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Blog Content */}
                <div className="max-w-none space-y-8">
                    <section className="space-y-4">
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            There's a moment, usually toward the end of a project, when a space transforms. The furniture is in, the light fittings are up, and then the painter arrives. What happens to those walls will either make everything sing or quietly kill the whole effort.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Most people spend months choosing sofas, tiles, and kitchen layouts. The wall finish gets about two days of attention and a trip to the nearest paint store. It's one of the most common missteps in residential interiors, and one of the easiest to avoid.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This is a piece about finishes. Not just paint, but the full range of surface treatments available today: what they are, how they behave in our climate, and how to choose one that actually earns its place in your home.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Why Finishes Matter Beyond Aesthetics</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A finish is not decoration. It's a working surface. It manages humidity, reflects or absorbs light, ages gracefully or badly, and responds to heat in ways you'll live with for years.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            In a subcontinent climate with temperatures that swing between 45°C summers and dry, dusty winters, your walls are under constant stress. Standard plastic emulsion paint, which is what most homes end up with by default, handles none of this particularly well. It traps moisture, turns yellow in UV-rich environments, and requires repainting every three to four years. For a premium home, that's simply not good enough.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The good news is the range of alternatives has grown considerably, and much of it is now accessible in India without importing anything exotic.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Lime Wash: The Oldest Finish in the World, Still Relevant</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Lime wash is made from slaked limestone and water. It's been used on walls for thousands of years, from Mediterranean farmhouses to the havelis of Rajasthan, and it remains one of the most intelligent finishes available.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            What lime does is breathe. Because it's porous, it allows moisture to pass through the wall rather than accumulating behind the surface. In a country where monsoons last months and humidity climbs hard, this matters. Lime naturally resists mould and mildew without any chemical additives, because its high pH creates an environment where organic growth simply doesn't happen.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Visually, lime wash is irreplaceable. It creates depth through layering. Each coat is slightly translucent, so the finished wall has a quality that flat paint cannot replicate. The colour moves as the light moves. In morning light it reads differently than in the evening. It develops a subtle patina as it ages, which is something that gets better with time rather than worse.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            It requires a skilled applicator. This is not a brush-it-on-and-call-it-done job. The technique matters, and the result reflects the craftsperson. Which is precisely why it looks expensive, because it is. But in a home that's meant to last a decade without looking tired, it's one of the more worthwhile investments you can make on the walls.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Venetian Plaster: When You Want Luxury Without Loudness</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Venetian plaster is made from crushed marble and natural lime. The finish is applied in thin layers with a steel trowel and burnished to a polished surface that has the quiet depth of stone.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Unlike stone itself, it can cover an entire room seamlessly. No grout lines. No joints. Just a continuous, living surface that shifts between matte and sheen depending on the angle of the light. In bedrooms and living rooms, it creates an atmosphere of stillness that is very difficult to achieve with any other material.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            It comes in two main variants. Veneziano is the polished, high-lustre version that reads almost like marble. Marmorino is slightly more textured, with a matte to mid-sheen finish and more visible movement in the surface. Both are available from Indian suppliers today, many of whom work with European-origin lime combined with local pigments.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The caveat is the same as lime wash: you need someone who knows what they're doing. A poorly applied Venetian plaster looks lumpy and amateurish. A well-applied one is genuinely one of the most beautiful wall surfaces you will encounter.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Microcement: The Contemporary Choice for Seamless Interiors</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Microcement is a cement-based coating applied in thin layers, usually 2-3mm, that creates a completely seamless surface across walls, floors, countertops, and even furniture. It's the reason you see those impossibly smooth, continuous bathroom walls in architectural photography.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            It's waterproof when sealed correctly, which makes it an excellent choice for bathrooms and wet areas where you want the visual calm of a single uninterrupted surface. In a kitchen or a walk-in wardrobe, it adds a cool, textural modernity that laminates and tiles simply can't match.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The colour range in microcement runs from industrial greys and warm beiges to terracottas and deep charcoals. Customisation is high. You can tint it to almost any shade.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            It requires more technical expertise to apply than the others, and the surface must be perfectly prepared beforehand. Any cracks or imperfections in the substrate will telegraph through. When done right, though, it ages beautifully and rarely needs attention beyond a reseal every few years.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Textured Paints and What to Watch Out For</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The market is full of products sold as "textured finishes" that are essentially acrylic paints with added fillers. Some of these are fine for budget projects. For a premium home, they're worth approaching with caution.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The difference between a real lime or plaster finish and an acrylic textured paint is not just visual. Lime is breathable and mineral; most acrylic products are not. Over time, especially in humid conditions, synthetic textured paints can bubble, peel, and trap moisture against the wall.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            If you're considering a textured finish, ask your designer or supplier whether the product is acrylic or mineral-based. The answer tells you a lot about how it will behave over time.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Climate Factor: What Works in Our Conditions</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This is worth dwelling on because it's where a lot of decisions go wrong.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Homes in the northern plains experience extraordinary heat followed by genuine winter cold. The diurnal range can be 20-25 degrees. Materials expand and contract significantly. Lime-based finishes handle this well because they're naturally flexible at a microstructural level. Acrylic paints are stiffer and more prone to cracking at joints and corners.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Humidity-wise, monsoon months bring conditions that would destroy certain finishes if they aren't appropriate for the substrate. Microcement, properly sealed, handles humidity well. Lime, being breathable, handles it naturally. Venetian plaster does too, though it needs a light sealer in bathrooms.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The worst performer in high humidity is standard oil-based or enamel paint on internal walls. It looks fine initially and then starts failing at the skirting and in corners as moisture works its way in from below or behind.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">How to Choose</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A few honest questions help narrow things down:
                        </p>
                        <ul className="space-y-3 text-lg text-[#918f8b] leading-relaxed ml-4">
                            <li><strong>What's the quality of light in the room?</strong> Rooms with good natural light are where Venetian plaster and lime wash shine brightest. North-facing rooms that are naturally dimmer might benefit from a warmer, slightly reflective finish rather than a matte one.</li>
                            <li><strong>What's the traffic?</strong> Entrance lobbies and hallways need durable finishes. Microcement and Venetian plaster are both hard-wearing. Lime wash is softer and may need touching up in high-contact areas.</li>
                            <li><strong>What's the maintenance appetite?</strong> Lime wash is the most forgiving to touch up. Venetian plaster and microcement require a professional if significant repair is needed.</li>
                            <li><strong>Is there a consistency of look across the home?</strong> Mixing too many finish types across a single home can make it feel scattered. Usually two, maybe three different finish treatments across an entire apartment is the right limit.</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">One Last Thought</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The finish is the final layer between your design intent and how someone actually experiences the space. It's the texture your hand runs across, the surface the light plays on, the thing you look at every single day.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            It rewards careful thought. It rewards good materials. And it repays the investment in skill every time someone walks into the room and feels, without being able to say exactly why, that the place is different.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            That difference is the finish doing its job.
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
