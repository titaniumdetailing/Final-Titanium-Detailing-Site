import Image from "next/image";

const reasons = [
  {
    icon: <Image src="/pin.png" alt="location pin" width={40} height={40} />,
    title: "We Come to You",
    body: "No driving, no waiting rooms. We arrive at your home or office and get to work while you carry on with your day.",
  },
  {
    icon: "🎓",
    title: "Trained Professionals",
    body: "We are trained, insured, and passionate about delivering a flawless finish — every single time.",
  },
  {
    icon: "🥇",
    title: "Premium Products Only",
    body: "We only use professional-grade products. Nothing abrasive, nothing that cuts corners — just the best for your vehicle.",
  },
  {
    icon: "⏱️",
    title: "Respect for Your Time",
    body: "We show up on time, communicate clearly, and finish when we say we will. Your schedule matters to us.",
  },
  {
    icon: "💯",
    title: "Satisfaction Guaranteed",
    body: "If you're not happy with any part of your service, we'll make it right — no questions asked.",
  },
  {
    icon: "🔁",
    title: "Flexible Scheduling",
    body: "Book online, by phone, or by text. We offer evenings and weekends to fit around your life.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-baby-blue py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Our Promise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug mb-6">
            Why Choose Titanium?
          </h2>
          <p className="text-brand-dark/70 text-lg leading-relaxed">
            We built this business on one principle: treat every car as if it were our own.
            Here&apos;s what that means in practice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="group">
              <div className="bg-white rounded-xl p-8 border border-brand/10 shadow-sm h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-5">{r.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-brand-dark mb-3">
                  {r.title}
                </h3>
                <p className="text-brand-dark/65 text-sm leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-20 bg-brand rounded-xl px-10 py-12 text-center">
          <h3 className="font-serif text-3xl font-bold text-white mb-4">
            Ready for a Flawless Finish?
          </h3>
          <p className="text-white/70 mb-8 text-base max-w-xl mx-auto">
            Book your detail today and experience the Titanium difference.
            Most appointments available within 48 hours.
          </p>
          <a
            href="#book"
            className="inline-block px-8 py-4 bg-white text-brand font-semibold rounded hover:bg-baby-blue hover:text-brand-dark transition-colors duration-200 text-base tracking-wide"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
