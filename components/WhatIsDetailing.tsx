import Image from "next/image";

const features = [
  {
    icon: <Image src="/racecar.png" alt="race car" width={40} height={40} />,
    title: "We Come to You",
    body: "No need to drop off your vehicle. We arrive at your home, office, or anywhere convenient.",
  },
  {
    icon: <span className="text-4xl">🥇</span>,
    title: "Professional Grade Products",
    body: "We use industry-leading products — safe for your paint, tough on grime, and long-lasting.",
  },
  {
    icon: <Image src="/shield.png" alt="shield" width={40} height={40} />,
    title: "Protection That Lasts",
    body: "From paint decontamination to ceramic coatings, we protect your investment for years.",
  },
];

export default function WhatIsDetailing() {
  return (
    <section
      id="what-is-detailing"
      className="bg-baby-blue py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand uppercase tracking-[0.2em] text-sm font-medium mb-4">
            The Service
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug mb-6">
            What is Mobile Detailing?
          </h2>
          <p className="text-brand-dark/70 text-lg leading-relaxed">
            Mobile detailing is a full-service car cleaning and restoration experience —
            delivered right to your location. Unlike a standard car wash, detailing goes
            deep: decontaminating paint, conditioning leather, polishing surfaces, and
            applying protective coatings that keep your car looking pristine for months.
          </p>
        </div>

        {/* Two-column layout: text + feature cards */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-brand-dark/70 text-base leading-relaxed">
            <p>
              A standard wash removes surface dirt. Detailing corrects paint imperfections,
              eliminates swirl marks, hydrates interior surfaces, and applies barrier
              protection — bringing vehicles back to a near-factory finish.
            </p>
            <p>
              With Titanium Mobile Detailing, that same showroom-quality service is
              performed on your schedule, at your location — no waiting rooms, no drop-offs,
              no hassle.
            </p>
            <p>
              Whether you drive a Toyota / Honda or a Lamborghini / Porsche, we focus on delivering the best detail we can — whether it be interior, exterior, or even a ceramic coating, we have you covered.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-5 p-6 bg-white rounded-lg shadow-sm border border-brand/10 hover:shadow-md transition-shadow duration-200"
              >
                <span className="flex-shrink-0 flex items-center">{f.icon}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-brand-dark mb-1">
                    {f.title}
                  </h3>
                  <p className="text-brand-dark/65 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
