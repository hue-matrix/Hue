"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CTA } from "@/components/sections/CTA"
import Image from "next/image"

export default function DesignThemesBlog() {
    return (
        <main className="min-h-screen bg-[#efebe5] text-black selection:bg-black selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 w-full max-w-[900px] mx-auto px-6">
                {/* Blog Header */}
                <div className="mb-12">
                    <p className="text-sm font-medium text-[#918f8b] mb-6">May 25, 2026</p>
                    <h1 className="text-6xl md:text-7xl lg:text-[64px] xl:text-[72px] font-sans font-medium tracking-tighter leading-[1.05] mb-8">
                        Design Themes Explained: How to Choose One That Actually Reflects You
                    </h1>
                    <p className="text-lg md:text-xl text-[#918f8b] leading-relaxed font-medium max-w-3xl">
                        Finding the visual language that resonates with your lifestyle.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-black/5">
                    <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                        alt="Design Themes"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Blog Content */}
                <div className="max-w-none space-y-8">
                    <section className="space-y-4">
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The word "theme" gets a bad reputation in design. It conjures images of Mediterranean villas with terracotta everything, or nautical rooms where the anchor motif appears on the cushions, the towels, and possibly the welcome mat.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            That's not a design theme. That's a costume.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A real design theme, or more accurately, a design language, is something subtler and more structural. It's the underlying set of values and choices that make a home feel coherent. It's the reason you can remove every item from a well-designed room and still know, from the proportions, the materials, and the spatial logic, what kind of home this is.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This piece is about that. About how design themes actually work, which ones are most relevant right now, and how to find the one that's genuinely yours rather than the one you think you're supposed to want.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">What a Design Theme Is (and Isn't)</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A design theme is not an aesthetic mood board. It's not a collection of matching references pulled from the same corner of Pinterest. And it's certainly not a label you apply after the fact.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A design theme is a point of view. It answers the question: what does this home believe about how people should live?
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A Japandi home believes in clarity and intention. Nothing is there by accident. A maximalist home believes in abundance and the right to express everything that delights you. A heritage-led home believes in the value of things with history. These aren't just visual positions. They're philosophical ones, and the best-designed homes make them felt without ever having to state them.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The practical implication is that you cannot pick a design theme the way you pick a paint colour. You arrive at it by reflecting on how you actually live, what you value, and what you want to feel when you come home.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Japandi: The Discipline of Enough</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            If there's one design language that has had the most sustained influence on premium interiors globally over the past several years, it's Japandi. The name is a portmanteau of Japanese and Scandinavian, and the aesthetic draws from the philosophical cores of both traditions.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            From Japan: the concept of wabi-sabi, the finding of beauty in imperfection, in age, in the marks that time and use leave behind. A slightly asymmetric ceramic. A wooden surface with visible grain knots. A wall with deliberate texture rather than the factory-smooth finish that erases all evidence of human hand.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            From Scandinavia: hygge, the idea of warmth and psychological comfort as design goals. Light that feels human in scale. Materials that invite touch. Spaces that feel livable rather than performative.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            What emerges is a design language that prizes natural materials, a quiet palette of warm neutrals and soft earthy tones, low furniture with clean lines, and the deliberate removal of anything that doesn't earn its place. It is, in many ways, a response to the oversaturation of contemporary life. A Japandi home is meant to feel like a breath.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            For urban homes in busy cities, this resonates deeply. The cultural translation to an Indian context is also more natural than it might initially appear. The Zen principle of the impermanent and the incomplete sits comfortably alongside Indian philosophies of impermanence. Handcraft is native here. Natural materials like teak, jute, and handthrown ceramics fit the Japandi palette without strain.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Wabi-Sabi: Celebrating What's Real</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Wabi-sabi deserves a separate mention because while it's related to Japandi, it has a distinct character and a particular resonance in this cultural context.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Wabi-sabi is the art of the worn, the weathered, and the beautifully imperfect. It's the reclaimed wood table that shows every year of its previous life. It's the handmade bowl with an irregular lip. It's the wall that was limewashed rather than painted smooth.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            For a country with extraordinary traditions of handcraft, reclaimed materials, and objects with histories, wabi-sabi is less an imported aesthetic than a return to something already present. The antique brass hookah base that's been repurposed as a lamp. The handblock-printed fabric that uses slightly uneven repeats because it was made by a person, not a machine. The stone floor that shows decades of polish and use rather than the uniform flatness of brand-new tile.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            What wabi-sabi resists is the impersonal. The matched set. The room that looks like it was delivered from a showroom yesterday, all together, never having had a life. Wabi-sabi homes feel inhabited. They have layers, history, and texture. They feel, in the best sense, lived in.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Indo-Contemporary: The Most Honest Choice</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Indo-contemporary is not a term you'll find in a Western design textbook. But it describes something real and increasingly sophisticated: the design language that emerges when you take contemporary spatial principles, modern materials, and clean functional planning, and layer into it the genuine cultural richness of this part of the world.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            It's not heritage design in the traditional sense. There's no attempt to recreate a historical room or to use motifs as decoration. Instead, it's a sensibility that's comfortable with craftsmanship, that values objects with cultural specificity, and that doesn't feel the need to disguise where it comes from.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            In practice, this might mean: clean, contemporary spatial planning with generous volumes and good light. A neutral palette of warm stone and white plaster. And then carefully chosen pieces that have real cultural presence: a Channapatna lacquerware bowl on a side table, a dhurrie woven in a traditional pattern but in a contemporary colour story, a brass lamp in a form that references temple oil lamps without quoting them directly.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            This is a harder design language to execute than the others, because it requires judgment rather than formula. There's no mood board template for Indo-contemporary. It's built from genuine knowledge of the crafts and traditions that can contribute to it, combined with a sophisticated understanding of how to compose them with contemporary form.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            When it's done well, it's the design language that feels most authentically right for this context. It doesn't need to explain itself or reference any external source of authority. It simply belongs.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Maximalism: More, Intentionally</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Maximalism is regularly misunderstood. People hear "maximalist" and imagine rooms so packed with things that they become visually exhausting. But done well, maximalism is not excess. It is curated abundance.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The distinction is critical. A maximalist home has a strong point of view. The richness is deliberate, not accumulated. Each choice is in dialogue with the others. There's a governing logic, even if it's harder to articulate than the spare clarity of Japandi.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Maximalism tends to work well for people who collect things, who love colour, who find minimal spaces slightly cold. The design challenge is finding the internal logic that holds it together: a consistent colour story, even amid variety of pattern; a materiality that anchors the space even amid a density of objects; and a discipline about what enters the room even when the philosophy is permissive.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A maximalist room that isn't working feels chaotic. One that is working feels like looking at a person with a very distinct, fully articulated personality. You might not want to live in it yourself, but you know exactly who does, and it's genuinely admirable.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">How to Find Your Theme</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Here's a more useful exercise than browsing design references: write down ten words that describe how you want your home to feel. Not look. Feel.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Words like: calm. Warm. Layered. Interesting. Surprising. Rooted. Open. Alive. Restrained. Generous.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Those words are more revealing than any visual reference. They describe the emotional experience you're optimising for, and they'll point toward a design language more accurately than any single image ever could.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            Then ask yourself: what do I actually live with now that I genuinely love? Not what's aspirational, but what's yours. The things you'd take in a fire.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The answers to those two exercises, what you want to feel and what you already love, usually converge on something specific and true. That's your design language. The rest is execution.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-3xl font-bold font-serif">Themes Are Not Prisons</h2>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            One last thought. Whatever design language you choose, it should give you a framework for decisions, not an obligation to refuse anything that doesn't fit the label.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            The homes that feel most alive are the ones with a clear sensibility and one or two things that break it, thoughtfully. The otherwise spare Japandi room with one deeply coloured painting. The maximalist space with one entirely empty wall. The Indo-contemporary apartment with a single piece of unabashedly European mid-century furniture that, inexplicably, works perfectly.
                        </p>
                        <p className="text-lg text-[#918f8b] leading-relaxed">
                            A design theme is a set of values, not a set of rules. The best designers know the difference, and their clients feel it every day.
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
