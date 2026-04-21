"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import Image from "next/image"

export default function VaastuBlog() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 w-full max-w-[900px] mx-auto px-6">
                {/* Blog Header */}
                <div className="mb-12">
                    <p className="text-sm font-medium text-[#918f8b] mb-6">May 18, 2026</p>
                    <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] mb-8">
                        Vaastu Without the Mythology: What the Ancient Science of Space Actually Teaches Us
                    </h1>
                    <p className="text-lg md:text-xl text-[#918f8b] leading-relaxed font-medium max-w-3xl">
                        Integrating traditional wisdom into modern, balanced layouts.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-black/5">
                    <Image
                        src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop"
                        alt="Vaastu"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Blog Content */}
                <div className="max-w-none space-y-8">
                    <section className="space-y-4">
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            There are two kinds of conversations about Vaastu in design circles. The first treats it as an inviolable system of rules that must be followed to the letter, or something unfortunate will happen. The second dismisses it entirely as superstition.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Neither conversation is particularly useful.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            What Vaastu Shastra actually is, at its core, is a sophisticated 4,000-year-old system of environmental design. Long before building science had instruments, before solar studies were computerised, before we understood thermal comfort or indoor air quality, someone worked out that a building's orientation, room placement, and the movement of people through it made a profound difference to the quality of life inside.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            They were right. And most of the principles hold up.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">What the Texts Actually Say</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Vaastu Shastra, which translates roughly as the "science of dwelling," is part of the Sthapatyaveda, one of the Upavedas or supplementary texts that evolved from the Vedic tradition. The foundational principles appear in texts like the Manasara and the Mayamata, which describe in considerable detail how buildings should be oriented, how rooms should be distributed, and how the five elements, earth, water, fire, air, and space, should be balanced within a dwelling.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The system is built on two primary ideas. First, that a building exists within a larger natural system, and the way it's positioned relative to the sun, wind, and cardinal directions directly affects the experience of those inside. Second, that different rooms, by virtue of what happens in them, have different energetic requirements, and placing them in directions that support those requirements creates coherence and ease.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This is not mysticism. It's environmental logic expressed in the vocabulary of its time.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Orientation and Light: The Most Valuable Principle</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The most consistently rational element of Vaastu is its insistence on east-facing entrances and the prioritisation of north and northeast for living spaces.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The east is where the sun rises. An east-facing entrance means morning light enters the home first thing in the day. Morning light is cooler, less intense, and rich in the spectrum that sets our circadian rhythm. Homes that receive good morning light in their primary spaces feel more alive than those that don't, and there's solid sleep science behind why this is.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The northeast is considered the most auspicious corner in Vaastu. Keep it open, uncluttered, and ideally open to the outdoors or receiving good light. From an architectural standpoint, this makes sense: the northeast receives both morning and afternoon light in the northern hemisphere. An open corner here allows cross-ventilation and prevents the directional dead zone that heats up in a sealed space.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The southwest is traditionally recommended for the master bedroom. The southwest receives the afternoon sun, which has already done its most intense work and is moving toward dusk. This quadrant heats slowly and retains warmth, which makes it good for sleeping.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            These are not arbitrary. In a country that gets six to eight months of intense heat, how a house faces and how it manages the sun's movement through the day is one of the most consequential design decisions possible.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Kitchen in the Southeast</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Vaastu places the kitchen in the southeast, associating this direction with Agni, the fire element. The southeast receives morning sun but is shaded from the harshest afternoon heat. For a kitchen that produces heat of its own, this is considered supportive rather than adversarial.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            There's a further practical logic. The prevailing wind patterns in most parts of the subcontinent mean that cooking smells carried from a southeast kitchen dissipate away from the primary living and sleeping areas rather than through them. This is a subtle but genuinely pleasant feature in homes where it's done well.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The strongest Vaastu prohibition is on kitchens in the north or northeast. Architecturally, this makes sense: a kitchen that receives all-day light and morning heat while also generating cooking heat is a space that will be chronically uncomfortable. The warning holds.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Bedroom and the Head Direction</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            One Vaastu principle that generates particular attention is the direction in which you sleep. Specifically, the recommendation against sleeping with your head facing north.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The Earth's magnetic field runs from south to north. The human body generates a very weak bioelectric field. Some researchers have noted correlations between north-south sleeping orientation and disrupted sleep, though the evidence remains inconclusive. What's interesting is that this principle appears independently in both Vaastu and in some Feng Shui traditions, suggesting it was derived empirically from observation rather than invented.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The practical recommendation from most Vaastu practitioners for bedrooms is south or east for the head while sleeping. This aligns with placing beds against the south or east walls of the room, which in southwest-facing master bedrooms tends to also produce better furniture arrangements relative to windows and doors.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Brahmasthan: The Heart of the Home</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Vaastu describes the centre of a building as the Brahmasthan, the place of Brahma, meant to be open, light, and free from heavy structural elements. Traditionally, this was expressed through the courtyard, the central open space around which traditional Indian homes were organised.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The courtyard was not merely spiritual. It was brilliant environmental design. A central open space creates a thermal chimney effect: hot air rising from the courtyard draws cooler air through the surrounding rooms. It provides natural light to all rooms, including those that wouldn't otherwise receive direct sunlight. It creates an outdoor living space protected from the street while open to the sky.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The courtyard as a spatial concept has nearly disappeared from urban apartment design, replaced by central storage, bathrooms, and lift lobbies. But the principle is recoverable in modified form. Double-height atria, skylights, and central living spaces with high ceilings capture some of what the courtyard offered. The instinct, in Vaastu terms, is simply that the centre of a home should breathe.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Applying Vaastu to a Modern Apartment</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Here's where honesty is required. Not every apartment can be made fully Vaastu-compliant. Floor plates designed for density don't always allow for southeast kitchens or north-facing entrances. If you're choosing between apartments and Vaastu alignment is important to you, orientation is the most significant thing to check, because it cannot be changed.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            For existing apartments, the practical approach is to identify the most impactful principles and apply them, while not tying yourself in knots over things that require structural changes.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The following can almost always be addressed without major intervention:
                        </p>
                        <ul className="space-y-3 text-lg text-[#918f8b] leading-relaxed ml-4 mt-4">
                            <li><strong>Clear the northeast corner.</strong> If the northeast of your home has heavy furniture, clutter, or a dark storage space, redistributing these creates an immediately perceptible lightness in the home. This one change is consistently noted by people who begin working with Vaastu.</li>
                            <li><strong>Orient the bed correctly.</strong> Head pointing south or east, not north. This requires only a furniture rearrangement and costs nothing.</li>
                            <li><strong>Assess the light.</strong> Vaastu's most valuable guidance is about light. Walk through your home at different times of day and see where light enters and how it moves. Rooms that feel heavy and dark often feel that way for this reason, and minor interventions in how furniture is placed relative to windows can shift the quality of the space significantly.</li>
                            <li><strong>Keep the entrance clear.</strong> A cluttered entrance, one that requires you to navigate bags, shoes, and furniture the moment you enter, creates friction in the way you experience your home every day. Vaastu is insistent on an unobstructed, well-lit entrance. This is good design logic regardless of one's views on the metaphysical.</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Vaastu and Contemporary Design</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The best contemporary work with Vaastu treats it as a layer of intelligence to bring into the design process rather than a constraint to navigate around.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The architect Urvi Shah's work provides an example: in a residence in Vadodara, the entire building is organised around a square geometry derived from the ancient nine-square Vaastu grid, with a courtyard drawing in light and expressing the Brahmasthan principle. It is simultaneously one of the most sophisticated contemporary houses in India and one of the most thoroughly Vaastu-aligned.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The insight is that Vaastu and good design aren't in tension. They're drawing from the same well: the desire to create spaces where people thrive.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">The Real Purpose</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Vaastu Shastra's core aim is to create homes where positive energy, or prana, flows without obstruction. Translate that into contemporary language and it means homes where light and air move freely, where the layout supports daily patterns of life, where different activities have spaces calibrated to their nature, and where the environment of the home actively supports the wellbeing of the people inside.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            That is still the right goal. The ancient texts had the direction right. The application, for any given contemporary home, requires judgment and intelligence rather than mechanical rule-following.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Which is to say: Vaastu works best when it's understood, not just obeyed.
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
